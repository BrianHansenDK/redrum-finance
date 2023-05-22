import { onValue, ref } from 'firebase/database'
import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, ButtonGroup, CheckPicker, DatePicker, DateRangePicker, Divider, Form, Input, InputGroup, Message, Toggle, Uploader, useToaster } from 'rsuite'
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
import { msgInner, pushError, pushSuccess, vanumoColors, vanumoMainBtn } from '../../admin/theme/vanumoTheme'

const CreateProjectPage = () => {
    const [projectTitle, setProjectTitle] = useState('')
    const [projectIntro, setProjectIntro] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectStartDate, setProjectStartDate] = useState<any>(new Date())
    const [projectEndDate, setProjectEndDate] = useState<any>(new Date())
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
    const [gallery, setGallery] = useState<any[]>([])
    const [galleryUrls, setGalleryUrls] = useState<string[]>([])
    const [pitchVideo, setPitchVideo] = useState('')
    const [files, setFiles] = useState<any[]>([])
    const [fileUrls, setFileUrls] = useState<string[]>([])
    const [fileNames, setFileNames] = useState<string[]>([])
    const [finalFiles, setFinalFiles] = useState<any>()
    const [hasClosure, setHasClosure] = useState<boolean>(false)
    const [projectClosure, setProjectClosure] = useState<any>(new Date())

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

    // Avatar - small picture

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

  // Banner - Big Picture on Bundle page
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
                })
            })
        }
    }

    // Overview - Picture on Dashboard

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
                      toaster.push(
                      <PushNotification type='error' content={`An error occured: ${err.message}`} />,
                      { placement: 'topCenter' })

                  })
              })
          }
      }

    // Presentation - Picture in presentation card
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
                        toaster.push(<Message type='error' duration={10000} style={pushError}>
                          <span style={msgInner}>An error occured: ${err.message}</span>
                        </Message>, { placement: 'topCenter' })
                    })
                })
            }
        }


        // Gallery - Multiple pictures

        const handleGallery = (e: any) => {
          let data: any[] = []
          const target: EventTarget & any = e.target
          if (target.files.length > 0) {
            const files = target.files;
            setGallery(files)
          }
        }

          const handleGallerySubmit = () => {
            let data: string[] = []
              if (gallery.length > 0 && projectTitle !== '') {
                gallery.forEach((img: any, index: number) => {
                  const imageRef = storageRef(storage, `images/projects/${projectTitle.split(' ').join('_')}/gallery/image-${index}`)
                  uploadBytes(imageRef, img).then((snap) => {
                      getDownloadURL(imageRef).then((url) => {
                          data.push(url)
                      }).catch((err) => {
                          toaster.push(<Message type='error' style={pushError} duration={10000}>
                            <span style={msgInner}>An error occured: ${err.message}</span>
                          </Message>, { placement: 'topCenter' })
                      }).finally(() => {
                        setGalleryUrls(data)
                      })
                  })
                })
              }
          }

        // FILES - Multiple files

        const handleFiles = (e: any) => {
          let data: any[] = []
          let names: string[] = []
          const target: EventTarget & any = e.target
          if (target.files.length > 0) {
            const f = target.files;
            setFiles(f);
            f.forEach((file: any) => {
              names.push(file.name)
            });
            setFileNames(names);
          }
        }

          const handleFilesSubmit = () => {
            let data: string[] = []
            let finalData: any = []
              if (files.length > 0 && projectTitle !== '') {
                files.forEach((file: any, index) => {
                  const fileRef = storageRef(storage, `documents/projects/${projectTitle.split(' ').join('_')}/${file.name}`)
                  uploadBytes(fileRef, file).then((snap) => {
                      getDownloadURL(fileRef).then((url) => {
                          data.push(url)
                          finalData.push({name: fileNames[index], url: url})
                      }).catch((err) => {
                          toaster.push(<Message type='error' style={pushError} duration={10000}>
                            <span style={msgInner}>An error occured: ${err.message}</span>
                          </Message>, { placement: 'topCenter' })
                      }).finally(() => {
                        setFileUrls(data); console.log(fileNames);
                        setFinalFiles(finalData)
                      })
                  })
                })
              }
          }


    const makeProject = () => {
        writeProjectData(Date.now().toString(), projectTitle, projectIntro, projectDescription,
            projectStartDate.toJSON(),
            projectEndDate.toJSON(),
            projectPublication,
            Number(projectGoal),
            Number(projectInvested),
            Number(projectReturn),
            Number(projectValue),
            projectMovies,
            avatarUrl,
            bannerUrl,
            overviewUrl,
            presentationUrl,
            galleryUrls,
            pitchVideo,
            finalFiles,
            hasClosure,
            projectClosure.toJSON()
        )

        toaster.push(<Message type='success' style={pushSuccess} duration={10000}>
          <span style={msgInner}>Succesfully added Project/Bundle to the Application 🚀</span>
        </Message>, { placement: 'bottomCenter' })
    }


    return (
        <>
            <div style={styles.contentWrap} className='flex-column'>
                <h1 style={styles.pageTitle} className='txt-center'>Create Project</h1>

                <Form fluid style={styles.form}>

                    {/* TITLE */}
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Project title</FormControlLabel>
                        <Input onChange={setProjectTitle} maxLength={20} placeholder='Title of the project/bundle' />
                    </FormGroup>

                    {/* INTRO */}
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Project intro</FormControlLabel>
                        <Input onChange={setProjectIntro} maxLength={28} placeholder='The short description introducing the project/bundle' />
                    </FormGroup>

                    {/* DESCRIPTION */}
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Project description</FormControlLabel>
                        <Input onChange={setProjectDescription} as='textarea' rows={5} maxLength={350} placeholder='The long description of the project/bundle' />
                    </FormGroup>

                    {/* AVATAR */}
                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel style={styles.label}>Project Avatar</FormControlLabel>
                            <input accept='image/*' type='file' onChange={handleAvatar} className='custom-file-input-prpl'/>
                            <Button style={styles.uploadBtn} onClick={handleAvatarSubmit} disabled={avatar == null}>
                                Set avatar
                            </Button>
                        </div>
                        <Avatar circle size='lg' src={avatarUrl !== '' ? avatarUrl : PLACEHOLDER} />
                    </FormGroup>
                    <Divider />

                    {/* BANNER */}
                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel style={styles.label}>Project banner</FormControlLabel>
                            <input accept='image/*' type='file' onChange={handleBanner} className='custom-file-input-prpl'/>
                            <Button style={styles.uploadBtn} onClick={handleBannerSubmit} disabled={banner == null}>
                                Set banner
                            </Button>
                        </div>
                        <img style={styles.avatar} src={bannerUrl !== '' ? bannerUrl : PLACEHOLDER} />
                    </FormGroup>
                    <Divider />

                    {/* OVERVIEW IMAGE */}
                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel style={styles.label}>Project overview</FormControlLabel>
                            <input accept='image/*' type='file' onChange={handleOverview} className='custom-file-input-prpl'/>
                            <Button style={styles.uploadBtn} onClick={handleOverviewSubmit} disabled={overview == null}>
                                Set overview
                            </Button>
                        </div>
                        <img style={styles.avatar} src={overviewUrl !== '' ? overviewUrl : PLACEHOLDER} />
                    </FormGroup>
                    <Divider />

                    {/* PRESENTATION */}
                    <FormGroup style={styles.imageUploader} >
                        <div className='d-flex flex-column'>
                            <FormControlLabel style={styles.label}>Project presentation</FormControlLabel>
                            <input accept='image/*' type='file' onChange={handlePresentation} className='custom-file-input-prpl'/>
                            <Button style={styles.uploadBtn} onClick={handlePresentationSubmit} disabled={presentation == null}>
                                Set presentation
                            </Button>
                        </div>
                        <img style={styles.avatar} src={presentationUrl !== '' ? presentationUrl : PLACEHOLDER} />
                    </FormGroup>
                    <Divider />

                    {/* GALLERY */}
                    <FormGroup style={styles.imageUploader} className='gallery-creation-con'>
                        <div className='d-flex flex-column'>
                            <FormControlLabel style={styles.label}>Project Gallery</FormControlLabel>
                            <input accept='image/*' type='file' multiple onChange={handleGallery} className='custom-file-input-prpl'/>
                            <Button style={styles.uploadBtn} onClick={handleGallerySubmit} disabled={gallery.length === 0}>
                                Set gallery
                            </Button>
                        </div>
                        {galleryUrls.length === 0 ? null :
                        (
                          <div className='gallery-creation-showcase'>
                            {galleryUrls.map((url) => (
                              <img key={url} src={url !== '' ? url : PLACEHOLDER} />
                            ))}
                          </div>
                        )

                        }

                    </FormGroup>
                    <Divider />

                    {/* FILES */}
                    <FormGroup style={styles.imageUploader} className='gallery-creation-con'>
                        <div className='d-flex flex-column'>
                            <FormControlLabel style={styles.label}>Project Files</FormControlLabel>
                            <input accept='application/pdf' type='file' multiple onChange={handleFiles} className='custom-file-input-prpl'/>
                            <Button style={styles.uploadBtn} onClick={handleFilesSubmit} disabled={files.length === 0}>
                                Add Files
                            </Button>
                        </div>
                        {fileUrls.length === 0 ? null :
                        (
                          <div>
                            {fileNames.map((fileName) => (
                              <p>File: {fileName}</p>
                            ))}
                          </div>
                        )

                        }

                    </FormGroup>
                    <Divider />

                    <FormGroup>
                        <FormControlLabel style={styles.label}>Project Movies</FormControlLabel>
                        <CheckPicker
                            onChange={setProjectMovies}
                            label='movies' data={movieData}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormControlLabel style={styles.label}>Pitch video</FormControlLabel>
                        <Input
                            placeholder='Paste Youtube url here...'
                            onChange={setPitchVideo}
                        />
                    </FormGroup>


                    <FormGroup>
                        <FormControlLabel style={styles.label}>Start date</FormControlLabel>
                        <DatePicker
                            placeholder='YYYY-MM-dd'
                            onChange={setProjectStartDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>End date</FormControlLabel>
                        <DatePicker
                            placeholder='YYYY-MM-dd'
                            onChange={setProjectEndDate}
                        />
                    </FormGroup>
                    <FormGroup>
                      <p className='mb-1'><Toggle onChange={setHasClosure}/> &nbsp;&nbsp; Does the project have the "Project Closure" value?</p>
                      {hasClosure ? (
                        <>
                          <FormControlLabel style={styles.label}>Project closure</FormControlLabel>
                          <DatePicker
                              placeholder='YYYY-MM-dd'
                              onChange={setProjectClosure}
                          />
                        </>
                      ) : null}

                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Publication</FormControlLabel>
                        <Input onChange={setProjectPublication} placeholder='Write the publication' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Investment goal</FormControlLabel>
                        <Input onChange={setProjectGoal} type='number' placeholder='The amount you wish to have invested for the project/bundle' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Pre invested</FormControlLabel>
                        <Input onChange={setProjectInvested} type='number' placeholder='How much did you already invest in this project?' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Project value</FormControlLabel>
                        <Input onChange={setProjectValue} type='number' placeholder='How much is the project worth?' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Guaranteed return</FormControlLabel>
                        <Input onChange={setProjectReturn} type='number' placeholder='How much is guaranteed to recieve back in % ?' />
                    </FormGroup>
                    <ButtonGroup>
                      <Button block appearance='primary' style={vanumoMainBtn} onClick={makeProject} size='lg'>
                        Add Project
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
        color: mainColors.dark,
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
    },
    label: {
      color: mainColors.dark,
    },
    uploadBtn: {
      backgroundColor: vanumoMainBtn.backgroundColor,
      color: vanumoMainBtn.color,
      fontWeight: vanumoMainBtn.fontWeight,
      boxShadow: vanumoMainBtn.boxShadow,
      marginTop: 15,
    },
}

export default CreateProjectPage
