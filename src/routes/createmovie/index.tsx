import { ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, ButtonToolbar, DatePicker, Form, Input, useToaster } from 'rsuite'
import FormControlLabel from 'rsuite/esm/FormControlLabel'
import FormGroup from 'rsuite/esm/FormGroup'
import PushNotification from '../../components/Notification'
import { database, writeMovieData } from '../../firebase'
import MainBtn from '../inside-app/components/MainBtn'
import { mainColors } from '../inside-app/themes/colors'
import MainLayout from '../layouts/mainLayout'

const CreateMoviePage = () => {
    const [title, setTitle] = useState('')
    const [intro, setIntro] = useState('')
    const [des, setDes] = useState('')
    const [genres, setGenres] = useState('')
    const [releaseDate, setReleaseDate] = useState(new Date())

    const [loading, setLoading] = useState(false)

    const toaster = useToaster()

    const makeMovie = () => {

        setLoading(true)
        writeMovieData(Date.now().toString(), title, intro, des, releaseDate, genres)
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


    return (
        <MainLayout openModal={null} closeModal={() => null} isVisible={false}>
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
                    <FormGroup>
                        <FormControlLabel>Release date</FormControlLabel>
                        <DatePicker
                            format="yyyy-MM-dd HH:mm" placeholder='Select release date'
                            onChange={() => setReleaseDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Project genres</FormControlLabel>
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
                            Add Project
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
}

export default CreateMoviePage