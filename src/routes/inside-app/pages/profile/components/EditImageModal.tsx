import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Message, Modal, useToaster } from 'rsuite'
import PLACEHOLDER from '../../../../../assets/profileimage_placeholder.svg'
import { auth, userRef } from '../../../../../firebase'
import { storage, storageRef } from '../../../../../firebaseStorage'

interface IProps {
    userId: any, close: any, isVisible: boolean
}

const EditImageModal: React.FunctionComponent<IProps> = (props) => {
    const { userId, close, isVisible } = props
    const [userImage, setUserImage] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    const [imageStartUrl, setImageStartUrl] = useState('')
    const [userName, setUsername] = useState('')

    useEffect(() => {
        userRef(userId, '/images', setImageStartUrl)
    })

    const toaster = useToaster()

    const handleImage = (e: any) => {
        const target: EventTarget & any = e.target
        if (target.files[0]) {
            setUserImage(target.files[0])
        }
    }

    const handleSubmit = () => {
        if (userImage !== null) {
            const imageRef = storageRef(storage, `images/users/${userId}_profile_image`)
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
                <img style={styles.image} src={imageUrl !== '' && imageUrl !== null ? imageUrl : PLACEHOLDER} alt={`Profile image for ${userName}`} />
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