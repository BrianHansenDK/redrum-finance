import React, { useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Col, Container, FlexboxGrid, Grid, Header, Row } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import AppNavBar from '../../components/AppNavBar'
import { PROJECTS } from '../dashboard/components/util'
import LeftSide from './components/left/LeftSide'
import RightSide from './components/right/RightSide'
import SecondaryNavbar from './components/SecondaryNavbar'

const ProjectDetailsPage = () => {
    const { bundleId } = useParams()
    const project = PROJECTS[Number(bundleId)]

    const [topFixed, setTopFixed] = useState(true)
    const [bottomFixed, setBottomFixed] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY <= 600) {
            setTopFixed(true)
        } else {
            setTopFixed(false)
        }
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 675) {
            setBottomFixed(true)
        } else {
            setBottomFixed(false)
        }
    })

    return (
        <Container style={styles.page}>
            <AppNavBar fixed={topFixed} />
            <Grid style={styles.wrapper} fluid>
                <Row style={styles.wrapperInner}>
                    <LeftSide project={project} />
                    <RightSide project={project} />
                </Row>
            </Grid>
            <SecondaryNavbar id={project.index} isFixed={bottomFixed} />
            <div style={styles.extrasWrap}>
                <Outlet />
            </div>
        </Container>
    )
}

const styles = {
    page: {
        backgroundColor: '#efefef',
        paddingBottom: 750,
    },
    wrapper: {
        paddingLeft: 5 + 'rem',
        paddingRight: 5 + 'rem',
        paddingBottom: 5 + 'rem',
    },
    wrapperInner: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    extrasWrap: {
        paddingTop: 5 + 'rem',
        paddingBottom: 5 + 'rem',
        paddingLeft: 1.5 + 'rem',
        paddingRight: 1.5 + 'rem',
    }

}

export default ProjectDetailsPage