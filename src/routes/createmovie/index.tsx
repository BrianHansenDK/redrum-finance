import { ref } from 'firebase/database'
import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, ButtonGroup, ButtonToolbar, DatePicker, Form, Input, Message, useToaster } from 'rsuite'
import FormControlLabel from 'rsuite/esm/FormControlLabel'
import FormGroup from 'rsuite/esm/FormGroup'
import { msgInner, pushError, pushSuccess, vanumoColors, vanumoMainBtn } from '../../admin/theme/vanumoTheme'
import PushNotification from '../../components/Notification'
import { database, writeMovieData } from '../../firebase'
import { storage, storageRef } from '../../firebaseStorage'
import MainBtn from '../inside-app/components/MainBtn'
import { mainColors } from '../inside-app/themes/colors'
import mainShadows from '../inside-app/themes/shadows'
import PLACEHOLDER from '../../assets/empty_img.png'

const CreateMoviePage = () => {
    const [title, setTitle] = useState('')
    const [intro, setIntro] = useState('')
    const [des, setDes] = useState('')
    const [trailerUrl, setTrailerUrl] = useState('')
    const [genres, setGenres] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [image, setImage] = useState(null)
    const [imageUrl, setUrl] = useState('')

    const [loading, setLoading] = useState(false)

    const toaster = useToaster()

    const makeMovie = () => {

        setLoading(true)
        writeMovieData(
          Date.now().toString(), title, intro, des, new Date(releaseDate), genres, imageUrl, trailerUrl
          )
        setLoading(false)

        toaster.push(
            <Message
                type='success'
                style={pushSuccess}
                duration={10000}
            >
              <p style={msgInner}>
               Movie succesfully added to the database 🚀
              </p>
            </Message>,
            { placement: 'bottomCenter' }
        )
    }

    const handleImage = (e: any) => {
        const target: EventTarget & any = e.target
        if (target.files[0]) {
            setImage(target.files[0])
        }
    }

    const handleImageSubmit = () => {
        if (image !== null && title !== '') {
            const imageRef = storageRef(storage, `images/movies/${title.split(' ').join('_')}/cover`)
            uploadBytes(imageRef, image).then((snap) => {
                getDownloadURL(imageRef).then((url) => {
                    setUrl(url)
                }).catch((err) => {
                    toaster.push(
                    <Message type='error' style={pushError} >
                      <p style={msgInner}>
                        An error occured: ${err.message}
                      </p>
                    </Message>, { placement: 'topCenter' })
                    window.setTimeout(() => {
                        toaster.clear()
                    }, 8000)
                })
            })
        }
    }



    return (
        <>
            <div style={styles.contentWrap} className='flex-column'>
                <h1 className='txt-center v-dash-title mt-2'>Create Movie</h1>

                <Form fluid style={styles.form}>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Movie title</FormControlLabel>
                        <Input onChange={setTitle} maxLength={20} placeholder='Title of the movie' />
                    </FormGroup>

                    <FormGroup>
                        <FormControlLabel style={styles.label}>Movie intro</FormControlLabel>
                        <Input onChange={setIntro} maxLength={28} placeholder='The short introduction of the movie' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Movie description</FormControlLabel>
                        <Input onChange={setDes} as='textarea' rows={5} maxLength={350} placeholder='The  description of the movie' />
                    </FormGroup>
                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel style={styles.label}>Movie cover</FormControlLabel>
                            <input type='file' onChange={handleImage} className='custom-file-input-prpl' />
                            <Button style={styles.btn} onClick={handleImageSubmit}>
                                Set cover
                            </Button>
                        </div>
                        <img style={styles.avatar} src={imageUrl !== '' ? imageUrl : PLACEHOLDER} />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Release date</FormControlLabel>
                        <Input
                        placeholder='Format: yyyy-MM-dd'
                        onChange={setReleaseDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Movie genres</FormControlLabel>
                        <Input onChange={setGenres} placeholder='Seperate with ,' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Trailer link</FormControlLabel>
                        <Input onChange={setTrailerUrl} maxLength={20} placeholder='Paste the link to the trailer here' />
                    </FormGroup>
                    <ButtonGroup>
                        <Button
                            onClick={makeMovie}
                            style={vanumoMainBtn}
                            appearance='primary'
                            size='lg'
                            block
                            disabled={loading}
                        >
                            Add Movie
                        </Button>

                    </ButtonGroup>
                </Form>
            </div>
        </>
    )
}

const styles = {
    contentWrap: {
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pageTitle: {
        color: mainColors.white,
    },
    form: {
        width: 80 + '%',
        maxWidth: 750,
        padding: 25,
    },
    imageUploader: {
        display: 'flex',
    },
    avatar: {
        boxShadow: mainShadows.image,
        marginLeft: 50,
        height: 100,
        width: 'auto',
    },
    label: {
      color: vanumoColors.dark,
    },
    btn: {
      backgroundColor: vanumoMainBtn.backgroundColor,
      color: vanumoMainBtn.color,
      fontWeight: vanumoMainBtn.fontWeight,
      boxShadow: vanumoMainBtn.boxShadow,
      marginTop: 15,
    }
}

export default CreateMoviePage
