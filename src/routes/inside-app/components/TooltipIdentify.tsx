import { onValue } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { userRef } from '../../../firebase'

export interface ITooltipIdentifyProps { auth: any }

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

const TooltipIdentify: React.FunctionComponent<ITooltipIdentifyProps> = (props) => {
    const [username, setUsername] = useState('')
    const [userMail, setUserMail] = useState('')
    const { auth } = props
    const getUserInfo = async () => {
        useEffect(() => {
            onValue(userRef(auth.currentUser.uid, '/username'), (snap) => {
                const data = snap.val()
                setUsername(data)
            })
            onValue(userRef(auth.currentUser.uid, '/email'), (snap) => {
                const data = snap.val()
                setUserMail(data)
            })
        }, [])


    }

    getUserInfo()

    return (
        <div style={styles.wrap}>
            <div className='dark-bg' style={styles.avatar} >
                {
                    username.split(' ').length == 2 ? username.split(' ').map((w) => w[0]).join('.') : username.slice(0, 1)

                }
            </div>
            <p className='ml-1' style={styles.name}>
                {username} <br />
                <span style={styles.mail}>{userMail}</span>
            </p>
        </div>
    )
}

export default TooltipIdentify