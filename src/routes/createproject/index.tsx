import { onValue, ref } from 'firebase/database'
import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, ButtonGroup, CheckPicker, DatePicker, DateRangePicker, Divider, Form, Input, InputGroup, InputPicker, Message, Modal, SelectPicker, Toggle, Uploader, useToaster } from 'rsuite'
import FormControlLabel from 'rsuite/esm/FormControlLabel'
import FormGroup from 'rsuite/esm/FormGroup'
import PushNotification from '../../components/Notification'
import { database, getProjectCount, overWriteProjects, overwriteShares, writeProjectData } from '../../firebase'
import { storage, storageRef } from '../../firebaseStorage'
import MainBtn from '../inside-app/components/MainBtn'
import { mainColors } from '../inside-app/themes/colors'
import mainShadows from '../inside-app/themes/shadows'
import MainLayout from '../layouts/mainLayout'
import PLACEHOLDER from '../../assets/profileimage_placeholder.svg'
import './index.scss'
import { msgInner, pushError, pushSuccess, vanumoColors, vanumoMainBtn } from '../../admin/theme/vanumoTheme'

const CreateProjectPage = () => {
    // ----- Variables -----
    const toaster = useToaster()

    // ----- States -----

    // Modal
    const [modalStep, setModalStep] = useState(1); // Track the current step
    const [modalOpen, setModalOpen] = useState(false);

    // Form
    const [projectType, setProjectType] = useState('')
    const [projectTitle, setProjectTitle] = useState('')
    const [projectIntro, setProjectIntro] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectStartDate, setProjectStartDate] = useState<any>(new Date())
    const [projectEndDate, setProjectEndDate] = useState<any>(new Date())
    const [projectPublication, setProjectPublication] = useState('')
    const [projectGoal, setProjectGoal] = useState('')
    const [projectInvested, setProjectInvested] = useState('')
    const [projectValue, setProjectValue] = useState('')
    const [projectedReturn, setProjectedReturn] = useState('')
    const [projectMovies, setProjectMovies] = useState([])
    const [status, setStatus] = useState(0)
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
    const [shareReturn, setShareReturn] = useState('')
    const [shareRunTime, setShareRunTime] = useState('')
    const [shareMin, setShareMin] = useState('')
    const [projectReturn, setProjectReturn] = useState('')
    const [stakeRunTime, setStakeRunTime] = useState('')
    const [stakeMin, setStakeMin] = useState('')

    // --- Modal functions ---

    // Function to open the modal for a specific step
  const openModal = (step: number) => {
    setModalStep(step);
    setModalOpen(true);
  };

  // Function to close the current modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to validate and move to the next step
  const handleNext = () => {
    // Add validation for each step here
    if (modalStep === 1) {
      if (projectType === '' || projectTitle === '' || 
      projectIntro === '' || projectDescription === '') {
        toaster.push(
          <Message type="error" showIcon closable duration={8000}>
            {projectType === '' ? 'Project Category' : projectTitle == "" ? 'Title' : 
            projectIntro == "" ? 'Subtitle' : 'Description'} is missing. Please fill out the information to continue.
          </Message>
        );
      } else {
        // If all validation passes, move to the next step
        setModalStep(modalStep + 1);
      }
    } else if (modalStep === 2) {
        if (avatarUrl === '' || bannerUrl === '' || overviewUrl === '' || presentationUrl === '') {
          toaster.push(
            <Message type="error" showIcon closable duration={8000}>
              {avatarUrl == "" ? 'Avatar' : bannerUrl == "" ? 'Banner' : overviewUrl == "" ? 'Overview' : 'Presentation'}&nbsp;
              image is missing. Please add the image to continue.
            </Message>
          );
        } else {
          // If all validation passes, move to the next step
          setModalStep(modalStep + 1);
        }
    } else if (modalStep === 3) {
        if (status === 0 || projectStartDate === new Date() || projectEndDate === new Date() 
        || (hasClosure && projectClosure === new Date()) || projectPublication === "" ) {
          toaster.push(
            <Message type="error" showIcon closable duration={8000}>
              {status == 0 ? 'Status' : 
              projectStartDate == new Date() ? 'Investment Start date' : 
              projectEndDate == new Date() ? 'Investment Deadline' : 
              'Start of Return'}&nbsp;
              is missing. Please add the information to continue.
            </Message>
          );
        } else {
          // If all validation passes, move to the next step
          setModalStep(modalStep + 1);
        }
    } else if (modalStep === 4) {
        if (projectGoal === '' || projectInvested === '' || 
        projectValue === '' || projectedReturn === '') {
          toaster.push(
            <Message type="error" showIcon closable duration={8000}>
              {projectGoal == '' ? 'Funding Target' : 
              projectInvested == '' ? 'Already invested ammount' : 
              projectValue == '' ? 'Project Evaluation' : 
              projectedReturn === '' ? 'Projected Return' :
              'Information'}&nbsp;
              is missing. Please add the information to continue.
            </Message>
          );
        } else {
          // If all validation passes, move to the next step
          setModalStep(modalStep + 1);
        }
    } else if (modalStep === 5) {
        if (shareReturn === '' || shareRunTime === '' || shareMin === '') {
          toaster.push(
            <Message type="error" showIcon closable duration={8000}>
              {shareReturn == '' ? 'Projected Return' : 
              shareRunTime == '' ? 'Shareholder Runtime' : 
              shareMin == '' ? 'Shareholder minimum investment amount' : 
              'Information'}&nbsp;
              is missing. Please add the information to continue.
            </Message>
          );
        } else {
          // If all validation passes, move to the next step
          setModalStep(modalStep + 1);
        }
    } else if (modalStep === 6) {
        if (projectReturn === '' || stakeRunTime === '' || stakeMin === '') {
          toaster.push(
            <Message type="error" showIcon closable duration={8000}>
              {projectReturn == '' ? 'Projected Return' : 
              stakeRunTime == '' ? 'Stakeholder Runtime' : 
              stakeMin == '' ? 'Stakeholder minimum investment amount' : 
              'Information'}&nbsp;
              is missing. Please add the information to continue.
            </Message>
          );
        } else {
          // If all validation passes, move to the next step
          setModalStep(modalStep + 1);
        }
    }
  };
    

    // --- Get existing movies ---

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

    // --- Add Images and files functions ---

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

        // Set project count
        const [making, setMaking] = useState<boolean>(false);
        const [pCount, setPCount] = useState<number>(0);

        React.useEffect(() => {
          getProjectCount(setPCount)
        }, [making])


    // Name says it all. Look at Firebase.tsx to see what it does
    const makeProject = () => {
      setMaking(true)
      writeProjectData(pCount, 
          projectType, projectTitle, projectIntro, projectDescription, 
          avatarUrl, bannerUrl, overviewUrl, presentationUrl,
          status, projectStartDate.toJSON(), projectEndDate.toJSON(), projectPublication,
          hasClosure, projectClosure.toJSON(),
          Number(projectGoal), Number(projectInvested), Number(projectValue), Number(projectedReturn),
          shareReturn, shareRunTime, Number(shareMin),
          Number(projectReturn), stakeRunTime, Number(stakeMin),
          galleryUrls,
          finalFiles,
          pitchVideo,
          () => {     
              toaster.push(<Message type='success' style={pushSuccess} duration={10000}>
            <span style={msgInner}>Succesfully added Project/Bundle to the Application 🚀</span>
          </Message>, { placement: 'topCenter' })
        }, (err: Error) => {
            toaster.push(<Message type='error' closable duration={10000}>
            {err.message} 
          </Message>, { placement: 'topCenter' })
        },
        () => closeModal()
      )
    }


    return (
        <>
            <div style={styles.contentWrap} className='flex-column'>
                <h1 style={styles.pageTitle} className='txt-center'>Create Project</h1>

                <Button appearance="primary" onClick={() => openModal(1)}>
                    Start
                </Button>

                <Modal
                open={modalOpen}
                onClose={closeModal}
                size="md"
                backdrop="static"
                >
                    <Modal.Header>
                      <Modal.Title>Step {modalStep} {
                      modalStep === 5 ? 'Shareholder information' :
                      modalStep === 6 ? 'Stakeholder information' : null}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form fluid style={styles.form}>
                            {modalStep === 1 ? (
                          <>
                          {/* CATEGORY */}
                          <FormGroup>
                                <FormControlLabel style={styles.label}>Project Category*</FormControlLabel>
                                <InputPicker value={projectType}
                                    onChange={setProjectType}
                                    data={[
                                        {label: 'Films', value: 'Films'},
                                        {label: 'Books', value: 'Books'},
                                        {label: 'Games', value: 'Games'},
                                        {label: 'Audiobooks', value: 'Audiobooks'},
                                        {label: 'Comics', value: 'Comics'},
                                        {label: 'Manga', value: 'Manga'},
                                        {label: 'Music', value: 'Music'},
                                        {label: 'Anime', value: 'Anime'},
                                        {label: 'Fashion', value: 'Fashion'},
                                        {label: 'Merchandise', value: 'Merchandise'},
                                    ]}
                                />
                            </FormGroup>
                            {/* TITLE */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>Project title*</FormControlLabel>
                                <Input value={projectTitle} onChange={setProjectTitle} maxLength={20} placeholder='Title of the project/bundle' />
                            </FormGroup>
                                    
                            {/* INTRO */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>Project subtitle*</FormControlLabel>
                                <Input value={projectIntro} onChange={setProjectIntro} maxLength={28} placeholder='The short description introducing the project/bundle' />
                            </FormGroup>
                                    
                            {/* DESCRIPTION */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>Project description*</FormControlLabel>
                                <Input value={projectDescription} onChange={setProjectDescription} as='textarea' rows={5} maxLength={350} placeholder='The long description of the project/bundle' />
                            </FormGroup>
                          </>
                        ) : modalStep === 2 ? (
                            <>
                                {/* AVATAR */}
                            <FormGroup style={styles.imageUploader} >
                                <div className='d-flex flex-column'>
                                    <FormControlLabel style={styles.label}>Project Avatar*</FormControlLabel>
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
                                    <FormControlLabel style={styles.label}>Project banner*</FormControlLabel>
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
                                    <FormControlLabel style={styles.label}>Project overview*</FormControlLabel>
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
                                    <FormControlLabel style={styles.label}>Project presentation*</FormControlLabel>
                                    <input accept='image/*' type='file' onChange={handlePresentation} className='custom-file-input-prpl'/>
                                    <Button style={styles.uploadBtn} onClick={handlePresentationSubmit} disabled={presentation == null}>
                                        Set presentation
                                    </Button>
                                </div>
                                <img style={styles.avatar} src={presentationUrl !== '' ? presentationUrl : PLACEHOLDER} />
                            </FormGroup>
                            <Divider />
                            </>
                        ) : modalStep === 3 ? (
                            <>
                                {/* PROJECT STATUS */}
                                <FormGroup>
                                <FormControlLabel style={styles.label}>Project Status*</FormControlLabel>
                                <InputPicker value={status}
                                    onChange={setStatus}
                                    data={[
                                        {label: 'Funding', value: 1},
                                        {label: 'Shooting', value: 2},
                                        {label: 'Postproduction', value: 3},
                                        {label: 'Released', value: 4},
                                    ]}
                                />
                            </FormGroup>
                                
                            {/* START DATE */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>investment Start date*</FormControlLabel>
                                <DatePicker value={projectStartDate}
                                    placeholder='YYYY-MM-dd'
                                    onChange={setProjectStartDate}
                                />
                            </FormGroup>
                                
                            {/* END DATE */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>Investment Deadline*</FormControlLabel>
                                <DatePicker value={projectEndDate}
                                    placeholder='YYYY-MM-dd'
                                    onChange={setProjectEndDate}
                                />
                            </FormGroup>
                                
                            {/* PROJECT CLOSURE */}
                            <FormGroup>
                              <p className='mb-1'><Toggle onChange={setHasClosure}/> &nbsp;&nbsp; Does the project have the "Project Closure" value?</p>
                              {hasClosure ? (
                                <>
                                  <FormControlLabel style={styles.label}>Project closure</FormControlLabel>
                                  <DatePicker value={projectClosure}
                                      placeholder='YYYY-MM-dd'
                                      onChange={setProjectClosure}
                                  />
                                </>
                              ) : null}
                            </FormGroup>
                            
                            {/* PUBLICATION */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>Start of Return*</FormControlLabel>
                                <Input value={projectPublication} onChange={setProjectPublication} placeholder='Write the amount of months' />
                            </FormGroup>
                            </>
                        ) : modalStep === 4 ? (
                            <>
                                {/* INVESTMENT GOAL */}
                                <FormGroup>
                                <FormControlLabel style={styles.label}>Funding Target*</FormControlLabel>
                                <Input value={projectGoal} onChange={setProjectGoal} type='number' placeholder='The amount you wish to have invested for the project/bundle' />
                                </FormGroup>
                        
                            {/* ALREADY INVESTED */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>Already invested*</FormControlLabel>
                                <Input value={projectInvested} onChange={setProjectInvested} type='number' placeholder='How much did you already invest in this project?' />
                            </FormGroup>
                        
                            {/* PROJECT VALUE */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>Project Evaluation*</FormControlLabel>
                                <Input value={projectValue} onChange={setProjectValue} type='number' placeholder='How much is the project worth?' />
                            </FormGroup>

                            {/* PROJECT PROJECTED RETURN */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>Projected Return*</FormControlLabel>
                                <Input value={projectedReturn} onChange={setProjectedReturn} type='number' placeholder='Write the precentage (%)' />
                            </FormGroup>
                            </>
                        ): modalStep === 5 ? (
                            <>
                                {/* SHARE PROJECTED RETURN */}
                                <FormGroup>
                                    <FormControlLabel style={styles.label}>Shareholder Return Cap*</FormControlLabel>
                                    <Input value={shareReturn} onChange={setShareReturn} placeholder='Write the percentage (%)' />
                                </FormGroup>

                                {/* SHARE RUN TIME */}
                                <FormGroup>
                                    <FormControlLabel style={styles.label}>Shareholder Runtime*</FormControlLabel>
                                    <Input value={shareRunTime} onChange={setShareRunTime} placeholder='Write the runtime for a shareholder' />
                                </FormGroup>

                                {/* SHARE MINIMUM INVESTMENT */}
                                <FormGroup>
                                <FormControlLabel style={styles.label}>Shareholder Minimum Investment*</FormControlLabel>
                                <Input value={shareMin} onChange={setShareMin} type='number' placeholder='The minimum ammount you need to invest to be a shareholder' />
                                </FormGroup>
                            </>
                        ) : modalStep === 6 ? (
                            <>
                                {/* STAKE PROJECTED RETURN */}
                                <FormGroup>
                                    <FormControlLabel style={styles.label}>Stakeholder Return Cap*</FormControlLabel>
                                    <Input value={projectReturn} onChange={setProjectReturn} placeholder='Write the percentage (%)' />
                                </FormGroup>

                                {/* STAKE RUN TIME */}
                                <FormGroup>
                                    <FormControlLabel style={styles.label}>Stakeholder Runtime*</FormControlLabel>
                                    <Input value={stakeRunTime} onChange={setStakeRunTime} placeholder='Write the runtime for a stakeholde' />
                                </FormGroup>

                                {/* STAKE MINIMUM INVESTMENT */}
                                <FormGroup>
                                <FormControlLabel style={styles.label}>Shareholder Minimum Investment*</FormControlLabel>
                                <Input value={stakeMin} onChange={setStakeMin} type='number' placeholder='The minimum ammount you need to invest to be a stakeholder' />
                                </FormGroup>
                            </>
                        ) : modalStep === 7 ? (
                            <>
                                {/* GALLERY */}
                            <FormGroup style={styles.imageUploader} className='gallery-creation-con'>
                                <div className='d-flex flex-column'>
                                    <FormControlLabel style={styles.label}>Project Gallery (Optional)</FormControlLabel>
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
                                    <FormControlLabel style={styles.label}>Project Files (Optional)</FormControlLabel>
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
                            
                            {/* PITCH VIDEO */}
                            <FormGroup>
                                <FormControlLabel style={styles.label}>Pitch video (Optional)</FormControlLabel>
                                <Input
                                    placeholder='Paste Youtube url here...'
                                    onChange={setPitchVideo}
                                />
                            </FormGroup>
                            </>
                        ) : null}
                            {/*<FormGroup>
                                <FormControlLabel style={styles.label}>Bundles</FormControlLabel>
                                <CheckPicker
                                    onChange={setProjectMovies}
                                    label='movies' data={movieData}
                                />
                            </FormGroup>
                            
                            <ButtonGroup>
                              <Button block appearance='primary' style={vanumoMainBtn} onClick={makeProject} size='lg'>
                                Add Project
                              </Button>
                            
                            </ButtonGroup>*/}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={closeModal} appearance="subtle">
                        Cancel
                      </Button>
                      {modalStep > 1 ? (
                        <Button onClick={() => setModalStep(modalStep - 1)} appearance="subtle">
                            Back
                        </Button>
                      ) : null}
                      {modalStep < 7 ? (
                        <Button onClick={handleNext} appearance="primary">
                          Next
                        </Button>
                      ) : (
                        <Button onClick={makeProject} appearance="primary">
                          Create Project
                        </Button>
                      )}
                    </Modal.Footer>
                </Modal>

                
                
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
