import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, CheckPicker, DatePicker, DateRangePicker, Form, Input, InputGroup, Uploader, useToaster } from 'rsuite'
import FormControlLabel from 'rsuite/esm/FormControlLabel'
import FormGroup from 'rsuite/esm/FormGroup'
import PushNotification from '../../components/Notification'
import { database, writeProjectData } from '../../firebase'
import MainBtn from '../inside-app/components/MainBtn'
import { mainColors } from '../inside-app/themes/colors'
import MainLayout from '../layouts/mainLayout'
import './index.scss'

const CreateProjectPage = () => {
    const [projectTitle, setProjectTitle] = useState('')
    const [projectIntro, setProjectIntro] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectStartDate, setProjectStartDate] = useState(new Date('2023-09-25 17:00'))
    const [projectEndDate, setProjectEndDate] = useState(new Date('2023-09-25 17:00'))
    const [projectGoal, setProjectGoal] = useState('')
    const [projectInvested, setProjectInvested] = useState('')
    const [projectValue, setProjectValue] = useState('')
    const [projectReturn, setProjectReturn] = useState('')
    const [projectMovies, setProjectMovies] = useState([])

    const toaster = useToaster()


    let data: any[] = []
    const reference = ref(database, 'movies/')
    onValue(reference, (snap) => {
        snap.forEach((movie) => {
            data.push(movie.val())
        })
    })

    const movieData = data.map((item) => (
        {
            label: item.title,
            value: item.id
        }
    ))


    const makeProject = () => {
        writeProjectData(Date.now().toString(), projectTitle, projectIntro, projectDescription,
            projectStartDate.toDateString(),
            projectEndDate.toDateString(),
            Number(projectGoal),
            Number(projectInvested),
            Number(projectReturn),
            Number(projectValue),
            projectMovies,
        )

        toaster.push(<PushNotification type='success' content='Succesfully added Project/Bundle to the Application 🚀' />, { placement: 'bottomCenter' })

        window.setTimeout(() => {
            toaster.clear()
        }, 3000)
    }


    return (
        <MainLayout openModal={null} closeModal={() => null} isVisible={false}>
            <div style={styles.contentWrap} className='flex-column'>
                <h1 style={styles.pageTitle} className='txt-center'>Create Project</h1>

                <Form fluid style={styles.form}>
                    <FormGroup>
                        <FormControlLabel>Project title</FormControlLabel>
                        <Input onChange={setProjectTitle} maxLength={20} placeholder='Title of the project/bundle' />
                    </FormGroup>

                    <FormGroup>
                        <FormControlLabel>Project intro</FormControlLabel>
                        <Input onChange={setProjectIntro} maxLength={28} placeholder='The short description introducing the project/bundle' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Project description</FormControlLabel>
                        <Input onChange={setProjectDescription} as='textarea' rows={5} maxLength={350} placeholder='The long description of the project/bundle' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Project Movies</FormControlLabel>
                        <CheckPicker
                            onChange={setProjectMovies}
                            label='movies' data={movieData}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Start date</FormControlLabel>
                        <DatePicker
                            format="yyyy-MM-dd HH:mm" placeholder='Select start date'
                            onChange={() => setProjectStartDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>End date</FormControlLabel>
                        <DatePicker
                            format="yyyy-MM-dd HH:mm" placeholder='Select end date'
                            onChange={() => setProjectEndDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Investment goal</FormControlLabel>
                        <Input onChange={setProjectGoal} type='number' placeholder='The amount you wish to have invested for the project/bundle' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Pre invested</FormControlLabel>
                        <Input onChange={setProjectInvested} type='number' placeholder='How much did you already invest in this project?' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Project value</FormControlLabel>
                        <Input onChange={setProjectValue} type='number' placeholder='How much is the project worth?' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Guaranteed return</FormControlLabel>
                        <Input onChange={setProjectReturn} type='number' placeholder='How much is guaranteed to recieve back in % ?' />
                    </FormGroup>
                    <ButtonGroup>
                        <MainBtn content={'Add Project'}
                            pressed={makeProject}
                            btnColor='blue'
                            btnAppearance='primary'
                            btnSize='lg'
                            isBlock />

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

export default CreateProjectPage