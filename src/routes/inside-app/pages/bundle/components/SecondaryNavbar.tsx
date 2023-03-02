import React, { FunctionComponent, useEffect, useState } from 'react'
import { Nav, Navbar } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import OverviewIcon from '@rsuite/icons/Treemap'
import MovieIcon from '@rsuite/icons/legacy/VideoCamera'
import InfoIcon from '@rsuite/icons/HelpOutline'
import UpdatesIcon from '@rsuite/icons/Notice'
import InverstorsIcon from '@rsuite/icons/Peoples'
import SecondaryNavbarItem from './SecondaryNavbarItem'
import MainBtn from '../../../components/MainBtn'
import ConfirmAgeModal from './ConfirmAgeModal'
import { auth, database, userRef } from '../../../../../firebase'
import InvestModal from './InvestModal'
import TransferMoneyModal from './TransferMoneyModal'
import '../styles/bundlepage.scss'
import bundleStrings from '../../../../../library/string/Bundle'

interface IProps {
  project: any,
  isFixed: boolean,
  en: boolean,
  isMobile: boolean,
}
const SecondaryNavbar: FunctionComponent<IProps> = (props) => {
  const { project, isFixed, en, isMobile } = props
    const NAVS = [
        {
            index: 0,
            txt: en ? bundleStrings.secondaryNavbarEN.home : bundleStrings.secondaryNavbarDE.home,
            icon: <OverviewIcon />,
            to: `/app/bundle/${project.id}`
        },
        {
            index: 1,
            txt: en ? bundleStrings.secondaryNavbarEN.mv : bundleStrings.secondaryNavbarDE.mv,
            icon: <MovieIcon />,
            to: `/app/bundle/${project.id}/extras/movies`
        },
        {
            index: 2,
            txt: en ? bundleStrings.secondaryNavbarEN.qa : bundleStrings.secondaryNavbarDE.qa,
            icon: <InfoIcon />,
            to: `/app/bundle/${project.id}/extras/q-and-a`
        },
        {
            index: 3,
            txt: en ? bundleStrings.secondaryNavbarEN.up : bundleStrings.secondaryNavbarDE.up,
            icon: <UpdatesIcon />,
            to: `/app/bundle/${project.id}/extras/updates`
        },
        {
            index: 4,
            txt: en ? bundleStrings.secondaryNavbarEN.iv : bundleStrings.secondaryNavbarDE.iv,
            icon: <InverstorsIcon />,
            to: `/app/bundle/${project.id}/extras/investors`
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

    const [isVisible, setVisible] = useState(false)
    const [isInvestVisible, setInvestVisible] = useState(false)
    const [isTransferVisible, setTransferVisible] = useState(false)
    const [available, setAvailable] = useState<any>(0)
    const [birthYear, setBirthYear] = useState(0)
    const userId = auth.currentUser?.uid
    let data: any[] = []
    useEffect(() => {
        userRef(userId, '/money_available', setAvailable)
        userRef(userId, '/birthYear', setBirthYear)
    })
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    const openInvestModal = () => {
        setVisible(false)
        available !== null && available !== 0 ? setInvestVisible(true) : setTransferVisible(true)
    }
    const closeInvestModal = () => {
        setInvestVisible(false)
        setTransferVisible(false)
    }
    const date = Date.now()
    const today = new Date(date)
    const age = today.getFullYear() - birthYear
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
                        pressed={age >= 18 && age !== null ? openInvestModal : openModal}
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
            <ConfirmAgeModal visible={isVisible} close={closeModal} openInvestModal={openInvestModal} en={en} />
            <InvestModal project={project} close={closeInvestModal} visible={isInvestVisible} showReciept={() => null} />
            <TransferMoneyModal navPressed={false} close={closeInvestModal} visible={isTransferVisible} />
        </>
    )
}



export default SecondaryNavbar
