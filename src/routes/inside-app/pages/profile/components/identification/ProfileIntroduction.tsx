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

interface IProps {
    userId: any,
    isMobile: boolean,
    isDesktop: boolean,
}

interface IState {
    user: any
}

class ProfileIntroduction extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            user: undefined
        }
    }
    componentDidMount(): void {
        const reference = ref(database, 'users/' + this.props.userId)
        onValue(reference, (snap) => {
            this.setState((_prev) => ({
                user: snap.val()
            }))
        })
    }
    render() {

        return (
            <div className='profile-card'>
                <div className='profile-content'>
                    <ProfileImage
                    userId={this.props.userId}
                    isMobile={this.props.isMobile}
                    />
                    <ProfileInformation
                    userId={this.props.userId}
                    isMobile={this.props.isMobile}
                     />
                    <ProfileData userId={this.props.userId} />
                </div>
            </div>
        );
    }
}

export default ProfileIntroduction;
