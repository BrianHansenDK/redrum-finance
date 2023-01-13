import React from 'react'
import { Nav, Sidenav } from 'rsuite'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Link } from 'react-router-dom';

const styles = {
  sideNav: {
    width: 240,
    height: 100 + 'vh',
    top: 0,
    left: 0,
    paddingTop: 100
  }


}

const SideBar = () => {
  return (
    <>
      <Sidenav defaultOpenKeys={['3', '4']} style={styles.sideNav} className='sidebar' >
        <Sidenav.Body>
          <Nav activeKey={location.pathname == '/app/investments' ? '2' : '1'}>
            <h3 className='d-flex justify-center'>Investments</h3>
            <Nav.Item eventKey="1" as={Link} to='/app' icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" as={Link} to='/app/investments' icon={<GroupIcon />}>
              Investments
            </Nav.Item>
            <Nav.Item eventKey='3' icon={<MagicIcon />}>
              Secondary market
            </Nav.Item>
            <Nav.Item eventKey='4' icon={<DashboardIcon />}>
              My Portfolio
            </Nav.Item>
            <h3 className='d-flex justify-center'>Community</h3>
            <Nav.Item eventKey="5" icon={<DashboardIcon />}>
              Investor databank
            </Nav.Item>
            <Nav.Item eventKey="6" icon={<GroupIcon />}>
              Your network
            </Nav.Item>
            <Nav.Item eventKey='7' icon={<MagicIcon />}>
              Messages
            </Nav.Item>
            <Nav.Item eventKey='8' icon={<DashboardIcon />}>
              Events
            </Nav.Item>
            <Nav.Item eventKey='9' icon={<GroupIcon />}>
              Podcasts
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </>
  )
}

export default SideBar