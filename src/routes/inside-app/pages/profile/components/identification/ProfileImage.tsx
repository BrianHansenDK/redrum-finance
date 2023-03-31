import React, { useState } from 'react'
import { Button } from 'rsuite'
import { auth } from '../../../../../../firebase'
import EditImageModal from './EditImageModal'
import { FirebaseUser } from '../../../../../../database/Objects'

interface IProps {
    user: FirebaseUser,
    isMobile: boolean,
}

const ProfileImage: React.FunctionComponent<IProps> = (props) => {
    const { user, isMobile } = props
    const [visible, setVisible] = useState(false)

    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    return (
        <div className='profile-image-wrap'>
            {
                user.image !== '' && user.image ? (
                    <img className='profile-image' src={user.image} alt={user.username} />
                ) : (
                    <div className='profile-avatar'>
                        {user.username[0].toUpperCase()}
                    </div>
                )
              }
            {
              user.id == auth.currentUser?.uid ? (
                <>
                <Button appearance='primary' onClick={openModal} className='r-btn r-main-btn'>
                  {`${user.image !== '' && user.image ? 'Edit profile image' : 'Add profile image'}`}
                </Button>
                <EditImageModal user={user} isVisible={visible} close={closeModal} />
                </>
              ) : null
            }

        </div>
    )
}

export default ProfileImage
