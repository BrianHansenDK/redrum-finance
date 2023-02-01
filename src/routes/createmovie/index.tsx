import { ref } from 'firebase/database'
import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, ButtonGroup, ButtonToolbar, DatePicker, Form, Input, useToaster } from 'rsuite'
import FormControlLabel from 'rsuite/esm/FormControlLabel'
import FormGroup from 'rsuite/esm/FormGroup'
import PushNotification from '../../components/Notification'
import { database, writeMovieData } from '../../firebase'
import { storage, storageRef } from '../../firebaseStorage'
import MainBtn from '../inside-app/components/MainBtn'
import { mainColors } from '../inside-app/themes/colors'
import mainShadows from '../inside-app/themes/shadows'
import MainLayout from '../layouts/mainLayout'

const CreateMoviePage = () => {
    const [title, setTitle] = useState('')
    const [intro, setIntro] = useState('')
    const [des, setDes] = useState('')
    const [genres, setGenres] = useState('')
    const [releaseDate, setReleaseDate] = useState(new Date())
    const [image, setImage] = useState(null)
    const [imageUrl, setUrl] = useState('')

    const [loading, setLoading] = useState(false)

    const toaster = useToaster()

    const makeMovie = () => {

        setLoading(true)
        writeMovieData(Date.now().toString(), title, intro, des, releaseDate, genres, imageUrl)
        setLoading(false)

        toaster.push(
            <PushNotification
                type='success'
                content='Movie succesfully added to the database 🚀'
            />,
            { placement: 'bottomCenter' }
        )
        window.setTimeout(() => {
            toaster.clear()
        }, 3000)
    }

    const handleImage = (e: any) => {
        const target: EventTarget & any = e.target
        if (target.files[0]) {
            setImage(target.files[0])
        }
    }

    const handleImageSubmit = () => {
        if (image !== null && title !== '') {
            const imageRef = storageRef(storage, `images/covers/${title.split(' ').join('_')}_movie_cover`)
            uploadBytes(imageRef, image).then((snap) => {
                getDownloadURL(imageRef).then((url) => {
                    setUrl(url)
                }).catch((err) => {
                    toaster.push(<PushNotification type='error' content={`An error occured: ${err.message}`} />, { placement: 'topCenter' })
                    window.setTimeout(() => {
                        toaster.clear()
                    }, 3000)
                })
            })
        }
    }



    return (
        <MainLayout dark={true} openModal={null} closeModal={() => null} isVisible={false}>
            <div style={styles.contentWrap} className='flex-column'>
                <h1 style={styles.pageTitle} className='txt-center'>Create Movie</h1>

                <Form fluid style={styles.form}>
                    <FormGroup>
                        <FormControlLabel>Movie title</FormControlLabel>
                        <Input onChange={setTitle} maxLength={20} placeholder='Title of the movie' />
                    </FormGroup>

                    <FormGroup>
                        <FormControlLabel>Movie intro</FormControlLabel>
                        <Input onChange={setIntro} maxLength={28} placeholder='The short introduction of the movie' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Movie description</FormControlLabel>
                        <Input onChange={setDes} as='textarea' rows={5} maxLength={350} placeholder='The  description of the movie' />
                    </FormGroup>
                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel>Movie cover</FormControlLabel>
                            <input type='file' onChange={handleImage} />
                            <Button style={{ marginTop: 15 }} onClick={handleImageSubmit}>
                                Set cover
                            </Button>
                        </div>
                        <Avatar style={styles.avatar} size='lg' src={imageUrl} />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Release date</FormControlLabel>
                        <DatePicker
                            format="yyyy-MM-dd HH:mm" placeholder='Select release date'
                            onChange={() => setReleaseDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Movie genres</FormControlLabel>
                        <Input onChange={setGenres} placeholder='Seperate with ,' />
                    </FormGroup>
                    <ButtonGroup>
                        <Button
                            onClick={makeMovie}
                            color='blue'
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
        </MainLayout>
    )
}

const styles = {
    contentWrap: {
        paddingTop: 125,
        width: 100 + '%',
        backgroundColor: mainColors.blueGrey,
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
    }
}

export default CreateMoviePage
