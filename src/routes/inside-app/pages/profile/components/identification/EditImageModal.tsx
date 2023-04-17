import { ref, update } from 'firebase/database'
import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React from 'react'
import { Button, ButtonGroup, Message, Modal, useToaster } from 'rsuite'
import PLACEHOLDER from '../../../../../../assets/profileimage_placeholder.svg'
import { database, userRef } from '../../../../../../firebase'
import { storage, storageRef } from '../../../../../../firebaseStorage'
import { FirebaseUser } from '../../../../../../database/Objects'

interface IProps {
    user: FirebaseUser, close: any, isVisible: boolean
}

const EditImageModal = (props: IProps) => {
    const { user, close, isVisible } = props
    const [userImage, setUserImage] = React.useState(null)
    const [imageUrl, setImageUrl] = React.useState(PLACEHOLDER)

    const toaster = useToaster()

    const handleImage = (e: any) => {
        const target: EventTarget & any = e.target
        if (target.files[0]) {
            setUserImage(target.files[0])
        }
    }

    const handleSubmit = () => {
        if (userImage !== null) {
            const imageRef = storageRef(storage, `images/users/${user.id}_profile_image`)
            uploadBytes(imageRef, userImage).then((snap) => {
                getDownloadURL(imageRef).then((url) => {
                    setImageUrl(url)
                })
            }).catch((err) => {
                toaster.push(<Message type='error' duration={8000} closable>
                    something went wrong: {err.message}
                </Message>, { placement: 'topCenter' })
            })
        }
    }

    const onSave = () => {
        const reference = ref(database, 'users/' + user.id)
        const updates: any = {}
        updates['image'] = imageUrl
        if (user.image === '') {
            updates['completion'] = user.completion + 10
        }
        update(reference, updates).then(() => {
          close()
          toaster.push(<Message showIcon type='info' closable duration={8000}>
            {user.image !== '' ? 'Profile image was changed' : 'Profile image set'}
        </Message>, { placement: 'topCenter' });
        }).catch((err) => {
          toaster.push(<Message showIcon type='error' closable duration={8000}>
            {err.Message}
          </Message>, { placement: 'topCenter' });
        }).finally(() => setUserImage(null))
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
                    <img style={styles.image} src={user.image !== '' && imageUrl == PLACEHOLDER ? user.image : imageUrl} alt={`Profile image for ${user.username}`} />
                    <Button disabled={userImage == null} style={styles.chooseBtn} color='green' appearance='primary' onClick={handleSubmit}>
                        {user.image !== '' ? 'Change Image' : 'Choose Image'}
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
