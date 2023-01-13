import React from 'react'
import { Col, FlexboxGrid, Tag } from 'rsuite'
import InfoTag from './InfoTag'

const RightSide = ({ project }: { project: any }) => {
    return (
        <Col xs={24} sm={24} md={9}
            style={styles.wrapper} className='flex-column'
        >
            <InfoTag project={project} />

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