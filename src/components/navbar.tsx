import React, { useEffect, useState } from 'react'
import { Button, Nav, Navbar, Notification, useToaster } from 'rsuite'
import { Link, useNavigate } from 'react-router-dom';
import NavMenu from 'rsuite/esm/Nav/NavMenu';
import NavItem from 'rsuite/esm/Nav/NavItem';
import AuthModal from './AuthModal';

export const MAINLINKS = [
    {
        t: 'About us',
        to: '/about-us'
    },
    {
        t: 'Why movies?',
        to: '/why-movies'
    },
    {
        t: 'How it works',
        to: '/how-to'
    },
];

export const APPLINKS = [
    {
        t: 'Blog',
    },
    {
        t: 'FAQ',
    },
    {
        t: 'Sign in',
        to: '/sign-in'
    }
]

const MainNavbar = ({ openModal, closeModal, isVisible, dark }: { openModal: any, closeModal: Function, isVisible: any, dark: boolean }) => {

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
                        Invest Now
                    </Button>
                    <NavMenu className='nav-ul' title='EN' style={{ padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <NavItem>
                            EN
                        </NavItem>
                        <NavItem>
                            DE
                        </NavItem>
                    </NavMenu>
                </Nav>
            </Navbar>
            <AuthModal isVisible={isVisible} close={closeModal} />
        </>
    )
}

export default MainNavbar
