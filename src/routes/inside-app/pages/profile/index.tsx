import { onValue, ref } from 'firebase/database';
import React, { Component } from 'react';
import { auth, database } from '../../../../firebase';
import AppNavBar from '../../components/AppNavBar';
import { mainColors } from '../../themes/colors';
import AddBalanceCard from './components/balance/AddBalanceCard';
import MoneySection from './components/cash/MoneySection';
import ProfileIntroduction from './components/identification/ProfileIntroduction';
import './components/styles/index.scss'

interface IProps {
  params: any,
  en: boolean,
  setEn: any,
  isMobile: boolean,
  isDesktop: boolean,
  navOpen: boolean,
  menuOpen: boolean,
  openMenu: any,
  openNav: any,
  closeMenu: any,
  closeNav: any,
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
        const { userId } = this.props.params
        return (
            <div style={styles.pageWrap} className='flex-column'>
                <AppNavBar
                fixed
                en={this.props.en} setEn={this.props.setEn}
                openMenu={this.props.openMenu}
                navOpen={this.props.navOpen}
                openNav={this.props.openNav}
                closeNav={this.props.closeNav} />
                <h1 style={styles.pageTitle} className='text-center'>
                    Profile page
                </h1>
                <ProfileIntroduction
                userId={userId}
                isMobile={this.props.isMobile}
                isDesktop={this.props.isDesktop}
                 />
                {userId == auth.currentUser?.uid ? (
                  <>
                    <MoneySection userId={userId} />
                    <AddBalanceCard userId={userId} />
                  </>
                ): null}

            </div>
        );
    }
}

const styles = {
    pageWrap: {
        paddingTop: 100,
        paddingBottom: 100,
        minHeight: '100vh',
        backgroundColor: '#efefef',
        display: 'flex',
        alignItems: 'center',
    },
    pageTitle: {
        fontSize: 40.5,
        color: mainColors.dark,
        marginBottom: 50,
    }
}

export default ProfilePage;
