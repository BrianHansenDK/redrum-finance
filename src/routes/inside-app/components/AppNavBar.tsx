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
import REDRUMCAT from '@rsuite/icons/legacy/Anchor'
import TooltipForAccount from './TooltipForAccount';

const ACCOUNTNAV = [
    {
        title: 'Edit profile',
        icon: <USER />,
        index: 1,
    },
    {
        title: 'Settings',
        icon: <GEAR />,
        index: 2,
    },
    {
        title: 'My data',
        icon: <DOCS />,
        index: 3,
    },
    {
        title: 'Investmentpreparations',
        icon: <INV />,
        index: 4,
    },
]

const styles = {
    navBar: {
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        display: 'flex',
        backgroundColor: '#fbfbfb',
        borderBottom: '1px solid black',
    },
    navBarInner: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between'
    },
    brand: {
        fontSize: 21.5,
        fontWeight: '700',
    },
}

const AppNavBar = () => {
    const auth = getAuth()
    const logout = () => {
        auth.signOut().then(() => window.location.reload())
    }

    const AccountTooltip = (
        <Tooltip className='grey-bg pl-2 pr-1 pt-1 pb-1 shadow' style={{ borderRadius: 10, minWidth: 40 + '%' }}>
            <TooltipForAccount ACCOUNTNAV={ACCOUNTNAV} auth={auth} logout={logout} />
        </Tooltip>
    )
    return (
        <Navbar className='navbar' style={styles.navBar}>
            <div style={styles.navBarInner}>

                <NavbarBrand style={styles.brand}>
                    <REDRUMCAT /> Redrum media invest
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
            </div>
        </Navbar>
    )
}

export default AppNavBar