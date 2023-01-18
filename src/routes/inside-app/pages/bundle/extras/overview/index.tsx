import React from 'react'
import { useParams } from 'react-router-dom'
import { List } from 'rsuite'
import { mainColors } from '../../../../themes/colors'
import mainShadows from '../../../../themes/shadows'
import { PROJECTS } from '../../../dashboard/components/util'
import PresentationCard from './components/PresentationCard'
import FileIcon from '@rsuite/icons/FileDownload'
import MainBtn from '../../../../components/MainBtn'
import FilesSection from './components/FilesSection'

const BundleOverview = () => {
    const { bundleId } = useParams()
    const project = PROJECTS[Number(bundleId)]
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    return (
        <div style={styles.wrapper} className='flex-column'>
            <PresentationCard project={project} />
            <FilesSection project={project} date={today} />
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