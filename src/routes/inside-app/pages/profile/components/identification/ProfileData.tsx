import React from 'react'
import PinIcon from '@rsuite/icons/Location'
import CalendarIcon from '@rsuite/icons/legacy/Calendar'
import { auth } from '../../../../../../firebase'
import { Button } from 'rsuite'
import NewEditProfileModal from './editprofile/NewEditProfileModal'
import { FirebaseUser } from '../../../../../../database/Objects'
interface IProps {
  user: FirebaseUser,
  en: boolean,
}

const ProfileData = (props: IProps) => {
    const { user, en } = props
    const [visible, setVisible] = React.useState(false)
    const openModal = () => setVisible(true); const closeModal = () => setVisible(false)

    return (
        <>
            <div className='profile-data'>
                <div>
                    <p className='birth-year'>
                        <CalendarIcon className='info-icon' /> Birthdate: {user.birth_date !== '' ? user.birth_date : 'Unknown'}
                    </p>
                    <p className='birth-year'>
                        <PinIcon className='info-icon' /> Location: {user.address !== '' ? user.address.split(', ')[1].split(' ').slice(1) :
                        'Unknown'}, {user.country !== '' ? user.country : 'Unknown'}
                    </p>
                </div>
                {
                  user.id == auth.currentUser?.uid ? (
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
            <NewEditProfileModal userId={user.id} close={closeModal} visible={visible} en={en} />
        </>
    );
}


export default ProfileData;
