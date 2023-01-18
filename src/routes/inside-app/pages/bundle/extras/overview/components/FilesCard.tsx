import React from 'react'
import { List } from 'rsuite'
import MainBtn from '../../../../../components/MainBtn'
import mainShadows from '../../../../../themes/shadows'
import FileIcon from '@rsuite/icons/FileDownload'
import { IFile, IProject } from '../../../../dashboard/components/util'
import FileElement from './FileElement'

const FilesCard = ({ date, project }: { date: Date, project: IProject }) => {
    return (
        <List bordered hover style={styles.filesCard} >
            {
                project.files.map((file) => (
                    <FileElement date={date} file={file} />
                ))
            }
        </List>
    )
}

const styles = {
    filesCard: {
        width: 100 + '%',
        boxShadow: mainShadows.card,
    },
    fileWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 22.5,
        fontWeight: '700',
    },
    fileTitle: {
        width: 30 + '%',
    },
}

export default FilesCard