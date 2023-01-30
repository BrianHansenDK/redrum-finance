import React from 'react'
import { Message, Nav, Navbar, Tooltip, useToaster, Whisper } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import OPENMENU from '@rsuite/icons/legacy/CaretDown'
import NavbarBrand from 'rsuite/esm/Navbar/NavbarBrand'
import { getAuth } from 'firebase/auth';
import HOME from '@rsuite/icons/legacy/Home'
import UsersIcon from '@rsuite/icons/legacy/PeopleGroup'
import MessageIcon from '@rsuite/icons/legacy/Wechat'
import NotificationsIcon from '@rsuite/icons/legacy/Bell'
import USER from '@rsuite/icons/legacy/User'
import GEAR from '@rsuite/icons/legacy/Gear'
import DOCS from '@rsuite/icons/legacy/Database'
import INV from '@rsuite/icons/legacy/Share'
import REDRUMCAT from '@rsuite/icons/legacy/Anchor'
import TooltipForAccount from './TooltipForAccount';
import { Link, useNavigate } from 'react-router-dom';



const AppNavBar = ({ fixed = true }: { fixed: boolean }) => {
    const auth = getAuth()
    const navigate = useNavigate()
    const toaster = useToaster()
    const logout = () => {
        auth.signOut().then(() => location.pathname == '/app' ? navigate('/') : navigate('/app'))
        toaster.push(<Message showIcon type='info'>
          Logged out
        </Message>, {placement: 'topCenter'})
        window.setTimeout(() => {toaster.clear()}, 5000)
    }

    const ACCOUNTNAV = [
        {
            title: 'Edit profile',
            icon: <USER />,
            index: 1,
            to: `/app/profile/${auth.currentUser?.uid}`
        },
        {
            title: 'Settings',
            icon: <GEAR />,
            index: 2,
            to: `/app/profile/${auth.currentUser?.uid}`
        },
        {
            title: 'My data',
            icon: <DOCS />,
            index: 3,
            to: `/app/profile/${auth.currentUser?.uid}`
        },
        {
            title: 'Investmentpreparations',
            icon: <INV />,
            index: 4,
            to: `/app/profile/${auth.currentUser?.uid}`
        },
    ]

    const AccountTooltip = (
        <Tooltip className='grey-bg pl-2 pr-1 pt-1 pb-1 shadow' style={{ borderRadius: 10, minWidth: 40 + '%' }}>
            <TooltipForAccount ACCOUNTNAV={ACCOUNTNAV} auth={auth} logout={logout} />
        </Tooltip>
    )
    return (
        <Navbar style={styles.navBar} className={`navbar ${fixed ? '' : 'navbarhidden'}`}>
            <div style={styles.navBarInner}>

                <NavbarBrand style={styles.brand}>
                    <REDRUMCAT /> Redrum Pro
                </NavbarBrand>
                <Nav pullRight className='d-flex align-center' style={{ height: 60 }} activeKey={`${location.pathname == '/app' ? '1' : location.pathname == `/app/profile/${auth.currentUser?.uid}` ? '3' : null}`}>
                    <NavItem as={Link} to='/app' eventKey='1' className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                        <DashboardIcon /> Dashboard
                    </NavItem>
                    <NavItem className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                        <NotificationsIcon /> Notifications
                    </NavItem>
                    <Whisper placement='bottom' controlId='control-id-click' trigger='click' speaker={AccountTooltip} >
                        <NavItem eventKey='3' className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                            <USER /> <span>My account <OPENMENU /> </span>
                        </NavItem>
                    </Whisper>
                    <NavItem className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                        <UsersIcon /> Network
                    </NavItem>
                    <NavItem className='d-flex flex-column align-center justify-around' style={styles.navLink}>
                        <MessageIcon /> Messages
                    </NavItem>

                </Nav>
            </div>
        </Navbar>
    )
}

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
    navLink: {
        flex: 1,
        width: 125,
        marginRight: 15,
    }
}

export default AppNavBar
