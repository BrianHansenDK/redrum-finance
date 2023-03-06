import React from 'react'
import { List } from 'rsuite'
import MainBtn from '../../../../../components/MainBtn'
import FileIcon from '@rsuite/icons/FileDownload'
import mainShadows from '../../../../../themes/shadows'
import FilesCard from './FilesCard'
import { IProject } from '../../../../dashboard/components/util'
import { mainColors } from '../../../../../themes/colors'
import bundleStrings from '../../../../../../../library/string/Bundle'
import { useMediaQuery } from '../../../../../../../misc/custom-hooks'

const FilesSection = ({ date, en }: { date: Date, en: boolean }) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const styles = {
    filesWrap: {
        marginTop: 50,
        width: isMobile ? '90%' : 80 + '%',
        marginBottom: 75,
    },
    title: {
        marginBottom: 30,
        color: mainColors.dark,
        fontSize: isMobile ? 25 : 35
    }

}
    return (
        <div style={styles.filesWrap}>
            <h2 style={styles.title}>{en ? bundleStrings.overviewDocsEN : bundleStrings.overviewDocsDE}</h2>
            <FilesCard date={date} />
        </div>
    )
}

export default FilesSection
