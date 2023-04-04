import { get, onValue, ref } from 'firebase/database';
import React, { Component } from 'react';
import { auth, database, getCurrentUserFunction } from '../../../../firebase';
import AppNavBar from '../../components/AppNavBar';
import { mainColors } from '../../themes/colors';
import AddBalanceCard from './components/balance/AddBalanceCard';
import MoneySection from './components/cash/MoneySection';
import ProfileIntroduction from './components/identification/ProfileIntroduction';
import './components/styles/index.scss'
import { FirebaseUser } from '../../../../database/Objects';
import RedrumProLoader from '../../components/RedrumProLoader';
import { useMediaQuery } from '../../../../misc/custom-hooks';

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

const ProfilePage = (props: IProps) => {
  const {params, en, setEn, isMobile, isDesktop, navOpen,
    menuOpen, openMenu, openNav, closeMenu, closeNav} = props
  const {userId} = params
  const [user, setUser] = React.useState<FirebaseUser | null>(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    getCurrentUserFunction(userId, setUser, setLoading)
  }, [userId])
  return (
      <div style={styles.pageWrap} className='flex-column'>
          <AppNavBar
          fixed
          en={en} setEn={setEn}
          openMenu={openMenu}
          navOpen={navOpen}
          openNav={openNav}
          closeNav={closeNav} />
          <h1 style={styles.pageTitle} className='text-center'>
              Profile page
          </h1>
          {
            loading ? (
              <RedrumProLoader/>
            ) : user === null ? null : (
              <div className='profile-page-content'
              style={{width: '100%', maxWidth: isDesktop ? 1600 : isMobile ? '100%' : 1200}}>
                <ProfileIntroduction
                en={en}
                user={user}
                isMobile={isMobile}
                isDesktop={isDesktop}
                 />
                {userId == auth.currentUser?.uid ? (
                  <>
                    <MoneySection userId={userId} />
                    <AddBalanceCard userId={userId} en={en} />
                  </>
                ): null}
              </div>
            )
          }
      </div>
  );
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
