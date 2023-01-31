import React from 'react'
import { Container, Content, Footer, Header } from 'rsuite'
import MainFooter from '../../components/footer'
import MainNavbar from '../../components/navbar'

const MainLayout = ({ children, openModal, closeModal, isVisible, dark }: { children: any, openModal: any, closeModal: Function, isVisible: any, dark: boolean }) => {
    return (
        <Container>
            <Header>
                <MainNavbar openModal={openModal} closeModal={closeModal} isVisible={isVisible} dark={dark} />
            </Header>
            <Content>
                {children}
            </Content>
            <Footer className='dark-bg txt-white pd-page'>
                <MainFooter />
            </Footer>
        </Container>
    )
}

export default MainLayout
