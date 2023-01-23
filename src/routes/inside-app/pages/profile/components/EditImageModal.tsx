import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { useState } from 'react'
import { Button, ButtonGroup, Message, Modal, useToaster } from 'rsuite'
import PLACEHOLDER from '../../../../../assets/profileimage_placeholder.svg'
import { auth } from '../../../../../firebase'
import { storage, storageRef } from '../../../../../firebaseStorage'

const EditImageModal = ({ user, close, isVisible }: { user: any, close: any, isVisible: boolean }) => {
    const [userImage, setUserImage] = useState(null)
    const [imageUrl, setImageUrl] = useState('')

    const toaster = useToaster()

    const handleImage = (e: any) => {
        const target: EventTarget & any = e.target
        if (target.files[0]) {
            setUserImage(target.files[0])
        }
    }

    const handleSubmit = () => {
        if (userImage !== null) {
            const imageRef = storageRef(storage, `images/users/${auth.currentUser?.uid}_profile_image`)
            uploadBytes(imageRef, userImage).then((snap) => {
                getDownloadURL(imageRef).then((url) => {
                    setImageUrl(url)
                })
            }).catch((err) => {
                toaster.push(<Message type='error'>
                    something went wrong: {err.message}
                </Message>, { placement: 'topCenter' })
                window.setTimeout(() => {
                    toaster.clear()
                        , 3000
                })
            })
        }
    }

    return (
        <Modal open={isVisible} onClose={close} >
            <Modal.Header>
                <Modal.Title>
                    Profile Image
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img style={styles.image} src={imageUrl !== '' ? imageUrl : PLACEHOLDER} alt={`Profile image for ${user?.username}`} />
                <input type="file" onChange={handleImage} />
                <Button color='green' appearance='primary' onClick={handleSubmit}>
                    Choose Image
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup block>
                    <Button color='blue' appearance='primary'>
                        Save
                    </Button>
                    <Button onClick={close} color='blue' appearance='ghost' >
                        Cancel
                    </Button>
                </ButtonGroup>
            </Modal.Footer>
        </Modal>
    )
}

const styles = {
    image: {
        width: 200,
        height: 200,
        borderRadius: '50%',
    }
}

export default EditImageModal