import React, { FunctionComponent } from 'react'
import { IconButton, Nav, Navbar } from 'rsuite'
import BurgerMenuIcon from '@rsuite/icons/Menu'
import DashboardIcon from '@rsuite/icons/Dashboard'

interface IProps {
  en: boolean,
  setEn: any,
  openMenu: any,
  openNav: any,
}
const AppNavMenu: FunctionComponent<IProps> = (props) => {
  const {en, setEn, openMenu, openNav} = props
  return (
    <Nav pullRight style={{ height: 60 }}>
      {
        !location.pathname.includes('bundle')
        && !location.pathname.includes('profile') ? (
          <Nav.Item>
        <IconButton
        onClick={openMenu}
        icon={<DashboardIcon />}
        appearance='primary'/>
      </Nav.Item>
        ) : null
      }

      <Nav.Item>
        <IconButton
        onClick={openNav}
        icon={<BurgerMenuIcon />}
        appearance='primary'/>
      </Nav.Item>
    </Nav>
  )
}

export default AppNavMenu
