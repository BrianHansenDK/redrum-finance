import React, { useEffect, useState } from 'react'
import { auth, userRef } from '../../../../../../firebase'
import MainBtn from '../../../../components/MainBtn'
import { mainColors } from '../../../../themes/colors'
import ProfileProgress from './ProfileProgress'
import PinIcon from '@rsuite/icons/Location'
import CalendarIcon from '@rsuite/icons/legacy/Calendar'

interface IProps {
    userId: any,
    isMobile: boolean,
}

const ProfileInformation: React.FunctionComponent<IProps> = (props) => {
    const { userId, isMobile } = props
    const [username, setUsername] = useState('')
    const [userMail, setUserMail] = useState('')
    const [completion, setCompletion] = useState(0)
    // If mobile
    const [age, setAge] = useState(0)
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    // Over
    const getUserInfo = async () => {
        useEffect(() => {
            userRef(userId, '/username', setUsername)
            userRef(userId, '/email', setUserMail)
            userRef(userId, '/completion', setCompletion)
            // If mobile
            userRef(userId, '/birthYear', setAge)
            userRef(userId, '/city', setCity)
            userRef(userId, '/country', setCountry)
        }, [userId])
    }

    getUserInfo()
    return (
        <div className='profile-info'>
            <div className='text-inner'>
                <h1 className='username'>
                    {username}
                </h1>
                <p className='email'>
                  {userMail}
                </p>
                <p className='badge'>
                  Rookie
                </p>
            </div>
            {
              userId == auth.currentUser?.uid ? (
                <>
                <ProfileProgress
                completion={completion}
                userId={userId}
                isMobile={isMobile}
                />
                </>
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

export default ProfileInformation
