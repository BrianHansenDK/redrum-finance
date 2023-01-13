import React from 'react'
import { Col } from 'rsuite'
import BundleIntro from './BundleIntro'

const LeftSide = ({ project }: { project: any }) => {
    return (
        <Col xs={24} sm={24} md={14} className='pr-2 pt-5'>
            <BundleIntro project={project} />
            <img src={project.backgroundImg} alt={`The ${project.title} video`} style={styles.bigImg} />
        </Col>
    )
}

const styles = {
    bigImg: {
        width: 100 + '%',
        height: 'auto',
        marginTop: 3 + 'rem',
    }
}

export default LeftSide