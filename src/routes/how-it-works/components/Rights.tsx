import React from 'react'
import { hIWStrings } from '../../../library/string/Landinspage'
import TextTheme from '../../../library/themes/TextTheme'
import { useMediaQuery } from '../../../misc/custom-hooks'

const HIWRights = ({en} : {en: boolean}) => {
  const isDesktop = useMediaQuery('(min-width: 1600px)')
  const styles = {
    list: {
      maxWidth: isDesktop ? 1600 : 1200,
      paddingRight: 20,
      margin: 'auto',
    },
    listItem: {
      display: 'flex',
      fontFamily: TextTheme.hiwPara.fontFamily,
      fontSize: isDesktop ? TextTheme.bigHiwPara.fontSize : TextTheme.hiwPara.fontSize,
      fontWeight: TextTheme.hiwPara.fontWeight,
      color: TextTheme.hiwPara.color,
      lineHeight: TextTheme.hiwPara.lineHeight,
      opacity: TextTheme.hiwPara.opacity,
    }
  }
  return (
    <div className='d-flex flex-column align-items-center mb-5 user-rights'>
      <h2 style={isDesktop ? TextTheme.bigSecondaryTitle : TextTheme.mainPara} className='mb-2 sub-title'>
        {en ? hIWStrings.rightsEN.t : hIWStrings.rightsDE.t}
      </h2>
      <ul style={styles.list}>
        <li className='des mb-1 make-justified'>
          <p style={styles.listItem}>
            {en ? hIWStrings.rightsEN.l1 : hIWStrings.rightsDE.l1}
          </p>
        </li>
        <li className='des mb-1 make-justified'>
          <p style={styles.listItem}>
            {en ? hIWStrings.rightsEN.l2 : hIWStrings.rightsDE.l2}
          </p>
        </li>
        <li className='des mb-1 make-justified'>
          <p style={styles.listItem}>
            {en ? hIWStrings.rightsEN.l3 : hIWStrings.rightsDE.l3}
          </p>
        </li>
      </ul>
    </div>
  )
}

export default HIWRights
