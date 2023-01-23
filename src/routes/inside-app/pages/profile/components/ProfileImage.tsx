import { onValue, ref } from 'firebase/database'
import React, { Component, useEffect, useState } from 'react'
import { Avatar } from 'rsuite'
import { auth, database, userRef } from '../../../../../firebase'
import MainBtn from '../../../components/MainBtn'
import { mainColors } from '../../../themes/colors'
import mainShadows from '../../../themes/shadows'
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
        <>
            {
                userImage !== '' && userImage ? (
                    <Avatar size='lg' circle src={userImage} />
                ) : (
                    <div style={styles.profileImgWrap} className='flex-column'>

                        <div style={styles.avatar}>
                            {
                                username.split(' ').length > 1 ?
                                    username.split(' ').map((w: any) => w[0]).join('.') :
                                    `${username[0]}.${username[1]}`
                            }
                        </div>
                        <MainBtn
                            content={'Add profile image'}
                            pressed={openModal}
                            btnColor={'blue'}
                            btnAppearance={'primary'}
                            btnSize={'lg'}
                            isBlock={false} />
                    </div>
                )
            }
            <EditImageModal isVisible={visible} close={closeModal} userId={userId} />
        </>
    )
}

const styles = {
    profileImgWrap: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        backgroundColor: mainColors.dark,
        color: mainColors.white,
        fontSize: 45,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: mainShadows.image,
        marginBottom: 15,
    }
}

export default ProfileImage