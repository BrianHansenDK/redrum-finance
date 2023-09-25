import React, { FunctionComponent, useEffect, useState } from 'react'
import { Button, Nav, Navbar, Tooltip, Whisper } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import OverviewIcon from '@rsuite/icons/Treemap'
import VideoIcon from '@rsuite/icons/legacy/LogoVideo'
import MovieIcon from '@rsuite/icons/legacy/VideoCamera'
import DocIcon from '@rsuite/icons/DocPass'
import InfoIcon from '@rsuite/icons/HelpOutline'
import PhotoIcon from '@rsuite/icons/legacy/Camera'
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
import { getRealAge, useMediaQuery } from '../../../../../misc/custom-hooks'
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
            txt: en ? 'Sheet' : 'Sheet',
            icon: <InfoIcon />,
            to: `/app/bundle/${project.id}/extras/project-sheet`
        },
        {
            index: 2,
            txt: en ? 'Gallery' : 'Gallerie',
            icon: <PhotoIcon />,
            to: `/app/bundle/${project.id}/extras/gallery`
        },
        {
            index: 3,
            txt: en ? 'Videos' : 'Videos',
            icon: <VideoIcon />,
            to: `/app/bundle/${project.id}/extras/videos`
        },
        {
            index: 4,
            txt: en ? 'Films' : 'Filme',
            icon: <MovieIcon />,
            to: `/app/bundle/${project.id}/extras/movies`
        },
        {
          index: 5,
          txt: en ? 'Docs' : 'Docs',
          icon: <DocIcon />,
          to: `/app/bundle/${project.id}/extras/documents`
      },
      {
          index: 6,
          txt: en ? bundleStrings.secondaryNavbarEN.iv : bundleStrings.secondaryNavbarDE.iv,
          icon: <InverstorsIcon />,
          to: ''//`/app/bundle/${project.id}/extras/investors`
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

    const isSmall = useMediaQuery('(max-width: 469px)');
    const smallBig = useMediaQuery('(max-width: 1288px)') && !isMobile ;
    return (
      <>
      {loading ? (<RedrumProLoader/>) : user === null ? null : (
        <>
            <Navbar style={styles.navbar} className={`${isFixed ? 'navbar shadow' : 'navbarhidden'}`}>
                <Nav activeKey={0} >
                    {NAVS.map((nav: any) => (
                      <>
                      {
                        nav.to !== '' ? (
                          <SecondaryNavbarItem
                            en={en}
                            isActive={location.pathname == nav.to}
                            key={nav.index}
                            icon={nav.icon}
                            txt={nav.txt}
                            to={nav.to}
                            fixed={isFixed}
                          />
                        ) : (
                            <SecondaryNavbarItem
                            en={en}
                            isActive={location.pathname == nav.to}
                            key={nav.index}
                            icon={nav.icon}
                            txt={nav.txt}
                            to={''}
                            fixed={isFixed}
                          />
                        )
                      }
                      </>

                    ))}
                </Nav>
                {
                  isSmall || smallBig? null : (

                <Nav pullRight style={{ minWidth: isMobile ? 'auto' : 250, }}>
                      <Button
                      title={project.currentlyInvested >= project.goal ? en ? 'Investment capacity reached for project' :
                      'Investitionskapazität für das Projekt erreicht': ''}
                     disabled={project.currentlyInvested >= project.goal}
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
                </Nav>)}
            </Navbar>

            <Navbar style={styles.navBarHideable} className='navbar relativenavbar' >
                <Nav activeKey={0} >
                    {NAVS.map((nav: any) => (
                        <SecondaryNavbarItem
                            en={en}
                            isActive={location.pathname == nav.to}
                            key={nav.index}
                            icon={nav.icon}
                            txt={nav.txt}
                            to={nav.to}
                            fixed={isFixed}
                        />
                    ))}

                </Nav>
                {isSmall || smallBig? null : (
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
                )}
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
