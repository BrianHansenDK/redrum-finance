import React from 'react'
import { Col, Grid, Nav, Row } from 'rsuite'

const MainFooter = () => {
    return (
        <Grid>
            <Row>
                <Col lg={12}>
                    <h2>
                        Redrum media invest
                    </h2>
                </Col>
                <Col lg={6} >
                    <h3>Company</h3>
                    <Nav vertical >
                        <Nav.Item eventKey="home" >
                            Home
                        </Nav.Item>
                        <Nav.Item eventKey="news">About us</Nav.Item>
                        <Nav.Item eventKey="solutions">Why movies?</Nav.Item>
                    </Nav>
                </Col>
                <Col lg={6} >
                    <h3>
                        App
                    </h3>
                    <Nav vertical>
                        <Nav.Item eventKey="home" >
                            Home
                        </Nav.Item>
                        <Nav.Item eventKey="news">How it works</Nav.Item>
                        <Nav.Item eventKey="solutions">Sign up</Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Grid>
    )
}

export default MainFooter