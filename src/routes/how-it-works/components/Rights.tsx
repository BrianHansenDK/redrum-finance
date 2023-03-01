import React from 'react'
import { hIWStrings } from '../../../library/string/Landinspage'
import TextTheme from '../../../library/themes/TextTheme'

const HIWRights = ({en} : {en: boolean}) => {
  return (
    <div className='d-flex flex-column align-items-center mb-5'>
      <h2 style={TextTheme.mainPara} className='mb-2 sub-title'>
        {en ? hIWStrings.rightsEN.t : hIWStrings.rightsDE.t}
      </h2>
      <ul style={styles.list}>
        <li style={TextTheme.hiwPara} className='des mb-1'>
        {en ? hIWStrings.rightsEN.l1 : hIWStrings.rightsDE.l1}
        </li>
        <li style={TextTheme.hiwPara} className='des mb-1'>
        {en ? hIWStrings.rightsEN.l2 : hIWStrings.rightsDE.l2}
        </li>
        <li style={TextTheme.hiwPara} className='des mb-1'>
        {en ? hIWStrings.rightsEN.l3 : hIWStrings.rightsDE.l3}
        </li>
      </ul>
    </div>
  )
}

const styles = {
  list: {
    maxWidth: 800,
    paddingRight: 20,
  }
}

export default HIWRights
