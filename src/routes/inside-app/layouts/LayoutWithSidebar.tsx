import React from 'react';
import { useMediaQuery } from '../../../misc/custom-hooks';
import AppNavBar from '../components/AppNavBar';
import DashboardDrawer from '../components/DashboardDrawer';
import SideBar from '../components/SideBar';

export interface ILayoutWithSidebarProps { children: any, en: boolean, setEn: any }

const LayoutWithSidebar: React.FunctionComponent<ILayoutWithSidebarProps> = (props) => {
    const { children, en, setEn } = props
    const isMobile = useMediaQuery('(max-width: 1100px)')
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
            paddingLeft: isMobile ? 20 : 300,
            paddingRight: isMobile ? 20 : 300,
        },
    }

    return (
        <>
            <AppNavBar
            fixed
            en={en} setEn={setEn}
            openMenu={openMenu}
            navOpen={navOpen} openNav={openNav} closeNav={closeNav} />
            <div className='d-flex'>
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

                <div className='' style={styles.innerPage}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default LayoutWithSidebar
