import React, { useEffect, useState } from 'react'
import { auth, userRef } from '../../../../../firebase'
import { mainColors } from '../../../themes/colors'
import ProfileProgress from './ProfileProgress'

interface IProps {
    userId: any
}

const ProfileInformation: React.FunctionComponent<IProps> = (props) => {
    const { userId } = props
    const [username, setUsername] = useState('')
    const [userMail, setUserMail] = useState('')
    const [completion, setCompletion] = useState(0)
    const [userAge, setUserAge] = useState(null)
    const getUserInfo = async () => {
        useEffect(() => {
            userRef(userId, '/username', setUsername)
            userRef(userId, '/email', setUserMail)
            userRef(userId, '/completion', setCompletion)
            userRef(userId, '/age', setUserAge)
        }, [])


    }

    console.log(userAge)

    getUserInfo()
    return (
        <div style={styles.wrap}>
            <h1 style={styles.username}>
                {username}
            </h1>
            <p style={styles.email}>
                Email address: {userMail}
            </p>
            <p style={styles.badge}>
                Badge: Rookie
            </p>
            <p>
                Age: {userAge !== null ? userAge : 'Unknown'}
            </p>
            {
                completion < 100 && (
                    <ProfileProgress completion={completion} userId={userId} />
                )
            }

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
        fontWeight: '700',
        color: mainColors.dark,
        marginTop: 10,
    },
    badge: {
        fontSize: 17.5,
        color: mainColors.dark,
        opacity: .8,
    }
}

export default ProfileInformation