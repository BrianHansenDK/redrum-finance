import React from 'react'
import { Col } from 'rsuite'
import InfoLines from './InfoLines'
import InfoTag from './InfoTag'
import ProgressItem from './ProgressItem'

const RightSide = ({ project }: { project: any }) => {

    return (
        <Col xs={24} sm={24} md={8}
            style={styles.wrapper} className='flex-column'
        >
            <InfoTag project={project} />
            <InfoLines project={project} />
            <ProgressItem project={project} />
        </Col>
    )
}

const styles = {
    wrapper: {
        height: 100 + '%',
        backgroundColor: '#fbfbfb',
        paddingTop: 6.2 + 'rem',
        display: 'flex',
        alignItems: 'center',
    }
}

export default RightSide