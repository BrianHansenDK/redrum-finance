import React from 'react'
import { List } from 'rsuite'
import MainBtn from '../../../../../components/MainBtn'
import FileIcon from '@rsuite/icons/FileDownload'
import mainShadows from '../../../../../themes/shadows'
import FilesCard from './FilesCard'
import { IProject } from '../../../../dashboard/components/util'
import { mainColors } from '../../../../../themes/colors'

const FilesSection = ({ date }: { date: Date }) => {
    return (
        <div style={styles.filesWrap}>
            <h2 style={styles.title}>Project files</h2>
            <FilesCard date={date} />
        </div>
    )
}

const styles = {
    filesWrap: {
        marginTop: 50,
        width: 80 + '%',
        marginBottom: 75,
    },
    title: {
        marginBottom: 30,
        color: mainColors.dark,
    }

}

export default FilesSection