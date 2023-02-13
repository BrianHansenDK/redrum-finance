import React from 'react'
import { Divider, FlexboxGrid, Nav, Navbar } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'
import HomeIcon from '@rsuite/icons/legacy/Home'
import EditIcon from '@rsuite/icons/legacy/Setting'
import EventsIcon from '@rsuite/icons/EventDetail'
import PeopleIcon from '@rsuite/icons/Peoples'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { Link, useParams } from 'react-router-dom'


const VProjectBottomNavbar = () => {
  const isMobile = useMediaQuery('(max-width: 992px)')
  const {projectId} = useParams()
  const lastIndex = location.pathname.split('/').length - 1
  const lastParam = location.pathname.split('/')[lastIndex]
  return (
    <Navbar className='v-project-navbar' >
      <Nav as={FlexboxGrid} className='inner'>
        <FlexboxGridItem colspan={6}>

        <NavItem
          icon={<HomeIcon/>}
          as={Link}
          to={`/vanumo/project/${projectId}`}
          className={`${lastParam == projectId ? 'active' : ''} nav-item`}>
            {isMobile ? null : 'Base'}
          </NavItem>
        </FlexboxGridItem>
        <FlexboxGridItem colspan={6}>
        <NavItem
          icon={<EditIcon/>}
          as={Link}
          to={`/vanumo/project/${projectId}/settings`}
          className={`${lastParam == 'settings' ? 'active' : ''} nav-item`}>
            {isMobile ? null : 'Settings'}
          </NavItem>
        </FlexboxGridItem>
        <FlexboxGridItem colspan={6}>
        <NavItem
          icon={<EventsIcon/>}
          as={Link}
          to={`/vanumo/project/${projectId}/settings`}
          className={`${lastParam == projectId ? 'active' : ''} nav-item`}>
            {isMobile ? null : 'Events'}
          </NavItem>
        </FlexboxGridItem>
        <FlexboxGridItem colspan={6}>
        <NavItem
          icon={<PeopleIcon/>}
          as={Link}
          to={`/vanumo/project/${projectId}`}
          className={`${lastParam == projectId ? 'active' : ''} nav-item`}>
            {isMobile ? null : 'Investors'}
          </NavItem>
        </FlexboxGridItem>
      </Nav>
    </Navbar>
  )
}

const styles = {

}

export default VProjectBottomNavbar
