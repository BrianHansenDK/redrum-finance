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
            <ProgressItem project={project} />
            <div style={styles.card} className='flex-column'>
                <InfoTag project={project} />
                <InfoLines project={project} />
            </div>
        </Col>
    )
}

const styles = {
    wrapper: {
        height: 100 + '%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 8 + 'rem',
    },
    card: {
        height: 100 + '%',
        width: 100 + '%',
        backgroundColor: '#fbfbfb',
        marginTop: 1.5 + 'rem',
        paddingTop: 2 + 'rem',
        display: 'flex',
        alignItems: 'center',
        paddingRight: 1 + 'rem',
        paddingLeft: 1 + 'rem',
        paddingBottom: 2 + 'rem',
        boxFit: 'border-box',
        borderRadius: 15,
        boxShadow: ' 0 5px 10px 0 rgba(0,0,29, .15)',
    }
}

export default RightSide