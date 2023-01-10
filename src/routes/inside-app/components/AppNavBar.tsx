import React from 'react'
import { Nav, Navbar } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import HOME from '@rsuite/icons/legacy/Home'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import USER from '@rsuite/icons/legacy/User'
import OPENMENU from '@rsuite/icons/legacy/CaretDown'
import NavbarBrand from 'rsuite/esm/Navbar/NavbarBrand'
import NavMenu from 'rsuite/esm/Nav/NavMenu'

const AppNavBar = () => {
  return (
    <Navbar>
        <NavbarBrand>
            Redrum media invest
        </NavbarBrand>
        <Nav pullRight className='d-flex align-center' style={{height: 60}}>
            <NavItem className='d-flex flex-column align-center justify-around' style={{flex: 1, width: 125, marginRight: 15}}>
                <DashboardIcon/> Dashboard
            </NavItem>
            <NavItem className='d-flex flex-column align-center justify-around' style={{flex: 1, width: 125, marginRight: 15}}>
                 <USER/> <span>My account <OPENMENU/> </span>
            </NavItem>
            <NavItem className='d-flex flex-column align-center justify-around' style={{flex: 1, width: 125, marginRight: 15}}>
                <HOME/> Home
            </NavItem>
            <NavItem className='d-flex flex-column align-center justify-around' style={{flex: 1, width: 125, marginRight: 15}}>
                <HOME/> Home
            </NavItem>
        </Nav>
    </Navbar>
  )
}

export default AppNavBar