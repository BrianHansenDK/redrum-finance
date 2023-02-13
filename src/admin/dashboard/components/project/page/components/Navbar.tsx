import React from 'react'
import { Divider, FlexboxGrid, Nav, Navbar } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'
import HomeIcon from '@rsuite/icons/legacy/Home'
import EditIcon from '@rsuite/icons/legacy/Setting'
import EventsIcon from '@rsuite/icons/EventDetail'
import PeopleIcon from '@rsuite/icons/Peoples'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { useParams } from 'react-router-dom'


const VProjectBottomNavbar = () => {
  const isMobile = useMediaQuery('(max-width: 992px)')
  const {projectId} = useParams()
  const lastIndex = location.pathname.split('/').length - 1
  const lastParam = location.pathname.split('/')[lastIndex]
  return (
    <Navbar className='v-project-navbar' >
      <Nav as={FlexboxGrid} className='inner'>
        <NavItem
        icon={<HomeIcon/>}
        as={FlexboxGridItem}
        colspan={6}
        className={`${lastParam == projectId ? 'active' : ''} nav-item`}>
          {isMobile ? null : 'Base'}
        </NavItem>
        <NavItem
        icon={<EditIcon />}
        as={FlexboxGridItem}
        colspan={6}
        className='nav-item'>
          {isMobile ? null : 'Settings'}
        </NavItem>
        <NavItem
        icon={<EventsIcon />}
        as={FlexboxGridItem}
        colspan={6}
        className='nav-item'>
        {isMobile ? null : 'Events'}
        </NavItem>
        <NavItem
        icon={<PeopleIcon />}
        as={FlexboxGridItem}
        colspan={6}
        className='nav-item'>
        {isMobile ? null : 'Investors'}
        </NavItem>
      </Nav>
    </Navbar>
  )
}

const styles = {

}

export default VProjectBottomNavbar
