import { onValue, ref } from 'firebase/database';
import React, { Component } from 'react'
import { Avatar } from 'rsuite';
import { auth, database } from '../../../../../firebase';
import MainBtn from '../../../components/MainBtn';
import { mainCard } from '../../../themes/cardStyles';
import { mainColors } from '../../../themes/colors';
import mainShadows from '../../../themes/shadows';
import ProfileData from './ProfileData';
import ProfileImage from './ProfileImage';
import ProfileInformation from './ProfileInformation';

interface IProps {
    userId: any
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
            <div style={styles.wrap}>
                <div style={styles.profileInfoWrap}>
                    <ProfileImage userId={this.props.userId} />
                    <ProfileInformation userId={this.props.userId} />
                    <ProfileData userId={this.props.userId} />
                </div>

            </div>
        );
    }
}

const styles = {
    wrap: mainCard,
    profileInfoWrap: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },

}

export default ProfileIntroduction;