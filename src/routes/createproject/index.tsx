import { onValue, ref } from 'firebase/database'
import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, ButtonGroup, CheckPicker, DatePicker, DateRangePicker, Divider, Form, Input, InputGroup, Uploader, useToaster } from 'rsuite'
import FormControlLabel from 'rsuite/esm/FormControlLabel'
import FormGroup from 'rsuite/esm/FormGroup'
import PushNotification from '../../components/Notification'
import { database, writeProjectData } from '../../firebase'
import { storage, storageRef } from '../../firebaseStorage'
import MainBtn from '../inside-app/components/MainBtn'
import { mainColors } from '../inside-app/themes/colors'
import mainShadows from '../inside-app/themes/shadows'
import MainLayout from '../layouts/mainLayout'
import PLACEHOLDER from '../../assets/profileimage_placeholder.svg'
import './index.scss'

const CreateProjectPage = () => {
    const [projectTitle, setProjectTitle] = useState('')
    const [projectIntro, setProjectIntro] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectStartDate, setProjectStartDate] = useState('')
    const [projectEndDate, setProjectEndDate] = useState('')
    const [projectPublication, setProjectPublication] = useState('')
    const [projectGoal, setProjectGoal] = useState('')
    const [projectInvested, setProjectInvested] = useState('')
    const [projectValue, setProjectValue] = useState('')
    const [projectReturn, setProjectReturn] = useState('')
    const [projectMovies, setProjectMovies] = useState([])
    const [avatar, setAvatar] = useState(null)
    const [avatarUrl, setAvatarUrl] = useState('')
    const [banner, setBanner] = useState(null)
    const [bannerUrl, setBannerUrl] = useState('')
    const [overview, setOverview] = useState(null)
    const [overviewUrl, setOverviewUrl] = useState('')
    const [presentation, setPresentation] = useState(null)
    const [presentationUrl, setPresentationUrl] = useState('')

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

    const handleAvatar = (e: any) => {
      const target: EventTarget & any = e.target
      if (target.files[0]) {
          setAvatar(target.files[0])
      }
    }

    const handleAvatarSubmit = () => {
      if (avatar !== null && projectTitle !== '') {
          const imageRef = storageRef(storage, `images/projects/${projectTitle.split(' ').join('_')}/avatar`)
          uploadBytes(imageRef, avatar).then((snap) => {
              getDownloadURL(imageRef).then((url) => {
                  setAvatarUrl(url)
              }).catch((err) => {
                  toaster.push(<PushNotification type='error' content={`An error occured: ${err.message}`} />, { placement: 'topCenter' })
                  window.setTimeout(() => {
                      toaster.clear()
                  }, 3000)
              })
          })
      }
  }

  const handleBanner = (e: any) => {
    const target: EventTarget & any = e.target
    if (target.files[0]) {
        setBanner(target.files[0])
    }
  }

    const handleBannerSubmit = () => {
        if (banner !== null && projectTitle !== '') {
            const imageRef = storageRef(storage, `images/projects/${projectTitle.split(' ').join('_')}/banner`)
            uploadBytes(imageRef, banner).then((snap) => {
                getDownloadURL(imageRef).then((url) => {
                    setBannerUrl(url)
                }).catch((err) => {
                    toaster.push(<PushNotification type='error' content={`An error occured: ${err.message}`} />, { placement: 'topCenter' })
                    window.setTimeout(() => {
                        toaster.clear()
                    }, 3000)
                })
            })
        }
    }

    const handleOverview = (e: any) => {
      const target: EventTarget & any = e.target
      if (target.files[0]) {
          setOverview(target.files[0])
      }
    }

      const handleOverviewSubmit = () => {
          if (overview !== null && projectTitle !== '') {
              const imageRef = storageRef(storage, `images/projects/${projectTitle.split(' ').join('_')}/overview`)
              uploadBytes(imageRef, overview).then((snap) => {
                  getDownloadURL(imageRef).then((url) => {
                      setOverviewUrl(url)
                  }).catch((err) => {
                      toaster.push(<PushNotification type='error' content={`An error occured: ${err.message}`} />, { placement: 'topCenter' })
                      window.setTimeout(() => {
                          toaster.clear()
                      }, 3000)
                  })
              })
          }
      }
      const handlePresentation = (e: any) => {
        const target: EventTarget & any = e.target
        if (target.files[0]) {
            setPresentation(target.files[0])
        }
      }

        const handlePresentationSubmit = () => {
            if (presentation !== null && projectTitle !== '') {
                const imageRef = storageRef(storage, `images/projects/${projectTitle.split(' ').join('_')}/presentation`)
                uploadBytes(imageRef, presentation).then((snap) => {
                    getDownloadURL(imageRef).then((url) => {
                        setPresentationUrl(url)
                    }).catch((err) => {
                        toaster.push(<PushNotification type='error' content={`An error occured: ${err.message}`} />, { placement: 'topCenter' })
                        window.setTimeout(() => {
                            toaster.clear()
                        }, 3000)
                    })
                })
            }
        }

    const makeProject = () => {
        writeProjectData(Date.now().toString(), projectTitle, projectIntro, projectDescription,
            new Date(projectStartDate).toDateString(),
            new Date(projectEndDate).toDateString(),
            projectPublication,
            Number(projectGoal),
            Number(projectInvested),
            Number(projectReturn),
            Number(projectValue),
            projectMovies,
            avatarUrl,
            bannerUrl,
            overviewUrl,
            presentationUrl
        )

        toaster.push(<PushNotification type='success' content='Succesfully added Project/Bundle to the Application 🚀' />, { placement: 'bottomCenter' })

        window.setTimeout(() => {
            toaster.clear()
        }, 3000)
    }


    return (
        <MainLayout dark={true} openModal={null} closeModal={() => null} isVisible={false} en={true} setEn={() => null}>
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

                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel>Project Avatar</FormControlLabel>
                            <input type='file' onChange={handleAvatar} />
                            <Button style={{ marginTop: 15 }} onClick={handleAvatarSubmit}>
                                Set avatar
                            </Button>
                        </div>
                        <Avatar circle size='lg' src={avatarUrl !== '' ? avatarUrl : PLACEHOLDER} />
                    </FormGroup>
                    <Divider />

                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel>Project banner</FormControlLabel>
                            <input type='file' onChange={handleBanner} />
                            <Button style={{ marginTop: 15 }} onClick={handleBannerSubmit}>
                                Set banner
                            </Button>
                        </div>
                        <img style={styles.avatar} src={bannerUrl !== '' ? bannerUrl : PLACEHOLDER} />
                    </FormGroup>
                    <Divider />

                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel>Project overview</FormControlLabel>
                            <input type='file' onChange={handleOverview} />
                            <Button style={{ marginTop: 15 }} onClick={handleOverviewSubmit}>
                                Set overview
                            </Button>
                        </div>
                        <img style={styles.avatar} src={overviewUrl !== '' ? overviewUrl : PLACEHOLDER} />
                    </FormGroup>
                    <Divider />

                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel>Project presentation</FormControlLabel>
                            <input type='file' onChange={handlePresentation} />
                            <Button style={{ marginTop: 15 }} onClick={handlePresentationSubmit}>
                                Set presentation
                            </Button>
                        </div>
                        <img style={styles.avatar} src={presentationUrl !== '' ? presentationUrl : PLACEHOLDER} />
                    </FormGroup>
                    <Divider />

                    <FormGroup>
                        <FormControlLabel>Project Movies</FormControlLabel>
                        <CheckPicker
                            onChange={setProjectMovies}
                            label='movies' data={movieData}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Start date</FormControlLabel>
                        <Input
                            placeholder='YYYY-MM-dd'
                            onChange={() => setProjectStartDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>End date</FormControlLabel>
                        <Input
                            placeholder='YYYY-MM-dd'
                            onChange={() => setProjectEndDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel>Publication</FormControlLabel>
                        <Input onChange={setProjectPublication} placeholder='Write the publication' />
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
    imageUploader: {
        display: 'flex',
    },
    avatar: {
        boxShadow: mainShadows.image,
        marginLeft: 50,
        height: 100,
        width: 250,
    }
}

export default CreateProjectPage
