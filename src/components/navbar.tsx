import React, { useState } from 'react'
import { Button, Nav, Navbar } from 'rsuite'
import { Link } from 'react-router-dom';
import NavMenu from 'rsuite/esm/Nav/NavMenu';
import NavItem from 'rsuite/esm/Nav/NavItem';

const MAINLINKS = [
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

const APPLINKS = [
    {
        t: 'Blog',
    },
    {
        t: 'FAQ',
    },
    {
        t: 'Sign in',
    }
]

const MainNavbar = () => {
    const [isActive, setActive] = useState(false);
    window.addEventListener('scroll', () => {
        window.scrollY >= 50 ? setActive(true) : setActive(false)
    })
    return (
        <Navbar id='navbar' appearance='subtle' className={`${isActive ? 'dark-bg' : 'no-bg'} trans`} style={{ paddingRight: 25 }}>
            <Navbar.Brand id='brand' className='bold d-flex align-center' as={Link} to='/' style={{ height: 75, fontSize: 20 }}>
                Redrum Media Invest
            </Navbar.Brand>
            <Nav className='d-flex align-center ' style={{ height: 75, flex: 0, columnGap: 15, fontSize: 17.5 }}>
                {
                    MAINLINKS.map(l => (
                        <Link to={l.to} className='nav-ul'>
                            {l.t}
                        </Link>
                    ))
                }
            </Nav>
            <Nav pullRight className='d-flex align-center' style={{ height: 75, columnGap: 15, fontSize: 17.5 }}>
                {
                    APPLINKS.map(l => (
                        <Link to='/' className='nav-ul'>
                            {l.t}
                        </Link>
                    ))
                }
                <Button appearance='primary' className='main-btn white pl-3 pr-3' size='lg' >
                    Invest Now
                </Button>
                <NavMenu as={Link} className='nav-ul' title='EN'>
                    <NavItem>
                        EN
                    </NavItem>
                    <NavItem>
                        DE
                    </NavItem>
                </NavMenu>
            </Nav>
        </Navbar>
    )
}

export default MainNavbar