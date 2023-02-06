import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Grid, Nav, Row } from 'rsuite'
import { navbarStrings } from '../library/string/Landinspage';

const MainFooter = ({en}: {en: boolean}) => {
  const MAINLINKS = [
    {
        t:  en ? navbarStrings.navbarEN.aU : navbarStrings.navbarDE.aU,
        to: '/about-us'
    },
    {
        t: en ? navbarStrings.navbarEN.wM : navbarStrings.navbarDE.wM,
        to: '/why-movies'
    },
    {
        t: en ? navbarStrings.navbarEN.how : navbarStrings.navbarDE.how,
        to: '/how-to'
    },
];

 const APPLINKS = [
    {
        t: 'Blog',
    },
    {
        t: 'FAQ',
    },
    {
        t: en ? navbarStrings.navbarEN.sI : navbarStrings.navbarDE.sI,
        to: '/sign-in'
    }
]
    return (
        <Grid>
            <Row>
                <Col lg={12}>
                    <h2>
                        Redrum Pro
                    </h2>
                </Col>
                <Col lg={6} >
                    <h3>Company</h3>
                    <Nav vertical >
                        {MAINLINKS.map(l => (
                            <Nav.Item eventKey={l.t} as={Link} to={l.to} key={l.t}>
                                {l.t}
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col lg={6} >
                    <h3>
                        App
                    </h3>
                    <Nav vertical>
                        {APPLINKS.map(l => (
                            <Nav.Item eventKey={l.t} key={l.t}>
                                {l.t}
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
            </Row>
        </Grid>
    )
}

export default MainFooter
