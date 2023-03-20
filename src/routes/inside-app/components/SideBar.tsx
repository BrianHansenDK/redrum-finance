import React, { useEffect, useState } from 'react'
import { Nav, Sidenav, Toggle } from 'rsuite'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import InvestmentsIcon from '@rsuite/icons/legacy/ChartsLine'
import SecondaryMarketIcon from '@rsuite/icons/legacy/Money';
import DbIcon from '@rsuite/icons/legacy/Database'
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import UsersIcon from '@rsuite/icons/legacy/PeopleGroup'
import MessageIcon from '@rsuite/icons/legacy/Wechat'
import { Link } from 'react-router-dom';
import UpcomingModal from './UpcomingModal';
import mainShadows from '../themes/shadows';
import dashboardStrings from '../../../library/string/Dashboard';
import LanguageToggle from './LanguageToggle';
import { useMediaQuery } from '../../../misc/custom-hooks';

const styles = {
  sideNav: {
    width: 240,
    height: 100 + 'vh',
    top: 0,
    left: 0,
    paddingTop: 100,
    boxShadow: mainShadows.card,
  }


}

const SideBar = ({en} : {en: boolean}) => {
  const [isVisible, setVisible] = useState(false)
  const [currentKey, setCurrentKey] = useState('1')
  const isMobile = useMediaQuery('(max-width: 1100px)')
  useEffect(() => {
    if (location.pathname == '/app') {
      setCurrentKey('1')
    }
    else if (location.pathname == '/app/investments') {
      setCurrentKey('2')
    }
    else if (location.pathname == '/app/databank') {
      setCurrentKey('4')
    }
  })
  const closeModal = () => {
    setVisible(false)
  }
  const openModal = () => {
    setVisible(true)
  }
  return (
    <>
      <Sidenav defaultOpenKeys={['3', '4']} style={styles.sideNav} className='sidebar' >
        <Sidenav.Body>
          <Nav activeKey={currentKey}>
            <h3 className='d-flex justify-center'>
              {en ? dashboardStrings.sidebarEN.t1 : dashboardStrings.sidebarDE.t1}
              </h3>
            <Nav.Item eventKey="1" as={Link} to='/app' icon={<DashboardIcon />}>
            {en ? dashboardStrings.sidebarEN.home : dashboardStrings.sidebarDE.home}
            </Nav.Item>
            <Nav.Item eventKey="2" as={Link} to='/app/investments' icon={<InvestmentsIcon />}>
            {en ? dashboardStrings.sidebarEN.inv : dashboardStrings.sidebarDE.inv}
            </Nav.Item>
            <Nav.Item onClick={openModal} eventKey='3' icon={<SecondaryMarketIcon />}>
            {en ? dashboardStrings.sidebarEN.sec : dashboardStrings.sidebarDE.sec}
            </Nav.Item>
            {/*<h3 className='d-flex justify-center'>{en ? dashboardStrings.sidebarEN.t2 : dashboardStrings.sidebarDE.t2}</h3>*/}
            <Nav.Item eventKey="4" icon={<DbIcon />} as={Link} to='/app/databank'>
            {en ? dashboardStrings.sidebarEN.db : dashboardStrings.sidebarDE.db}
            </Nav.Item>{/*
            <Nav.Item eventKey="6" icon={<UsersIcon />}>
            {en ? dashboardStrings.sidebarEN.nw : dashboardStrings.sidebarDE.nw}
            </Nav.Item>
            <Nav.Item eventKey='7' icon={<MessageIcon />}>
            {en ? dashboardStrings.sidebarEN.news : dashboardStrings.sidebarDE.news}
  </Nav.Item>*/}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <UpcomingModal
        title={'Coming soon'}
        body={en ? dashboardStrings.comingSoonEN.body.join('') : dashboardStrings.comingSoonDE.body.join('')}
        visible={isVisible}
        close={closeModal}
        en={en} />
    </>
  )
}

export default SideBar
