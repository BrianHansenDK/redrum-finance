import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { FunctionComponent, useState } from 'react'
import { Button, ButtonGroup, Message, Modal, useToaster } from 'rsuite'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { storage, storageRef } from '../../../../../../../firebaseStorage'
import { mainColors } from '../../../../../../../routes/inside-app/themes/colors'
import { vanumoColors, vanumoShadows } from '../../../../../../theme/vanumoTheme'

interface IProps {
  project: FirebaseBundle,
  type: string,
  source: any,
  closeModal: any,
  isVisible: boolean,
}

const VProjectImageUpdate: FunctionComponent<IProps> = (props) => {
  const toaster = useToaster()
  const { project, type, source, closeModal, isVisible,  } = props
  const [currentImage, setCurrentImage] = useState(null)

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
            toaster.push(<Message type='error' style={styles.error}>
              <span style={styles.msgInner}>
                {err.message}
              </span>
            </Message>, { placement: 'bottomCenter' })
        }).finally(() => {
          window.setTimeout(() => {
            toaster.clear()
        }, 8000)
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
            <input type="file" onChange={handleImage} className='custom-file-input-prpl' />
            <div className='d-flex flex-column'>
                <img style={styles.image} src={source} alt={`Image for ${project.name}`} />
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='numbers-btns-wrap'>
                <Button style={styles.saveBtn} onClick={handleSubmit} disabled={currentImage == null} color='blue' appearance='primary'>
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
