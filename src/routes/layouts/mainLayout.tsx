import React from 'react'
import { Container, Content, Footer, Header } from 'rsuite'
import MainFooter from '../../components/footer'
import MainNavbar from '../../components/navbar'

const MainLayout = ({ children }: {children:any}) => {
    return (
        <Container>
            <Header>
                <MainNavbar />
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