import React from 'react'
import { List } from 'rsuite'
import MainBtn from '../../../../../components/MainBtn'
import FileIcon from '@rsuite/icons/FileDownload'
import mainShadows from '../../../../../themes/shadows'
import FilesCard from './FilesCard'
import { IProject } from '../../../../dashboard/components/util'

const FilesSection = ({ date, project }: { date: Date, project: IProject }) => {
    return (
        <div style={styles.filesWrap}>
            <h2 style={styles.title}>Project files</h2>
            <FilesCard project={project} date={date} />
        </div>
    )
}

const styles = {
    filesWrap: {
        marginTop: 50,
        width: 80 + '%',
    },
    title: {
        marginBottom: 15,
    }

}

export default FilesSection