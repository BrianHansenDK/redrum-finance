import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Grid, Nav, Row } from 'rsuite'
import { navbarStrings } from '../library/string/Landinspage';
import { useMediaQuery } from '../misc/custom-hooks';

const MainFooter = ({en}: {en: boolean}) => {

  const isMobile = useMediaQuery('(max-width: 1100px)')
  const isDesktop = useMediaQuery('(min-width: 1600px)')
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
                <Col lg={12} md={24} sm={24} xs={24}>
                    <h2 className={`${'text-start mb-2'}`}>
                        Redrum Pro
                    </h2>
                </Col>
                <Col lg={6}  md={24} sm={24} xs={24}>
                    <h3 className={`${'text-start'}`}
                    style={{fontSize: isDesktop ? 32: 28}}
                    >Company</h3>
                    <Nav vertical >
                        {MAINLINKS.map(l => (
                            <Nav.Item
                            eventKey={l.t}
                            as={Link}
                            to={l.to}
                            key={l.t}
                            style={{fontSize: isDesktop ? 28 : 20}}
                            >
                                {l.t}
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col lg={6}  md={24} sm={24} xs={24}>
                    <h3 className={`${isMobile ? 'mt-2' : ''} text-start`}
                    style={{fontSize: isDesktop ? 32: 28}}
                    >
                        App
                    </h3>
                    <Nav vertical>
                        {APPLINKS.map(l => (
                            <Nav.Item
                            eventKey={l.t}
                            key={l.t}
                            style={{fontSize: isDesktop ? 28 : 20}}
                            >
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
