import React, { useEffect, useState } from 'react'
import { Button, Nav, Navbar, Notification, useToaster } from 'rsuite'
import { Link, useNavigate } from 'react-router-dom';
import NavMenu from 'rsuite/esm/Nav/NavMenu';
import NavItem from 'rsuite/esm/Nav/NavItem';
import AuthModal from './AuthModal';
import { navbarStrings } from '../library/string/Landinspage';

interface IProps {
  openModal: any, closeModal: Function, isVisible: any, dark: boolean, en: boolean, setEn: any
}

const MainNavbar: React.FunctionComponent<IProps> = (props) => {
  const { openModal, closeModal, isVisible, dark, en, setEn } = props

  const MAINLINKS = [
    {
        t:  en ? navbarStrings.navbarEN.aU : navbarStrings.navbarDE.aU,
        to: '/about-us'
    },
    {
        t: en ? navbarStrings.navbarEN.wM : navbarStrings.navbarDE.wM,
        to: '/why-movies'
    },
    {
        t: en ? navbarStrings.navbarEN.how : navbarStrings.navbarDE.how,
        to: '/how-it-works'
    },
];

 const APPLINKS = [
    {
        t: 'Blog',
    },
    {
        t: 'FAQ',
    },
    {
        t: en ? navbarStrings.navbarEN.sI : navbarStrings.navbarDE.sI,
        to: '/sign-in'
    }
]

    return (
        <>
            <Navbar id='navbar' appearance='subtle' className={`${dark ? 'dark-bg shadow' : 'no-bg'} trans`} style={{ paddingRight: 25 }}>
                <Navbar.Brand id='brand' className='bold d-flex align-center' as={Link} to='/' style={{ height: 75, fontSize: 20 }}>
                    Redrum Pro
                </Navbar.Brand>
                <Nav className='d-flex align-center ' style={{ height: 75, flex: 0, columnGap: 15, fontSize: 12.75, fontWeight: 400 }}>
                    {
                        MAINLINKS.map(l => (
                            <Link to={l.to} className='nav-ul' key={l.t} preventScrollReset={false}>
                                {l.t}
                            </Link>
                        ))
                    }
                </Nav>
                <Nav pullRight className='d-flex align-center' style={{ height: 75, columnGap: 15, fontSize: 12.75, fontWeight: 400 }}>
                    {
                        APPLINKS.map(l => (
                            <Link to={`${l.to ? l.to : '/'}`} className='nav-ul' key={l.t} preventScrollReset={false}>
                                {l.t}
                            </Link>
                        ))
                    }
                    <Button appearance='primary' className='main-btn white pl-3 pr-3 bold' size='lg' onClick={openModal} >
                        {en ? navbarStrings.navbarEN.btn : navbarStrings.navbarDE.btn}
                    </Button>
                    <NavMenu className='nav-ul' title={`${en ? 'EN' : 'DE'}`} style={{ padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <NavItem style={{display: 'block', width: 75}} onClick={setEn} className='text-center'>
                            {en ? 'DE' : 'EN'}
                        </NavItem>
                    </NavMenu>
                </Nav>
            </Navbar>
            <AuthModal isVisible={isVisible} close={closeModal} en={en} />
        </>
    )
}

export default MainNavbar
