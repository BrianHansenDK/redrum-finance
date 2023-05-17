import React from 'react'
import { List } from 'rsuite'
import MainBtn from '../../../../../components/MainBtn'
import mainShadows from '../../../../../themes/shadows'
import FileIcon from '@rsuite/icons/FileDownload'
import { IFile, IProject } from '../../../../dashboard/components/util'
import FileElement from './FileElement'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { mainColors } from '../../../../../themes/colors'
import { useMediaQuery } from '../../../../../../../misc/custom-hooks'

interface IProps {project: FirebaseBundle, en: boolean}

const FilesCard = (props: IProps) => {
  const {project, en} = props;
  const files = project.files;
  const isMobile = useMediaQuery('(max-width: 1100px)');


  const styles = {
    filesCard: {
        width: isMobile ? '100%' : 80 + '%',
        boxShadow: mainShadows.card,
    },
    title: {
      fontSize: 'xx-large',
      color: mainColors.dark,
      lineHeight: 1,
      marginBottom: 25,
      marginTop: 75,
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

    return (
      <>
        <h2 style={styles.title}>
          {en ? 'Documents' : 'Dokumente'}
        </h2>
        <List bordered hover style={styles.filesCard} >
            {files !== undefined && files !== null && files.length > 0 ? (
              <>
                {files.map((file) => (
                    <FileElement en={en} file={file} key={file.name} />
                ))}
              </>
            ) : (
              <p style={{fontSize: 'x-large', padding: 15, backgroundColor: '#fefefe'}}>
                {en ? 'No files are attached to this project at the moment.' :
                'Zu diesem Projekt sind derzeit keine Dateien angehängt.'}
              </p>
            )

            }
        </List>
      </>
    )
}

export default FilesCard
