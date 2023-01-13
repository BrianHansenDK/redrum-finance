import React from 'react'
import { Col } from 'rsuite'
import Rank from './Rank'
import InfoLines from './InfoLines'
import InfoTag from './InfoTag'
import ProgressItem from './ProgressItem'

const RightSide = ({ project }: { project: any }) => {

    return (
        <Col xs={24} sm={24} md={7}
            style={styles.wrapper} className='flex-column'
        >
            <div style={styles.card} className='flex-column'>
                <InfoTag project={project} />
                <InfoLines project={project} />
            </div>
            <ProgressItem project={project} />
            <Rank />
        </Col>
    )
}

const styles = {
    wrapper: {
        height: 100 + '%',
        display: 'flex',
        alignItems: 'center',
    },
    card: {
        height: 100 + '%',
        width: 100 + '%',
        backgroundColor: '#fbfbfb',
        paddingTop: 6.2 + 'rem',
        display: 'flex',
        alignItems: 'center',
        paddingRight: 2 + 'rem',
        paddingLeft: 2 + 'rem',
        paddingBottom: 2 + '%',
        boxFit: 'border-box',
        borderRadius: 15,
        boxShadow: ' 0 5px 10px 0 rgba(0,0,29, .15)',
    }
}

export default RightSide