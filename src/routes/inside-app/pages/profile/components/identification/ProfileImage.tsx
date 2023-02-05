import { onValue, ref } from 'firebase/database'
import React, { Component, useEffect, useState } from 'react'
import { Avatar } from 'rsuite'
import { auth, database, userRef } from '../../../../../../firebase'
import MainBtn from '../../../../components/MainBtn'
import { mainColors } from '../../../../themes/colors'
import { avatarPlaceholder, profileImage } from '../../../../themes/imageStyles'
import mainShadows from '../../../../themes/shadows'
import EditImageModal from './EditImageModal'

interface IProps {
    userId: any,
}

const ProfileImage: React.FunctionComponent<IProps> = (props) => {
    const { userId } = props
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

    return (
        <div style={styles.profileImgWrap} className='flex-column'>
            {
                userImage !== '' && userImage ? (
                    <img style={styles.image} src={userImage} alt={username} />
                ) : (
                    <div style={styles.avatar} className='mb-1'>
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
                <MainBtn
                content={`${userImage !== '' && userImage ? 'Edit profile image' : 'Add profile image'}`}
                pressed={openModal}
                btnColor={'blue'}
                btnAppearance={'primary'}
                btnSize={'lg'}
                isBlock={false} />
                <EditImageModal isVisible={visible} close={closeModal} userId={userId} />
                </>
              ) : null
            }

        </div>
    )
}

const styles = {
    profileImgWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: profileImage,
    avatar: avatarPlaceholder,
}

export default ProfileImage
