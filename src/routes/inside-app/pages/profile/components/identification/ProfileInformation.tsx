import React, { useEffect, useState } from 'react'
import { auth, userRef } from '../../../../../../firebase'
import MainBtn from '../../../../components/MainBtn'
import { mainColors } from '../../../../themes/colors'
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

    getUserInfo()
    return (
        <div style={styles.wrap} className='flex-column'>
            <div>
                <h1 style={styles.username}>
                    {username}
                </h1>
                <p style={styles.email}>
                    Email address: {userMail}
                </p>
                <p style={styles.badge}>
                    Badge: Rookie
                </p>
            </div>
            {
              userId == auth.currentUser?.uid ? (
                <ProfileProgress completion={completion} userId={userId} />
              ) : <MainBtn
              content={'Add friend'}
              pressed={() => null}
              btnColor={'blue'}
              btnAppearance={'primary'}
              btnSize={'lg'}
              isBlock={false} />
            }

        </div>
    )
}

const styles = {
    wrap: {
        display: 'flex',
        justifyContent: 'space-between',
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
    }
}

export default ProfileInformation
