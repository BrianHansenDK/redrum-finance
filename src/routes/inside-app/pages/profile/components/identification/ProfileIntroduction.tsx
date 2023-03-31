import { onValue, ref } from 'firebase/database';
import React, { Component } from 'react'
import { Avatar } from 'rsuite';
import { auth, database } from '../../../../../../firebase';
import MainBtn from '../../../../components/MainBtn';
import { mainCard } from '../../../../themes/cardStyles';
import { mainColors } from '../../../../themes/colors';
import mainShadows from '../../../../themes/shadows';
import ProfileData from './ProfileData';
import ProfileImage from './ProfileImage';
import ProfileInformation from './ProfileInformation';
import { FirebaseUser } from '../../../../../../database/Objects';

interface IProps {
    user: FirebaseUser,
    isMobile: boolean,
    isDesktop: boolean,
    en: boolean,
}

const ProfileIntroduction = (props: IProps) => {
    const {user, isMobile, en} = props
    return (
        <div className='profile-card'>
            <div className='profile-content'>
                <ProfileImage
                user={user}
                isMobile={isMobile}
                />
                <ProfileInformation
                user={user}
                isMobile={isMobile}
                 />
                <ProfileData en={en} user={user} />
            </div>
        </div>
    );
}

export default ProfileIntroduction;
