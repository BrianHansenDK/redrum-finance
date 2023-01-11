import React from 'react'
import { Nav, Navbar, Tooltip, Whisper } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import OPENMENU from '@rsuite/icons/legacy/CaretDown'
import NavbarBrand from 'rsuite/esm/Navbar/NavbarBrand'
import { getAuth } from 'firebase/auth';
import HOME from '@rsuite/icons/legacy/Home'
import USER from '@rsuite/icons/legacy/User'
import GEAR from '@rsuite/icons/legacy/Gear'
import DOCS from '@rsuite/icons/legacy/Database'
import INV from '@rsuite/icons/legacy/Share'

const ACCOUNTNAV = [
    {
        title: 'Edit profile',
        icon: <USER/>,
        index: 1,
    },
    {
        title: 'Settings',
        icon: <GEAR/>,
        index: 2,
    },
    {
        title: 'My data',
        icon: <DOCS/>,
        index: 3,
    },
    {
        title: 'Investmentpreparations',
        icon: <INV/>,
        index: 4,
    },
]



const AppNavBar = () => {
    const auth = getAuth()
    const AccountTooltip = (
        <Tooltip className='grey-bg pl-2 pr-1 pt-1 pb-1 shadow' style={{borderRadius: 10, minWidth: 40 + '%'}}>
            <h3 className='' style={{color: '#333'}} >Account</h3>
            <div className='d-flex mt-1 align-center'>
                <div className='dark-bg d-flex align-center justify-center' style={{ width: 50, height: 50, borderRadius: 50 + '%' }} >
                    {auth.currentUser?.displayName?.split(' ').map((el) => el[0]).join('')}
                </div>
                <p className='ml-1 txt-1' style={{ color: 'black' }}>
                    {auth.currentUser?.displayName} <br/>
                    <span style={{ fontSize: 13.5, color: '#777'}}>{auth.currentUser?.email}</span>
                </p>
            </div>
            <div className='d-flex mt-2 mr-5' style={{justifyContent: 'space-between'}}>
                <Nav vertical>
                    {ACCOUNTNAV.map((i) => (
                        i.index <= 2 ? (
                            <NavItem key={i.index} className='txt-1 txt-dark'>
                            {i.icon} {i.title}
                        </NavItem>
                            ) : null
                    ))}
                </Nav>
                <Nav vertical>
                    {ACCOUNTNAV.map((i) => (
                        i.index > 2 ? (
                            <NavItem key={i.index} className='txt-1 txt-dark'>
                            {i.icon} {i.title}
                        </NavItem>
                            ) : null
                    ))}
                </Nav>
            </div>
        </Tooltip >
    )
    return (
        <Navbar>
            <NavbarBrand>
                Redrum media invest
            </NavbarBrand>
            <Nav pullRight className='d-flex align-center' style={{ height: 60 }}>
                <NavItem className='d-flex flex-column align-center justify-around' style={{ flex: 1, width: 125, marginRight: 15 }}>
                    <DashboardIcon /> Dashboard
                </NavItem>
                <Whisper placement='bottom' controlId='control-id-click' trigger='click' speaker={AccountTooltip} >
                    <NavItem className='d-flex flex-column align-center justify-around' style={{ flex: 1, width: 125, marginRight: 15 }}>
                        <USER /> <span>My account <OPENMENU /> </span>
                    </NavItem>
                </Whisper>
                <NavItem className='d-flex flex-column align-center justify-around' style={{ flex: 1, width: 125, marginRight: 15 }}>
                    <HOME /> Home
                </NavItem>
                <NavItem className='d-flex flex-column align-center justify-around' style={{ flex: 1, width: 125, marginRight: 15 }}>
                    <HOME /> Home
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default AppNavBar