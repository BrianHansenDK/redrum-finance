import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { FunctionComponent, useState } from 'react'
import { Button, ButtonGroup, Message, Modal, useToaster } from 'rsuite'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { storage, storageRef } from '../../../../../../../firebaseStorage'
import { mainColors } from '../../../../../../../routes/inside-app/themes/colors'
import { vanumoColors, vanumoShadows } from '../../../../../../theme/vanumoTheme'
import { updateProjectGallery } from '../../../../../../../firebase'

interface IProps {
  project: FirebaseBundle,
  type: string,
  source: any,
  closeModal: any,
  isVisible: boolean,
  srcs?: string[],
  multiple: boolean,
}

const VProjectImageUpdate: FunctionComponent<IProps> = (props) => {
  const toaster = useToaster()
  const { project, type, source, closeModal, isVisible, srcs, multiple } = props
  const [currentImage, setCurrentImage] = useState(null)
  const [gallery, setGallery] = useState<any[]>([])

  const handleImage = (e: any) => {
    const target: EventTarget & any = e.target
    if (target.files[0]) {
        setCurrentImage(target.files[0])
    }
  }

  const handleSubmit = () => {
    if (currentImage !== null) {
        const imageRef = storageRef(storage, `images/projects/${project.name!.split(' ').join('_')}/${type}`)
        uploadBytes(imageRef, currentImage).then((snap) => {
            getDownloadURL(imageRef).then((url) => {
                toaster.push(
                  <Message type='success' style={styles.success}>
                    <span style={styles.msgInner}>
                      {type}-image has been changed succesfully
                    </span>
                  </Message>, {placement: 'bottomCenter'}
                )
            })
        }).catch((err) => {
            toaster.push(<Message type='error' style={styles.error} duration={5000}>
              <span style={styles.msgInner}>
                {err.message}
              </span>
            </Message>, { placement: 'bottomCenter' })
        }).finally(() => {
          window.setTimeout(() => {
            window.location.reload()
        }, 3000)
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

    const handleGallerySubmit = async () => {
      let data: string[] = []
        if (gallery.length > 0 && project.name! !== '') {
          gallery.forEach((img: any, index: number) => {
            const imageRef = storageRef(storage, `images/projects/${project.name!.split(' ').join('_')}/gallery/image-${index}`)
            uploadBytes(imageRef, img).then((snap) => {
                getDownloadURL(imageRef).then((url) => {
                    data.push(url)
                }).catch((err) => {
                    toaster.push(<Message type='error' duration={10000}>
                      An error occured: {err.message} - Please try again!
                    </Message>, { placement: 'topCenter' })
                }).then(() => {
                  updateProjectGallery(project.id!, data)
                }).finally(() => closeModal())
            })
          })
        }
    }

  return (
    <Modal open={isVisible} onClose={closeModal} >
        <Modal.Header>
            <Modal.Title>
                {type} Image
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.body}>
            <input accept='image/*' type="file" multiple={multiple}
            onChange={multiple ? handleGallery : handleImage} className='custom-file-input-prpl' />
            <div className='d-flex flex-column'>
              {multiple ? srcs !== undefined && srcs !== null ? (
                srcs.map((img, index) => (
                  <img style={styles.image} src={img} alt={`Gallery Image-${index} for ${project.name}`} />
                ))
              ) : null :
              (
                <img style={styles.image} src={source} alt={`Image for ${project.name}`} />
              )}
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='numbers-btns-wrap'>
                <Button style={styles.saveBtn} onClick={multiple ? handleGallerySubmit : handleSubmit}
                disabled={currentImage == null && (multiple && gallery.length === 0)} color='blue' appearance='primary'>
                    Save
                </Button>
                <Button style={styles.cancelBtn} onClick={closeModal} color='blue' appearance='primary' >
                    Cancel
                </Button>
            </div>
        </Modal.Footer>
    </Modal>
  )
}

const styles = {
  body: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 50,
      paddingBottom: 100,
  },
  image: {
      width: 200,
      height: 150,
      borderRadius: 5,
  },
  chooseBtn: {
      marginTop: 15,
  },
  saveBtn: {
      width: 'calc(50% - 12.5px)',
      fontWeight: '700',
      backgroundColor: vanumoColors.main,
      color: mainColors.white,
      boxShadow: vanumoShadows.image,
  },
  cancelBtn: {
    width: 'calc(50% - 12.5px)',
    fontWeight: '700',
    backgroundColor: mainColors.white,
    color: vanumoColors.main,
    boxShadow: vanumoShadows.image,
  },
  success: {
    backgroundColor: vanumoColors.main,
  },
  error: {
    backgroundColor: mainColors.red,
  },
  msgInner: {
    color: mainColors.white,
  },
}

export default VProjectImageUpdate
