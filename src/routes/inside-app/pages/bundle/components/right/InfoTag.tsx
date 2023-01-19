import React from 'react'
import { Tag } from 'rsuite'
import InfoIcon from '@rsuite/icons/legacy/InfoCircle'

const InfoTag = () => {
    return (
        <div style={styles.wrapper} className='d-flex flex-column align-center'>
            <Tag color='blue'>
                <InfoIcon /> Click here to learn how to read given information
            </Tag>
        </div>
    )
}

const styles = {
    wrapper: {
        width: 100 + '%',
        marginBottom: 25,
    }
}

export default InfoTag