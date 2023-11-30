import React from 'react'
import { Button, Input, Message, Modal, useToaster } from 'rsuite';
import { storage, storageRef } from '../../../../../../firebaseStorage';
import { StorageReference, deleteObject, getDownloadURL, uploadBytes } from 'firebase/storage';
import { FirebaseBundle } from '../../../../../../database/Objects';
import FormHelpText from 'rsuite/esm/FormHelpText';
import PLACEHOLDER from '../../../../../../components/images/Placeholder_icon.svg'
import { YOUTUBE } from '../../../../../../misc/custom-hooks';
import { updateProjectCACSection } from '../../../../../../firebase';


interface IProps {
    project: FirebaseBundle,
    isOpen: boolean,
    isBanner: boolean,
    close: any,
    closeOuter: any,
    sectionType: number,
}

const SectionCreationModal = (props: IProps) => {
    const {project, isOpen, close, closeOuter, sectionType, isBanner} = props;
    const toaster = useToaster()

    // variable states
    const [title, setTitle] = React.useState<string>('');
    const [titleGerman, setTitleGerman] = React.useState<string>('');
    const [paragraph, setParagraph] = React.useState<string>('');
    const [paragraphGerman, setParagraphGerman] = React.useState<string>('');

    const [image, setImage] = React.useState<any>();
    const [imageSrc, setImageSrc] = React.useState<string>('');

    const [youtubeLink, setYoutubeLink] = React.useState<string>('');

    let uploadedImageRef: StorageReference


    // ImageUpload
    const handleImage = (e: any) => {
        let data: any[] = []
        const target: EventTarget & any = e.target
        if (target.files.length > 0) {
          const files = target.files;
          setImage(files)
        }
      }
    
        const handleImageSubmit = async () => {
          let data: string[] = []
            if (image.length > 0 && project.name! !== '') {
              image.forEach((img: any, index: number) => {
                const imageRef = isBanner ? storageRef(storage, `images/projects/${project.name!.split(' ').join('_')}/cast_and_crew/banners/${img.name}`)
                : storageRef(storage, `images/projects/${project.name!.split(' ').join('_')}/cast_and_crew/${img.name}`)
                uploadedImageRef = imageRef
                uploadBytes(imageRef, img).then((snap) => {
                    getDownloadURL(imageRef).then((url) => {
                        data.push(url); setImageSrc(url)
                    }).catch((err) => {
                        toaster.push(<Message type='error' duration={10000}>
                          An error occured: {err.message} - Please try again!
                        </Message>, { placement: 'topCenter' })
                    }).then(() => {
                      //updateProjectSAndCImages(project.id!, data)
                    }).finally()
                })
              })
            }
        }
    /*
        const HandleVideoSubmit = async () => {
            let data: string[] = videoLinks.replace(/ /g, '').split(',').map((link) => YOUTUBE(link))
            if (data.length > 0) {
                await updateProjectSAndCVideos(project.id!, data)
            }
            closeModal();
        }*/


        const uploadSection = async () => {
            const section = [
                {title: title, title_german: titleGerman, body: paragraph, body_german: paragraphGerman, image_url: imageSrc, video_url: youtubeLink}
            ]
            await updateProjectCACSection(project.id!, section)
            close(); closeOuter();
            window.setTimeout(() => window.location.reload(), 1000);
        }

        const cancelSection = () => {
            if (imageSrc !== "") {
                deleteObject(uploadedImageRef).then(() => close()).catch((err) => {
                    toaster.push(<Message type='error' closable showIcon duration={8000}>
                        {err.message}
                    </Message>)
                })
            } else close()
        }

  return (
    <Modal open={isOpen} onClose={close} size='full'>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Section title: (Leave empty if you don't want a title)</p>
            <label htmlFor="" style={{color: 'rgb(51,51,51)'}}>English</label>
            <Input onChange={setTitle} placeholder='Write English title here'/>
            <label htmlFor="" style={{color: 'rgb(51,51,51)'}}>German:</label>
            <Input onChange={setTitleGerman} placeholder='Write German title here'/><br/> <br/>
          {sectionType === 1 ? (
            <>
            <p>Section text:</p>
            <label htmlFor="" style={{color: 'rgb(51,51,51)'}}>English</label>
            <Input as={'textarea'} rows={10} onChange={setParagraph} placeholder='Write text here'/>
            <label htmlFor="" style={{color: 'rgb(51,51,51)'}}>German</label>
            <Input as={'textarea'} rows={10} onChange={setParagraphGerman} placeholder='Write text here'/>
            </>
          ) : sectionType === 2 ? (
            <>
            <input
            accept="image/*"
            type="file"
            onChange={handleImage}
            className="custom-file-input-prpl"
            />
            <Button onClick={handleImageSubmit}>
                set Banner
            </Button>
            {imageSrc === '' ? (
                <div className='mt-2' style={{width: '100%', height: 150, background: 'grey'}} />
            ) : (
            <img className='mt-2' src={imageSrc} alt="Image" style={{width: '100%', height: 150}} />
            )}
            </>
          ): sectionType === 3 || sectionType === 4 ? (
            <div style={{display: 'flex', alignItems: 'center', width: '100%', columnGap: 50}}>
            <div style={{display: 'flex', flexDirection: 'column', flexShrink: 0, flexGrow: 0, width: '50%'}}>
                { sectionType === 3 ? (
                    <>
            <input
            accept="image/*"
            type="file"
            onChange={handleImage}
            className="custom-file-input-prpl"
            />
            <Button style={{width: 120}} className='mt-1 r-btn r-main-btn' appearance='primary' onClick={handleImageSubmit}>
                set Image
            </Button>
            <img className='mt-2' src={imageSrc === '' ? PLACEHOLDER : imageSrc} alt="Image" style={{width: '50%', height: 'auto'}} />
            </>) : (
                <>
                    <p>Video link:</p>
                    <Input onChange={setYoutubeLink} placeholder='Write text here'/>
                    <iframe className='mt-1' style={{width: '100%', height: 200}} 
                    src={youtubeLink === '' ? YOUTUBE('https://www.youtube.com/watch?v=Rxv165h1vws') : YOUTUBE(youtubeLink)} 
                    title="How to EASILY install Skyrim Script Extender (SKSE)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </>
            )}
            </div>
            <div style={{width: '50%'}}>
            <p>Section text: (Leave empty if you want picture to fill out section)</p>
            <label htmlFor="" style={{color: 'rgb(51,51,51)'}}>English</label>
            <Input as={'textarea'} rows={4} onChange={setParagraph} placeholder='Write english text here'/>
            <label htmlFor="" style={{color: 'rgb(51,51,51)'}}>German</label>
            <Input as={'textarea'} rows={4} onChange={setParagraphGerman} placeholder='Write German text here'/>
            </div>
            </div>
          ) : null}

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={uploadSection} appearance="primary">
            Post
          </Button>
          <Button onClick={() => {
            setTitle(''); setParagraph(''); setImageSrc(''); cancelSection();
          }} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default SectionCreationModal