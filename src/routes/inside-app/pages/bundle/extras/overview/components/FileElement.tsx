import React from 'react'
import { List } from 'rsuite'
import MainBtn from '../../../../../components/MainBtn'
import FileIcon from '@rsuite/icons/FileDownload'
import { IFile } from '../../../../dashboard/components/util'

const FileElement = ({ date, file }: { date: Date, file: IFile }) => {
    return (
        <List.Item style={styles.fileWrap}>
            <div style={styles.fileTitle}>
                <FileIcon /> {file.name}
            </div>
            <div>
                Last updated: {date.toDateString()}
            </div>
            <div>
                <MainBtn
                    content={'Download'}
                    pressed={() => null}
                    btnColor='green'
                    btnAppearance='primary'
                    btnSize='md'
                    isBlock={false} />
            </div>
        </List.Item>
    )
}
const styles = {
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

export default FileElement