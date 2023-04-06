import { onValue, ref } from 'firebase/database';
import React, { Component } from 'react'
import { Avatar } from 'rsuite';
import { auth, database, getCurrentUserOnValue } from '../../../../../../firebase';
import MainBtn from '../../../../components/MainBtn';
import { mainCard } from '../../../../themes/cardStyles';
import { mainColors } from '../../../../themes/colors';
import mainShadows from '../../../../themes/shadows';
import ProfileData from './ProfileData';
import ProfileImage from './ProfileImage';
import ProfileInformation from './ProfileInformation';
import { FirebaseUser } from '../../../../../../database/Objects';
import RedrumProLoader from '../../../../components/RedrumProLoader';

interface IProps {
    user: FirebaseUser,
    isMobile: boolean,
    isDesktop: boolean,
    en: boolean,
}

const ProfileIntroduction = (props: IProps) => {
    const {user, isMobile, en} = props;
    const [currentUser, setCurrentUser] = React.useState<FirebaseUser | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    React.useEffect(() => {
      getCurrentUserOnValue(user.id, setCurrentUser);
    })
    return (
        <div className='profile-card'>
            <div className='profile-content'>
              {loading ? (<RedrumProLoader/>) :
              currentUser === null ? null : (
                <>
                  <ProfileImage
                  user={currentUser}
                  isMobile={isMobile}
                  />
                  <ProfileInformation
                  user={currentUser}
                  isMobile={isMobile}
                   />
                  <ProfileData en={en} user={currentUser} />
                </>
              )

              }

            </div>
        </div>
    );
}

export default ProfileIntroduction;
