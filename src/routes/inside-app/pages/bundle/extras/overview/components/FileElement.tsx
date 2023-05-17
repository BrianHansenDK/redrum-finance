import React from 'react'
import { Button, List } from 'rsuite'
import MainBtn from '../../../../../components/MainBtn'
import FileIcon from '@rsuite/icons/FileDownload'
import { IFile } from '../../../../dashboard/components/util'
import { useMediaQuery } from '../../../../../../../misc/custom-hooks'
import ArrowDown from '@rsuite/icons/ArrowDownLine'

interface IProps {file: {name: string, url: string}, en: boolean}

const FileElement = (props: IProps) => {
  const {file, en} = props;
  const isSmall = useMediaQuery('(max-width: 669px)');
  const isMini = useMediaQuery('(max-width: 400px)');

  const styles = {
    fileWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 22.5,
        fontWeight: '700',
    },
    fileTitle: {
      fontSize: isMini ? 'small' : isSmall ? 'medium' : 'x-large'
    },
    btn: {
      fontSize: isSmall ? 'small' : ''
    },
    btnRound: {
      fontSize: isSmall ? 'small' : '',
      padding: 10,
      borderRadius: '50%',
      width: 40, height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }

    return (
        <List.Item style={styles.fileWrap}>
            <div style={styles.fileTitle}>
                <FileIcon /> {file.name}
            </div>
            <div>
                <Button
                appearance='primary'
                style={isMini ? styles.btnRound : styles.btn}
                as='a' download={file.name}
                href={file.url}
                target='_blank'
                size={isSmall ? 'sm' : 'md'}
                className={`r-btn r-main-btn`}>
                  {isMini ? (<ArrowDown/>) : en ? 'Download' : 'Herunterladen'}
                </Button>
            </div>
        </List.Item>
    )
}


export default FileElement
