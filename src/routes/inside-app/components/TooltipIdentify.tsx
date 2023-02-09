import { onValue } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { userRef } from '../../../firebase'
import mainShadows from '../themes/shadows'

export interface ITooltipIdentifyProps { auth: any }

const TooltipIdentify: React.FunctionComponent<ITooltipIdentifyProps> = (props) => {
    const [username, setUsername] = useState('')
    const [userMail, setUserMail] = useState('')
    const [userImg, setUserImg] = useState('')
    const { auth } = props
    const getUserInfo = async () => {
        useEffect(() => {
            userRef(auth.currentUser.uid, '/username', setUsername)
            userRef(auth.currentUser.uid, '/email', setUserMail)
            userRef(auth.currentUser.uid, '/image', setUserImg)
        }, [])


    }

    getUserInfo()

    return (
        <div style={styles.wrap}>
            {
                userImg ? (
                    <img src={userImg} alt={username} style={styles.avatarImg} />
                ) : (
                    <div className='dark-bg' style={styles.avatar} >
                        {username?.split(' ').length == 2 ? username?.split(' ').map((w) => w[0]).join('.') : username?.slice(0, 1)}

                    </div>
                )
            }
            <p className='ml-1' style={styles.name}>
                {username} <br />
                <span style={styles.mail}>{userMail}</span>
            </p>
        </div>
    )
}

const styles = {
    wrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        columnGap: 7.5,
    },
    avatar: {
        display: 'flex',
        width: 50,
        height: 50,
        borderRadius: 50 + '%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarImg: {
        width: 50,
        height: 50,
        borderRadius: 50 + '%',
        boxShadow: mainShadows.image,
    },
    name: {
        color: '#333',
        fontSize: 1 + 'rem',
        fontWeight: '600',
    },
    mail: {
        fontSize: 13.5,
        color: '#777',
        fontWeight: '400',
    },
}

export default TooltipIdentify
