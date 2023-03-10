import { onValue, ref } from 'firebase/database'
import React, { Component, useEffect, useState } from 'react'
import { Avatar, Button } from 'rsuite'
import { auth, database, userRef } from '../../../../../../firebase'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'
import MainBtn from '../../../../components/MainBtn'
import { mainColors } from '../../../../themes/colors'
import { avatarPlaceholder, profileImage } from '../../../../themes/imageStyles'
import mainShadows from '../../../../themes/shadows'
import EditImageModal from './EditImageModal'

interface IProps {
    userId: any,
    isMobile: boolean,
}

const ProfileImage: React.FunctionComponent<IProps> = (props) => {
    const { userId, isMobile } = props
    const [visible, setVisible] = useState(false)
    const [userImage, setUserImage] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        userRef(userId, '/image', setUserImage)
        userRef(userId, '/username', setUsername)
    })

    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    console.log(isMobile)

    return (
        <div className='profile-image-wrap'>
            {
                userImage !== '' && userImage ? (
                    <img className='profile-image' src={userImage} alt={username} />
                ) : (
                    <div className='profile-avatar'>
                        {
                          username.split(' ').length > 1 ?
                          username.split(' ').map((w: any) => w[0]).join('.') :
                          `${username[0]}.${username[1]}`
                        }
                    </div>
                )
              }
            {
              userId == auth.currentUser?.uid ? (
                <>
                <Button appearance='primary' onClick={openModal} className='r-btn r-main-btn'>
                  {`${userImage !== '' && userImage ? 'Edit profile image' : 'Add profile image'}`}
                </Button>
                <EditImageModal isVisible={visible} close={closeModal} userId={userId} />
                </>
              ) : null
            }

        </div>
    )
}

export default ProfileImage
