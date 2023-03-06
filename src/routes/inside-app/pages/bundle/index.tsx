import { onValue, ref } from 'firebase/database'
import React, { useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Col, Container, FlexboxGrid, Footer, Grid, Header, Row } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import MainFooter from '../../../../components/footer'
import { database } from '../../../../firebase'
import AppNavBar from '../../components/AppNavBar'
import { PROJECTS } from '../dashboard/components/util'
import LeftSide from './components/left/LeftSide'
import RightSide from './components/right/RightSide'
import SecondaryNavbar from './components/SecondaryNavbar'

interface IProps {
    params: any,
    en: boolean,
    setEn: any,
    isMobile: boolean,
    navOpen: boolean,
    menuOpen: boolean,
    openMenu: any,
    openNav: any,
    closeMenu: any,
    closeNav: any,
}

interface IState {
    projectData: any[]
    topFixed: boolean,
    bottomFixed: boolean,
}

class ProjectDetailsPage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            projectData: [],
            topFixed: true,
            bottomFixed: false,
        }
    }

    componentDidMount(): void {
        const reference = ref(database, 'projects/')
        onValue(reference, (snap) => {
            let data: any[] = []
            snap.forEach((project) => {
                data.push(project.val())
            })
            this.setState((_previousState) => ({
                projectData: data
            }))
        })

        window.addEventListener('scroll', () => {
            if (window.scrollY <= 600 && !this.props.isMobile) {
                this.setState((_previousState) => ({
                    topFixed: true
                }))
            }
            else if (window.scrollY <= 1000 && this.props.isMobile) {
              this.setState((_previousState) => ({
                topFixed: true
            }))
            }
            else {
                this.setState((_previousState) => ({
                    topFixed: false
                }))
            }
        })

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 675 && !this.props.isMobile) {
                this.setState((_previousState) => ({
                    bottomFixed: true
                }))
            }
            else if (window.scrollY >= 1000 && this.props.isMobile) {
              this.setState((_previousState) => ({
                bottomFixed: true
            }))
            }
            else {
                this.setState((_previousState) => ({
                    bottomFixed: false
                }))
            }
        })
    }


    render() {
        const { bundleId } = this.props.params
        const isMobile = this.props.isMobile

        const styles = {
          page: {
              backgroundColor: '#efefef',
          },
          wrapper: {
              width: 100 + '%',
              paddingLeft: isMobile ? 20 : 5 + 'rem',
              paddingRight: isMobile ? 20 : 5 + 'rem',
              paddingBottom: 5 + 'rem',
          },
          wrapperInner: {
              display: 'flex',
              justifyContent: 'space-between',
          },
          extrasWrap: {
              paddingTop: 5 + 'rem',
              paddingBottom: 5 + 'rem',
              paddingLeft: isMobile ? 20 : 1.5 + 'rem',
              paddingRight: isMobile ? 20 : 1.5 + 'rem',
          }

      }
        return (
            <>
                {this.state.projectData.map((project) => project.id == bundleId ? (
                    <Container style={styles.page} key={project.id}>
                        <AppNavBar fixed={this.state.topFixed}
                        en={this.props.en}
                        setEn={this.props.setEn}
                        openMenu={this.props.openMenu}
                        navOpen={this.props.navOpen}
                        openNav={this.props.openNav}
                        closeNav={this.props.closeNav}
                         />
                        <Grid style={styles.wrapper} fluid>
                            <Row style={styles.wrapperInner} as={FlexboxGrid}>
                                <LeftSide project={project} isMobile={isMobile} />
                                <RightSide
                                project={project}
                                en={this.props.en}
                                setEn={this.props.setEn}
                                isMobile={this.props.isMobile} />
                            </Row>
                        </Grid>
                        <SecondaryNavbar
                        project={project}
                        isFixed={this.state.bottomFixed}
                        en={this.props.en}
                        isMobile={this.props.isMobile}
                        />
                        <div style={styles.extrasWrap}>
                            <Outlet />
                        </div>
                        <Footer className='dark-bg txt-white pd-page'>
                            <MainFooter en={this.props.en} />
                        </Footer>
                    </Container>
                ) : null)}
            </>
        )
    }
}



export default ProjectDetailsPage
