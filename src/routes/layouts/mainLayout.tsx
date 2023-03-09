import React from 'react'
import { Container, Content, Footer, Header } from 'rsuite'
import MainFooter from '../../components/footer'
import Footer02 from '../../components/footer/Footer02'
import MainNavbar from '../../components/navbar'

interface IProps {
  children: any, openModal: any, closeModal: Function, isVisible: any, dark: boolean, en: boolean, setEn: any
}

const MainLayout: React.FunctionComponent<IProps> = (props) => {
  const { children, openModal, closeModal, isVisible, dark, en, setEn } = props
    return (
        <Container>
            <Header>
                <MainNavbar en={en} setEn={setEn} openModal={openModal} closeModal={closeModal} isVisible={isVisible} dark={dark} />
            </Header>
            <Content>
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
