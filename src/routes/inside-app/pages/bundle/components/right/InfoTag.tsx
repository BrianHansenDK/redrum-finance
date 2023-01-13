import React from 'react'
import { Tag } from 'rsuite'
import InfoIcon from '@rsuite/icons/legacy/InfoCircle'
import InfoTagNumbers from './InfoTagNumbers'

const InfoTag = ({ project }: { project: any }) => {
    return (
        <div style={styles.wrapper} className='d-flex flex-column align-center'>
            <Tag color='blue'>
                <InfoIcon /> Click here to learn how to read given information
            </Tag>
            <InfoTagNumbers project={project} />
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