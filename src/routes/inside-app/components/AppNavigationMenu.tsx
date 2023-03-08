import React, { FunctionComponent } from 'react'
import { Button, Drawer, Nav } from 'rsuite'
import UsersIcon from '@rsuite/icons/legacy/PeopleGroup'
import MessageIcon from '@rsuite/icons/legacy/Wechat'
import NotificationsIcon from '@rsuite/icons/legacy/Bell'
import USER from '@rsuite/icons/legacy/User'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import { Link } from 'react-router-dom'
import dashboardStrings from '../../../library/string/Dashboard'
import ChangeLanBtn from '../../../components/ChangeLanBtn'
import { mainColors } from '../themes/colors'
import { auth } from '../../../firebase'
import ResponsiveStyles from '../themes/ResponsiveStyles'
import LanguageToggle from './LanguageToggle'

interface IProps{
  en: boolean,
  isOpen: boolean,
  setEn: any,
  closeNav: any,
  openModal: any,
  logout: any,
}

const AppNavigationMenu: FunctionComponent<IProps> = (props) => {
  const {en, isOpen, setEn, closeNav, openModal, logout} = props
  return (
    <Drawer open={isOpen} onClose={closeNav} size='full'>
      <Drawer.Header>
        <Drawer.Title>
          Navigation
        </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body style={{padding: 50}}>
        <Nav vertical className='d-flex flex-column align-start w-100'
        activeKey={`${
          location.pathname == '/app' ? '1' :
          location.pathname == '/app/notifications' ? '2' : '3'
        }` }
        >
                    <Nav.Item as={Link} to='/app' eventKey='1' className='d-flex align-center justify-start' style={styles.navLink}>
                        <DashboardIcon className='mr-1' /> {en ? dashboardStrings.navbarEN.home : dashboardStrings.navbarDE.home}
                    </Nav.Item>
                    <Nav.Item as={Link} to='/app/notifications' eventKey='2' className='d-flex  align-center justify-start' style={styles.navLink}>
                        <NotificationsIcon className='mr-1' /> {en ? dashboardStrings.navbarEN.not : dashboardStrings.navbarDE.not}
                    </Nav.Item>
                      <Nav.Item as={Link} to={`/app/profile/${auth.currentUser?.uid}`} eventKey='3' className='d-flex  align-center justify-start' style={styles.navLink}>
                          <USER className='mr-1' /> {en ? dashboardStrings.navbarEN.acc : dashboardStrings.navbarDE.acc}
                      </Nav.Item>{
                        /*
                        <Nav.Item className='d-flex  align-center justify-start' style={styles.navLink}>
                        <UsersIcon className='mr-1' /> {en ? dashboardStrings.navbarEN.nw : dashboardStrings.navbarDE.nw}
                        </Nav.Item>
                        <Nav.Item className='mb-3 d-flex  align-center justify-start' style={styles.navLink}>
                        <MessageIcon className='mr-1' /> {en ? dashboardStrings.navbarEN.event : dashboardStrings.navbarDE.event}
                        </Nav.Item>
                      */}

                    <Button
                    className='mt-2'
                    style={ResponsiveStyles.mainBtn}
                    appearance='primary'
                    size='lg'
                    onClick={openModal} >
                    {en ? dashboardStrings.navbarEN.btn : dashboardStrings.navbarDE.btn}
                    </Button>
                    <Button
                    className='mt-1 mb-4'
                    style={ResponsiveStyles.logoutBtn}
                    appearance='primary'
                    size='lg'
                    onClick={logout}
                    >
                      {en ? 'Logout' : 'Abmelden'}
                    </Button>
                    <LanguageToggle en={en} setEn={setEn}/>
                </Nav>
      </Drawer.Body>
    </Drawer>
  )
}

const styles = {
  navLink: {
      flex: 1,
      marginRight: 15,
      fontSize: 18,
      color: mainColors.dark,
  },
  btn: {
    marginRight: 25
  }
}

export default AppNavigationMenu
