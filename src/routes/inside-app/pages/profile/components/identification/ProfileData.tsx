import React, { useEffect, useState } from 'react'
import PinIcon from '@rsuite/icons/Location'
import CalendarIcon from '@rsuite/icons/legacy/Calendar'
import { auth, userRef } from '../../../../../../firebase'
import { mainColors } from '../../../../themes/colors'
import MainBtn from '../../../../components/MainBtn'
import EditProfileModal from './EditProfileModal'
import { Button } from 'rsuite'
interface IProps {
    userId: any,
    en: boolean,
}

const ProfileData: React.FunctionComponent<IProps> = (props) => {
    const { userId, en } = props
    const [age, setAge] = useState(0)
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const [visible, setVisible] = useState(false)

    const data = Date.now()
    const today = new Date(data)
    useEffect(() => {
        userRef(userId, '/birthYear', setAge)
        userRef(userId, '/address', setCity)
        userRef(userId, '/country', setCountry)
    })
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    const years = today.getFullYear() - age
    return (
        <>
            <div className='profile-data'>
                <div>
                    <p className='birth-year'>
                        <CalendarIcon className='info-icon' /> Birth year: {age !== 0 && age !== null ? age : 'Unknown'}
                    </p>
                    <p className='birth-year'>
                        <PinIcon className='info-icon' /> Location: {city !== '' && city !== null ? city.split(' ')[city.split(' ').length - 1] : 'Unknown'}, {country !== '' && country !== null ? country : 'Unknown'}
                    </p>
                </div>
                {
                  userId == auth.currentUser?.uid ? (
                    <Button
                    appearance='primary'
                    className='r-btn r-main-btn'
                    onClick={openModal}
                    >
                      Edit profile
                    </Button>
                  ) : null
                }

            </div>
            <EditProfileModal userId={userId} close={closeModal} visible={visible} en={en} />
        </>
    );
}


export default ProfileData;
