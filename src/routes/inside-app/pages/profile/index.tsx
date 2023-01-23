import { onValue, ref } from 'firebase/database';
import React, { Component } from 'react';
import { auth, database } from '../../../../firebase';
import AppNavBar from '../../components/AppNavBar';
import { mainColors } from '../../themes/colors';
import ProfileIntroduction from './components/ProfileIntroduction';

interface IProps {
}

interface IState {
    user: any
}

class ProfilePage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            user: undefined
        };
    }

    componentDidMount(): void {
        const reference = ref(database, 'users/' + auth.currentUser?.uid)
        onValue(reference, (snap) => {
            this.setState((_prev) => ({
                user: snap.val()
            }))
        })
    }

    render() {
        return (
            <div style={styles.pageWrap}>
                <AppNavBar fixed />
                <h1 style={styles.pageTitle} className='text-center'>
                    Profile page
                </h1>
                <ProfileIntroduction />
            </div>
        );
    }
}

const styles = {
    pageWrap: {
        paddingTop: 100,
    },
    pageTitle: {
        fontSize: 40.5,
        color: mainColors.dark,
    }
}

export default ProfilePage;