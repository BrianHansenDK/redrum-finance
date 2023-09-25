import React from 'react'
import PinIcon from '@rsuite/icons/Location'
import CalendarIcon from '@rsuite/icons/legacy/Calendar'
import { auth } from '../../../../../../firebase'
import { Button } from 'rsuite'
import NewEditProfileModal from './editprofile/NewEditProfileModal'
import { FirebaseUser } from '../../../../../../database/Objects'
import { formatDate, getCity } from '../../../../../../misc/custom-hooks'
interface IProps {
  user: FirebaseUser,
  en: boolean,
  visible: boolean,
  openModal: any, closeModal: any,
}

const ProfileData = (props: IProps) => {
    const { user, en, visible, openModal, closeModal } = props;
    const birthdate = new Date(user.birth_date)
    return (
        <>
            <div className='profile-data'>
                <div>
                    <p className='birth-year'>
                        <CalendarIcon className='info-icon' /> Birthdate: {user.birth_date !== '' ? formatDate(birthdate) : 'Unknown'}
                    </p>
                    <p className='birth-year'>
                        <PinIcon className='info-icon' /> Location: {user.city !== '' ? user.city :
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
