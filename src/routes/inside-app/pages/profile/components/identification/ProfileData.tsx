import React, { useEffect, useState } from 'react'
import PinIcon from '@rsuite/icons/Location'
import CalendarIcon from '@rsuite/icons/legacy/Calendar'
import { auth, userRef } from '../../../../../../firebase'
import { mainColors } from '../../../../themes/colors'
import MainBtn from '../../../../components/MainBtn'
import EditProfileModal from './EditProfileModal'
interface IProps {
    userId: any
}

const ProfileData: React.FunctionComponent<IProps> = (props) => {
    const { userId } = props
    const [age, setAge] = useState(0)
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const [visible, setVisible] = useState(false)
    useEffect(() => {
        userRef(userId, '/birthdate', setAge)
        userRef(userId, '/city', setCity)
        userRef(userId, '/country', setCountry)
    })
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    return (
        <>
            <div style={styles.wrap} className='flex-column'>
                <div>
                    <p style={styles.info}>
                        <CalendarIcon style={styles.icon} /> Birthdate: {age !== 0 && age !== null ? age : 'Unknown'}
                    </p>
                    <p style={styles.info}>
                        <PinIcon style={styles.icon} /> Location: {city !== '' && city !== null ? city : 'Unknown'}, {country !== '' && country !== null ? country : 'Unknown'}
                    </p>
                </div>
                {
                  userId == auth.currentUser?.uid ? (
                    <MainBtn
                    content={'Edit profile'}
                    pressed={openModal}
                    btnColor={'blue'}
                    btnAppearance={'primary'}
                    btnSize={'lg'}
                    isBlock={true} />
                  ) : null
                }

            </div>
            <EditProfileModal userId={userId} close={closeModal} visible={visible} />
        </>
    );
}

const styles = {
    wrap: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    info: {
        fontSize: 18.5,
        color: mainColors.dark,
        display: 'flex',
        alignItems: 'flex-start'
    },
    icon: {
        marginRight: 7.5,
    }
}

export default ProfileData;
