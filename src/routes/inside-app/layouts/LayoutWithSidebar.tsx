import React from 'react';
import Footer02 from '../../../components/footer/Footer02';
import { useMediaQuery } from '../../../misc/custom-hooks';
import AppNavBar from '../components/AppNavBar';
import DashboardDrawer from '../components/DashboardDrawer';
import SideBar from '../components/SideBar';

export interface ILayoutWithSidebarProps { children: any, en: boolean, setEn: any }

const LayoutWithSidebar: React.FunctionComponent<ILayoutWithSidebarProps> = (props) => {
    const { children, en, setEn } = props
    const isMobile = useMediaQuery('(max-width: 1100px)')
    const labtop = useMediaQuery('(max-width: 1400px)')
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
    const [navOpen, setNavOpen] = React.useState(false)
    const openMenu = () => setMenuOpen(true)
    const closeMenu = () => setMenuOpen(false)
    const openNav = () => setNavOpen(true)
    const closeNav = () => setNavOpen(false)

    const styles = {
        innerPage: {
            flex: 1,
            paddingTop: 125,
            display: 'flex',
            alignItems: 'center',

            paddingLeft: isMobile ? 20 : '20%',
            paddingRight: isMobile? 20 : 0,
            /*
            paddingLeft: isMobile ? 20 : 300,
            paddingRight: isMobile ? 20 : labtop ? 0 : 300,*/
        },
    }

    return (
        <>
            <AppNavBar
            fixed
            en={en} setEn={setEn}
            openMenu={openMenu}
            navOpen={navOpen} openNav={openNav} closeNav={closeNav} />
            <div className='d-flex inner-dashboard'>
              {
                isMobile ? (
                  <DashboardDrawer
                  en={en}
                  isOpen={menuOpen}
                  closeMenu={closeMenu}
                  />
                ) : (
                  <SideBar en={en} />
                )
              }
                <div className='flex-column' style={styles.innerPage}>
                    {children}
                </div>
            </div>
            <Footer02 en={en}/>
        </>
    )
}

export default LayoutWithSidebar
