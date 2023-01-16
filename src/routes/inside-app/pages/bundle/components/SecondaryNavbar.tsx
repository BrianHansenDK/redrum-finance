import React from 'react'
import { Nav, Navbar } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import OverviewIcon from '@rsuite/icons/Treemap'
import MovieIcon from '@rsuite/icons/legacy/VideoCamera'
import InfoIcon from '@rsuite/icons/HelpOutline'
import UpdatesIcon from '@rsuite/icons/Notice'
import InverstorsIcon from '@rsuite/icons/Peoples'
import SecondaryNavbarItem from './SecondaryNavbarItem'
import MainBtn from '../../../components/MainBtn'

const SecondaryNavbar = ({ id, isFixed }: { id: any, isFixed: boolean }) => {
    const NAVS = [
        {
            index: 0,
            txt: 'Overview',
            icon: <OverviewIcon />,
            to: `/app/bundle/${id}`
        },
        {
            index: 1,
            txt: 'Movies',
            icon: <MovieIcon />,
            to: `/app/bundle/${id}/extras/movies`
        },
        {
            index: 2,
            txt: 'Q & A',
            icon: <InfoIcon />,
            to: `/app/bundle/${id}/extras/q-and-a`
        },
        {
            index: 3,
            txt: 'Updates',
            icon: <UpdatesIcon />,
            to: `/app/bundle/${id}/extras/updates`
        },
        {
            index: 4,
            txt: 'Investors',
            icon: <InverstorsIcon />,
            to: `/app/bundle/${id}/extras/investors`
        },
    ]
    const styles = {
        navbar: {
            height: 75,
            width: 100 + '%',
            zIndex: 5,
        },
        navBarHideable: {
            height: 75,
            width: 100 + '%',
            opacity: isFixed ? 0 : 1,
            zIndex: 2,
        },
    }
    return (
        <>
            <Navbar style={styles.navbar} className={`${isFixed ? 'navbar shadow' : 'navbarhidden'}`}>
                <Nav activeKey={0} >
                    {NAVS.map((nav: any) => (
                        <SecondaryNavbarItem
                            isActive={location.pathname == nav.to}
                            key={nav.index}
                            icon={nav.icon}
                            txt={nav.txt}
                            to={nav.to}
                        />
                    ))}
                </Nav>
                <Nav pullRight style={{ minWidth: 250, }}>
                    <MainBtn
                        content={'Invest now'}
                        pressed={() => null}
                        btnColor='blue'
                        btnAppearance='primary'
                        btnSize='lg'
                        isBlock={true} />
                </Nav>
            </Navbar>

            <Navbar style={styles.navBarHideable} className='navbar relativenavbar' >
                <Nav activeKey={0} >
                    {NAVS.map((nav: any) => (
                        <SecondaryNavbarItem
                            isActive={location.pathname == nav.to}
                            key={nav.index}
                            icon={nav.icon}
                            txt={nav.txt}
                            to={nav.to}
                        />
                    ))}
                </Nav>
                <Nav pullRight>
                    <div style={{ opacity: 0, }} >
                        <MainBtn
                            content={'Invest now'}
                            pressed={() => null}
                            btnColor='blue'
                            btnAppearance='primary'
                            btnSize='lg'
                            isBlock={true} />
                    </div>
                </Nav>
            </Navbar>
        </>
    )
}



export default SecondaryNavbar