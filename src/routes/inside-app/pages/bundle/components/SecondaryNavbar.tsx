import React, { FunctionComponent, useEffect, useState } from 'react'
import { Button, Nav, Navbar } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import OverviewIcon from '@rsuite/icons/Treemap'
import MovieIcon from '@rsuite/icons/legacy/VideoCamera'
import InfoIcon from '@rsuite/icons/HelpOutline'
import UpdatesIcon from '@rsuite/icons/Notice'
import InverstorsIcon from '@rsuite/icons/Peoples'
import SecondaryNavbarItem from './SecondaryNavbarItem'
import MainBtn from '../../../components/MainBtn'
import ConfirmAgeModal from './ConfirmAgeModal'
import { auth, database, getCurrentUserFunction, userRef } from '../../../../../firebase'
import InvestModal from './invest-modal/InvestModal'
import TransferMoneyModal from './TransferMoneyModal'
import '../styles/bundlepage.scss'
import bundleStrings from '../../../../../library/string/Bundle'
import { FirebaseUser } from '../../../../../database/Objects'
import { getRealAge } from '../../../../../misc/custom-hooks'
import RedrumProLoader from '../../../components/RedrumProLoader'

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
    const userId = auth.currentUser?.uid
    const [user, setUser] = React.useState<FirebaseUser | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false)
    let data: any[] = []
    useEffect(() => {
        getCurrentUserFunction(userId, setUser, setLoading);
    }, [userId])

    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    const openInvestModal = () => {
        setVisible(false)
        setInvestVisible(true);
    }
    const closeInvestModal = () => {
        setInvestVisible(false)
        setTransferVisible(false)
    }
    const date = Date.now()
    const today = new Date(date)
    const age = getRealAge( user == null ? today : user?.birth_date !== "" ? new Date(user!.birth_date) : today)

    return (
      <>
      {loading ? (<RedrumProLoader/>) : user === null ? null : (
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
                <Nav pullRight style={{ minWidth: isMobile ? 'auto' : 250, }}>
                      <Button
                      appearance='primary'
                      className='r-btn r-main-btn'
                      onClick={
                        age >= 18 ?
                        openInvestModal :
                        openModal
                      }
                      >
                        {en ? 'Invest now' : 'Jetz investieren'}
                      </Button>
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
                  {
                    isMobile ? (
                      <Button
                      appearance='primary'
                      className='r-btn r-main-btn'
                      onClick={
                        age >= 18 ?
                        openInvestModal :
                        openModal
                      }
                      >
                        Invest now
                      </Button>
                    ) : (
                      <MainBtn
                            content={'Invest now'}
                            pressed={
                              age >= 18 ?
                              openInvestModal :
                              openModal
                            }
                            btnColor='blue'
                            btnAppearance='primary'
                            btnSize='lg'
                            isBlock={true} />
                    )
                  }
                  </div>

                </Nav>
            </Navbar>
            <ConfirmAgeModal visible={isVisible} close={closeModal} openInvestModal={openInvestModal} en={en} age={0} user={user!} />
            <InvestModal
            project={project}
            close={closeInvestModal}
            visible={isInvestVisible}
            showReciept={() => null}
            en={false}
            navOpen={false}
            setEn={undefined} openMenu={undefined} openNav={undefined} closeNav={undefined} />
            <TransferMoneyModal navPressed={false} close={closeInvestModal} visible={isTransferVisible} />
        </>
      )}

      </>
    )
}



export default SecondaryNavbar
