import React, { useEffect, useState } from 'react'
import { Button, IconButton, Nav, Navbar, Notification, useToaster } from 'rsuite'
import { Link, useNavigate } from 'react-router-dom';
import NavMenu from 'rsuite/esm/Nav/NavMenu';
import NavItem from 'rsuite/esm/Nav/NavItem';
import AuthModal from './AuthModal';
import { navbarStrings } from '../library/string/Landinspage';
import ChangeLanBtn from './ChangeLanBtn';
import mainShadows from '../routes/inside-app/themes/shadows';
import MenuIcon from '@rsuite/icons/Menu'
import { useMediaQuery } from '../misc/custom-hooks';
import PhoneNavMenu from './PhoneNavMenu';
import NewAuthModal from '../routes/auth/authmodal/NewAuthModal';

interface IProps {
  openModal: any, closeModal: Function, isVisible: any, dark: boolean, en: boolean, setEn: any
}

const MainNavbar: React.FunctionComponent<IProps> = (props) => {
  const { openModal, closeModal, isVisible, dark, en, setEn } = props
  const isTablet = useMediaQuery('(max-width: 1100px)')
  const isDesktop = useMediaQuery('(min-width: 1600px)')
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
    /*{
        t: 'Blog',
    },
    {
        t: 'FAQ',
    },*/
    {
        t: en ? navbarStrings.navbarEN.sI : navbarStrings.navbarDE.sI,
    }
]

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

    return (
        <>
            <Navbar
            id='navbar'
            appearance='subtle'
            className={`${dark ? 'dark-bg shadow' : 'no-bg'} trans ${isDesktop ? 'd-flex align-items-center' : ''}`}
            style={{
              paddingRight: 25,
              paddingLeft: isDesktop ? 20 : 0,
              boxShadow: dark ? mainShadows.navBar : 'none',
              height: isDesktop ? 120 : 'auto',
            }}
            >
                <Navbar.Brand
                id='brand'
                className='bold d-flex align-center'
                as={Link} to='/'
                style={{
                  height: isTablet || isDesktop ? '100%' : 75,
                  fontSize: isDesktop ? 50 : 20,
                  marginRight: isDesktop ? 25 : 15,
                }}
                >
                    Redrum Pro
                </Navbar.Brand>
                <>
                {
                  isTablet ? (
                    <>
                    <div
                    className='navbar-menu-btn-con'
                    >
                      <IconButton
                      appearance='primary'
                      className='navbar-menu-btn'
                      icon={
                        <MenuIcon style={{
                          fontWeight: '700',
                          fontSize: 20,
                        }}
                        onClick={openMenu}
                        />
                      }/>
                    </div>
                    <PhoneNavMenu
                    mainLinks={MAINLINKS}
                    navLinks={APPLINKS}
                    en={en}
                    setEn={setEn}
                    isMenuOpen={isMenuOpen}
                    closeMenu={closeMenu}
                    openModal={openModal}
                     />
                    </>
                  ) : (
                    <>
                    <Nav
                    className='d-flex align-center '
                    style={{
                    display: 'block',
                    height: isDesktop ? '100%' : 75,
                    flex: 0,
                    columnGap: 30,
                    fontSize: isDesktop ? 25 : 12.75,
                    fontWeight: 400
                    }}
                    >
                    {
                      MAINLINKS.map(l => (
                        <Link to={l.to} className='nav-ul' key={l.t} preventScrollReset={false}>
                                {l.t}
                            </Link>
                        ))
                    }
                </Nav>
                <Nav pullRight className={`d-flex align-center ${isDesktop ? 'position-absolute' : ''}`} style={{
                height: 75,
                columnGap: 30,
                fontSize: isDesktop ? 25 : 12.75,
                fontWeight: 400,
                top: isDesktop ? 'calc(60px - 37.5px)' : 'auto',
                right: 20,
                }}>
                    {
                        APPLINKS.map(l => (
                            <Link
                            onClick={openModal}
                            to={''}
                            className='nav-ul'
                            key={l.t}
                            preventScrollReset={false}>
                                {l.t}
                            </Link>
                        ))
                    }
                    <Button
                    appearance='primary'
                    className={`${'r-btn r-nav-btn'}`}
                    size='lg'
                    onClick={openModal}
                    >
                        {en ? navbarStrings.navbarEN.btn : navbarStrings.navbarDE.btn}
                    </Button>
                    <ChangeLanBtn en={en} setEn={setEn} />
                </Nav>
                    </>
                  )
                }
                  </>

            </Navbar>
            {/*<AuthModal isVisible={isVisible} close={closeModal} en={en} />*/}
            <NewAuthModal isOpen={isVisible} closeModal={closeModal} en={en}/>
        </>
    )
}

export default MainNavbar
