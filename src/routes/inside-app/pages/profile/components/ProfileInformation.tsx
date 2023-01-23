import React, { useEffect, useState } from 'react'
import { auth, userRef } from '../../../../../firebase'
import { mainColors } from '../../../themes/colors'

interface IProps {
    userId: any
}

const ProfileInformation: React.FunctionComponent<IProps> = (props) => {
    const { userId } = props
    const [username, setUsername] = useState('')
    const [userMail, setUserMail] = useState('')
    const getUserInfo = async () => {
        useEffect(() => {
            userRef(userId, '/username', setUsername)
            userRef(userId, '/email', setUserMail)
        }, [])


    }

    getUserInfo()
    return (
        <div style={styles.wrap}>
            <h1 style={styles.username}>
                {username}
            </h1>
            <p style={styles.email}>
                Email address: {userMail}
            </p>
        </div>
    )
}

const styles = {
    wrap: {
        marginLeft: 100,
    },
    username: {
        fontSize: 32.5,
        color: mainColors.dark,
        lineHeight: 1,
    },
    email: {
        fontSize: 20.5,
        color: mainColors.dark,
        marginTop: 10,
    }
}

export default ProfileInformation