import React from 'react'
import { Container, Content, Header } from 'rsuite'
import Footer02 from '../../components/footer/Footer02'
import MainNavbar from '../../components/navbar'
import { auth } from '../../firebase'
import AppNavBar from '../inside-app/components/AppNavBar'
import { useMediaQuery } from '../../misc/custom-hooks'

interface IProps {
  children: any, openModal: any, closeModal: Function, isVisible: any, dark: boolean, en: boolean, setEn: any
}

const MainLayout: React.FunctionComponent<IProps> = (props) => {
  const { children, openModal, closeModal, isVisible, dark, en, setEn } = props
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
    const [navOpen, setNavOpen] = React.useState<boolean>(false)
    const isDesktop = useMediaQuery('(min-width: 1600px)')
    const openMenu = () => setMenuOpen(true)
    const openNav = () => setNavOpen(true)
    const closeNav = () => setNavOpen(false)
    return (
        <Container>
            <Header>
              {
                auth.currentUser?.uid ? (
                  <AppNavBar
                  fixed
                  en={en}
                  setEn={setEn}
                  openMenu={openMenu}
                  navOpen={navOpen}
                  openNav={openNav}
                  closeNav={closeNav}/>
                ) : (
                  <MainNavbar en={en} setEn={setEn} openModal={openModal} closeModal={closeModal} isVisible={isVisible} dark={dark} />
                )
              }
            </Header>
            <Content style={{width: '100%',minHeight: '100vh', maxWidth: isDesktop ? 1600 : '100%',
            margin: 'auto', boxShadow: isDesktop ? '0 0 10px 4px rgba(70,70,70, .2)' : 'none'}}>
                {children}
            </Content>
            <Footer02 en={en}/>
            {/*

            <Footer style={styles.footer} className='dark-bg txt-white pd-page'>
                <MainFooter en={en} />
            </Footer>
            */}
        </Container>
    )
}

const styles = {
  footer: {
    zIndex: 5,
  }
}

export default MainLayout
