import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, FlexboxGrid, Grid, Header, Row } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import AppNavBar from '../../components/AppNavBar'
import { PROJECTS } from '../dashboard/components/util'
import LeftSide from './components/left/LeftSide'
import RightSide from './components/right/RightSide'

const ProjectDetailsPage = () => {
    const { bundleId } = useParams()
    const project = PROJECTS[Number(bundleId)]
    return (
        <Container style={styles.page}>
            <AppNavBar />
            <Grid style={styles.wrapper} fluid>
                <Row style={styles.wrapperInner}>
                    <LeftSide project={project} />
                    <RightSide project={project} />
                </Row>
            </Grid>
        </Container>
    )
}

const styles = {
    page: {
        backgroundColor: '#efefef',
    },
    wrapper: {
        paddingLeft: 8 + 'rem',
        paddingRight: 8 + 'rem',
        paddingBottom: 5 + 'rem',
    },
    wrapperInner: {
        display: 'flex',
        justifyContent: 'space-between',
    }

}

export default ProjectDetailsPage