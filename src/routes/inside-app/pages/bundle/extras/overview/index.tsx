import React from 'react'
import { useParams } from 'react-router-dom'
import { mainColors } from '../../../../themes/colors'
import mainShadows from '../../../../themes/shadows'
import { PROJECTS } from '../../../dashboard/components/util'
import PresentationCard from './components/PresentationCard'

const BundleOverview = () => {
    const { bundleId } = useParams()
    const project = PROJECTS[Number(bundleId)]
    return (
        <div style={styles.wrapper} className='flex-column'>
            <PresentationCard project={project} />
        </div>
    )
}

const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default BundleOverview