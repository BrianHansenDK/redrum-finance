import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, FlexboxGrid, Grid, Header, Row } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import AppNavBar from '../../components/AppNavBar'
import { PROJECTS } from '../dashboard/components/util'

const ProjectDetailsPage = () => {
    const { bundleId } = useParams()
    const project = PROJECTS[Number(bundleId)]
    return (
        <Container>
            <AppNavBar />
            <Grid className='pt-5'>
                <Row>
                    <Col xs={24} sm={24} md={16} >
                        <FlexboxGrid>
                            <FlexboxGridItem colspan={6}>
                                <img src={project.backgroundImg} alt={project.title} width={100} height={100} />
                            </FlexboxGridItem>
                            <FlexboxGridItem colspan={18}>
                                <h1>{project.title}</h1>
                            </FlexboxGridItem>
                        </FlexboxGrid>
                    </Col>
                </Row>
            </Grid>
        </Container>
    )
}

export default ProjectDetailsPage