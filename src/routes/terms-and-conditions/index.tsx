import React, { FunctionComponent } from 'react'
import { Nav, Sidenav } from 'rsuite'
import { mainColors } from '../inside-app/themes/colors'
import MainLayout from '../layouts/mainLayout'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Outlet } from 'react-router';

interface IProps {
  openModal: any,
  closeModal: any,
  isVisible: boolean,
  en: boolean,
  setEn: any,
}

const TermsAndConditionsPage: FunctionComponent<IProps> = (props) => {
  const {openModal,closeModal, isVisible,en,setEn} = props
  return (
    <MainLayout
    openModal={openModal}
    closeModal={closeModal}
    isVisible={isVisible}
    dark
    en={en}
    setEn={setEn}
    >
      <Sidenav style={styles.dashboard} className='position-fixed'>
        <Sidenav.Body>
          <Nav>
            <Nav.Item icon={<DashboardIcon />}>
              Film
            </Nav.Item>
            <Nav.Item icon={<DashboardIcon />}>
              Buch
            </Nav.Item>
            <Nav.Item icon={<DashboardIcon />}>
              Hörbuch
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <h1 style={styles.pageTitle} className='text-center'>
        Allgemeine Geschäftsbedingungen der Redrum Pro GmbH (im Folgenden Redrum Pro genannt)
      </h1>
      <div style={styles.contentWrap}>
        <Outlet />
      </div>
    </MainLayout>
  )
}

const styles = {
  pageTitle: {
    fontFamily: 'Poppins',
    color: mainColors.dark,
    margin: '125px auto 50px',
    paddingLeft: 150,
  },
  dashboard: {
    width: 150,
    height: '100vh',
    top: 0,
    left: 0,
    paddingTop: 100,
    zIndex: 2,
  },
  contentWrap: {
    paddingLeft: 200,
    paddingRight: 200,
  }
}

export default TermsAndConditionsPage
