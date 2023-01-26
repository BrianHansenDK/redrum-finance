import React, { useState } from 'react'
import { Nav, Sidenav } from 'rsuite'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import InvestmentsIcon from '@rsuite/icons/legacy/ChartsLine'
import SecondaryMarketIcon from '@rsuite/icons/legacy/Money';
import PortfolioIcon from '@rsuite/icons/legacy/PieChart'
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import { Link } from 'react-router-dom';
import UpcomingModal from './UpcomingModal';

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
  const [isVisible, setVisible] = useState(false)
  const [currentKey, setCurrentKey] = useState(1)
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
          <Nav activeKey={location.pathname == '/app/investments' ? '2' : location.pathname == '/app/portfolio' ? '4' : '1'}>
            <h3 className='d-flex justify-center'>Investments</h3>
            <Nav.Item eventKey="1" as={Link} to='/app' icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" as={Link} to='/app/investments' icon={<InvestmentsIcon />}>
              Investments
            </Nav.Item>
            <Nav.Item onClick={openModal} eventKey='3' icon={<SecondaryMarketIcon />}>
              Secondary market
            </Nav.Item>
            <Nav.Item as={Link} to='/app/portfolio' eventKey='4' icon={<PortfolioIcon />}>
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
      <UpcomingModal
        title={'Coming soon'}
        body={'Our secondary market is currently under development and is not available for the time being'}
        visible={isVisible}
        close={closeModal} />
    </>
  )
}

export default SideBar