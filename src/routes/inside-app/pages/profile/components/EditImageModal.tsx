import { ref, set, update } from 'firebase/database'
import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Message, Modal, useToaster } from 'rsuite'
import PLACEHOLDER from '../../../../../assets/profileimage_placeholder.svg'
import { auth, database, userRef } from '../../../../../firebase'
import { storage, storageRef } from '../../../../../firebaseStorage'

interface IProps {
    userId: any, close: any, isVisible: boolean
}

const EditImageModal: React.FunctionComponent<IProps> = (props) => {
    const { userId, close, isVisible } = props
    const [userImage, setUserImage] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    const [imageStartUrl, setImageStartUrl] = useState('')
    const [userCompletion, setUserCompletion] = useState(0)
    const [userName, setUsername] = useState('')

    useEffect(() => {
        userRef(userId, '/image', setImageStartUrl)
        userRef(userId, '/completion', setUserCompletion)
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

    const onSave = () => {
        const reference = ref(database)
        const updates: any = {}
        updates['/users/' + userId + '/image'] = imageUrl
        if (imageStartUrl == '' || imageStartUrl == null) {
            updates['/users/' + userId + '/completion'] = userCompletion + 10
        }
        update(reference, updates)
        close()
        toaster.push(<Message showIcon type='info'>
            {imageStartUrl !== '' || imageStartUrl !== null ? 'Profile image was changed' : 'Profile image set'}
        </Message>, { placement: 'topCenter' })
        window.setTimeout(() => {
            toaster.clear()
        }, 3000)
    }

    return (
        <Modal open={isVisible} onClose={close} >
            <Modal.Header>
                <Modal.Title>
                    Profile Image
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={styles.body}>
                <input type="file" onChange={handleImage} className='custom-file-input' />
                <div className='d-flex flex-column'>
                    <img style={styles.image} src={imageStartUrl !== '' && imageStartUrl !== null ? imageStartUrl : PLACEHOLDER} alt={`Profile image for ${userName}`} />
                    <Button style={styles.chooseBtn} color='green' appearance='primary' onClick={handleSubmit}>
                        {imageStartUrl !== '' && imageStartUrl !== null ? 'Change Image' : 'Choose Image'}
                    </Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup style={{ width: '100%' }}>
                    <Button style={styles.btns} onClick={onSave} color='blue' appearance='primary'>
                        Save
                    </Button>
                    <Button style={styles.btns} onClick={close} color='blue' appearance='ghost' >
                        Cancel
                    </Button>
                </ButtonGroup>
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
        height: 200,
        borderRadius: '50%',
    },
    chooseBtn: {
        marginTop: 15,
    },
    btns: {
        width: '50%',
    }
}

export default EditImageModal