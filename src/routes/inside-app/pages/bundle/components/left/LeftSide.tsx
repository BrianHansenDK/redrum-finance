import React from 'react'
import { Col } from 'rsuite'
import BundleIntro from './BundleIntro'

const LeftSide = ({ project }: { project: any }) => {
    return (
        <Col xs={24} sm={24} md={15} className='pr-1 pt-3'>
            <BundleIntro project={project} />
            <img src={project.backgroundImg} className='sq-shadow' alt={`The ${project.title} video`} style={styles.bigImg} />
        </Col>
    )
}

const styles = {
    bigImg: {
        width: 100 + '%',
        height: 'auto',
        maxHeight: 400,
        marginTop: 2 + 'rem',
    }
}

export default LeftSide