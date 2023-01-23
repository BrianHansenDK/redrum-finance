import React from 'react'
import { Col } from 'rsuite'
import BundleIntro from './BundleIntro'
import PLACEHOLDER from '../../../../../../components/images/about_us_page_imgs/ab_img3.svg'

const LeftSide = ({ project }: { project: any }) => {
    return (
        <Col xs={24} sm={24} md={12} className='pr-1 pt-3'>
            <BundleIntro project={project} />
            <img src={project.banner} className='' alt={`The ${project.name} video`} style={styles.bigImg} />
        </Col>
    )
}

const styles = {
    bigImg: {
        width: 100 + '%',
        height: 400,
        marginTop: 2 + 'rem',
        borderRadius: 15,
        boxShadow: '0 5px 15px 0 rgba(0,0,29, .15)',
    }
}

export default LeftSide