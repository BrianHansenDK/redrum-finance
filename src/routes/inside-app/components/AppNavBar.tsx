import React, { useState } from 'react'
import { Badge, Button, Loader, Message, Nav, Navbar, Tooltip, useToaster, Whisper } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import OPENMENU from '@rsuite/icons/legacy/CaretDown'
import NavbarBrand from 'rsuite/esm/Navbar/NavbarBrand'
import { getAuth } from 'firebase/auth';
import UsersIcon from '@rsuite/icons/legacy/PeopleGroup'
import MessageIcon from '@rsuite/icons/legacy/Wechat'
import NotificationsIcon from '@rsuite/icons/legacy/Bell'
import USER from '@rsuite/icons/legacy/User'
import GEAR from '@rsuite/icons/legacy/Gear'
import DOCS from '@rsuite/icons/legacy/Database'
import INV from '@rsuite/icons/legacy/Share'
import REDRUMCAT from '../../../components/images/redrum_cat.png'
import TooltipForAccount from './TooltipForAccount';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mainShadows from '../themes/shadows';
import { mainColors } from '../themes/colors';
import dashboardStrings from '../../../library/string/Dashboard';
import TransferMoneyModal from '../pages/bundle/components/TransferMoneyModal';
import ChangeLanBtn from '../../../components/ChangeLanBtn';
import AdminBtn from './AdminBtn';
import { numberWithCommas, useMediaQuery } from '../../../misc/custom-hooks';
import AppNavMenu from './AppNavMenu';
import AppNavigationMenu from './AppNavigationMenu';
import { getCurrentUserFunction, getNotificationValues, getUserNotificationCount, userRef } from '../../../firebase';
import { FirebaseUser } from '../../../database/Objects';

interface IProps {
  fixed: boolean,
  en: boolean,
  setEn: any,
  openMenu: any,
  navOpen: boolean,
  openNav: any,
  closeNav: any,
}


const AppNavBar: React.FunctionComponent<IProps> = (props) => {
  const {
    fixed = true,
    en,
    setEn,
    openMenu,
    navOpen,
    openNav,
    closeNav,
  } = props
    const auth = getAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const toaster = useToaster()
    const [visible, setVisible] = useState(false)

    // Current user
    const [user, setUser] = useState<FirebaseUser | null>(null)
    const [loading, setLoading] = React.useState<boolean>(false)

    // User notifications
    const [notificationCount, setNotificationCount] = useState(0)
    const [notificationValues, setNotificationValues] = useState([])
    const [notiLoading, setNotiLoading] = useState(false)

    // Get current user
    React.useEffect(() => {
      getCurrentUserFunction(auth.currentUser?.uid, setUser, setLoading)
    }, [location])

    // Get user notifications
    React.useEffect(() => {
      if (user !== null) {
        getUserNotificationCount(user.id, setNotificationCount, setNotiLoading)
      }
    }, [user, notificationValues])

    // Update notification values
    React.useEffect(() => {
      getNotificationValues(setNotificationValues, auth.currentUser?.uid)
    }, [])

    const openModal = () => {
      setVisible(true)
    }
    const closeModal = () => {
      setVisible(false)
    }
    const logout = () => {
        auth.signOut().then(() => navigate('/'))
        toaster.push(<Message showIcon type='info' duration={8000} closable>
          {en ? 'Logged out' : 'Abmeldet'}
        </Message>, {placement: 'topCenter'})
    }

    const ACCOUNTNAV = [
        {
            title: en ? dashboardStrings.tooltipEN.l1 : dashboardStrings.tooltipDE.l1,
            icon: <USER />,
            index: 1,
            to: `/app/profile/${auth.currentUser?.uid}`
        },
        {
            title: en ? 'My Documents' : 'Meine Dokumente',
            icon: <DOCS />,
            index: 2,
            to: `/app/databank`
        },
    ]

    const AccountTooltip = (
        <Tooltip className='grey-bg pl-2 pr-1 pt-1 pb-1 shadow' style={{ borderRadius: 10, minWidth: 550 }}>
            <TooltipForAccount ACCOUNTNAV={ACCOUNTNAV} auth={auth} logout={logout} en={en} />
        </Tooltip>
    )

    const isMobile = useMediaQuery('(max-width: 1100px)')
    const isSmall = useMediaQuery('(max-width: 375px)')
    return (
      <>
        <Navbar style={styles.navBar} className={`navbar ${fixed ? '' : 'navbarhidden'}`}>
            <div style={styles.navBarInner} className='inner-bar'>

                <NavbarBrand
                style={isSmall ? styles.brandSmall : isMobile ? styles.brandMobile : styles.brand}
                onClick={() => navigate('/app')}
                className='app-navbar-brand'
                 >
                    <img
                    src={REDRUMCAT}
                    alt="Redrum Logo"
                    width={60}
                    height={60}
                    className='mr-1'
                    /> Redrum Pro
                </NavbarBrand>
                {
                  isMobile ? (
                    <AppNavMenu en={en} setEn={setEn} openMenu={openMenu} openNav={openNav}/>
                  ) : (
                    <Nav pullRight className='d-flex align-center' style={{ height: 60 }}
                activeKey={`${
                  location.pathname == '/app' ? '1' :
                  location.pathname == '/app/notifications' ? '2' : '3' }`}>
                    <NavItem as={Link} to='/app' eventKey='1' className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                        <DashboardIcon /> {en ? dashboardStrings.navbarEN.home : dashboardStrings.navbarDE.home}
                    </NavItem>
                    {
                      notificationCount === 0 && !notiLoading ? (
                        <NavItem as={Link} to='/app/notifications' eventKey='2' className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                          <NotificationsIcon /> {en ? dashboardStrings.navbarEN.not : dashboardStrings.navbarDE.not}
                        </NavItem>
                      ) : (
                        <NavItem as={Link} to='/app/notifications' eventKey='2' className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                          <Badge content={notiLoading ? (<Loader size='xs' speed='fast'/>) :`${notificationCount}`}>
                            <NotificationsIcon />
                          </Badge>
                            {en ? dashboardStrings.navbarEN.not : dashboardStrings.navbarDE.not}

                        </NavItem>
                      )
                    }

                    <Whisper placement='bottom' controlId='control-id-click' trigger='click' speaker={AccountTooltip} >
                        <NavItem eventKey='3' className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                            <USER /> <span>{en ? dashboardStrings.navbarEN.acc : dashboardStrings.navbarDE.acc} <OPENMENU /> </span>
                        </NavItem>
                    </Whisper>{/*
                    <NavItem className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                        <UsersIcon /> {en ? dashboardStrings.navbarEN.nw : dashboardStrings.navbarDE.nw}
                    </NavItem>
                    <NavItem className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                        <MessageIcon /> {en ? dashboardStrings.navbarEN.event : dashboardStrings.navbarDE.event}
                </NavItem>*/}
                    <Button style={styles.btn} appearance='primary' size='lg' onClick={openModal} >
                    {en ? dashboardStrings.navbarEN.btn : 'Einzahlen'}
                    </Button>
                    <NavItem className='d-flex flex-column align-center justify-around like-a-btn'>
                      {
                        loading ? (<Loader content={en ? 'Loading...' : 'Laden...'} size='sm' speed='fast' vertical/>) : user === null ? 'Unknown' :
                        (<span>{user.money_available < 10000 ? en ? 'Balance:' : 'Guthaben' : null} {numberWithCommas(user.money_available)} €</span>)
                      }
                    </NavItem>
                    <ChangeLanBtn setEn={setEn} en={en} />
                </Nav>
                  )
                }

            </div>
        </Navbar>
        <TransferMoneyModal navPressed={true} visible={visible} close={closeModal} />
        {auth.currentUser?.email == 'brianhansen.work@gmail.com' || auth.currentUser?.email == 'merhi@gmx.net' ? (
          <AdminBtn />) : null
        }
        <AppNavigationMenu
        en={en}
        isOpen={navOpen}
        setEn={setEn}
        closeNav={closeNav}
        openModal={openModal}
        logout={logout}
        />
      </>
    )
}

const styles = {
    navBar: {
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        display: 'flex',
        boxShadow: mainShadows.navBar,
        backgroundColor: mainColors.dark,
        paddingRight: 25,
    },
    navBarInner: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between'
    },
    brand: {
        fontSize: 21.5,
        fontWeight: '700',
        color: mainColors.white,
        display: 'flex',
        alignItems: 'center',
    },
    brandMobile: {
      fontSize: 21.5,
      fontWeight: '700',
      color: mainColors.white,
      top: 0, bottom: 0,
      left: 20,
      display: 'flex',
      alignItems: 'center',
    },
    brandSmall: {
      fontSize: 15,
      fontWeight: '700',
      color: mainColors.white,
      top: 0, bottom: 0,
      left: 20,
      display: 'flex',
      alignItems: 'center',
    },
    navLink: {
        flex: 1,
        width: 125,
        marginRight: 15,
        color: mainColors.white,
    },
    btn: {
      marginRight: 25
    }
}

export default AppNavBar
