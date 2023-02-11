import React from 'react'
import { hIWStrings } from '../../../library/string/Landinspage'
import TextTheme from '../../../library/themes/TextTheme'

const HIWRights = ({en} : {en: boolean}) => {
  return (
    <div className='d-flex flex-column align-items-center mb-5'>
      <h1 style={TextTheme.secondaryTitle} className='mb-2 text-center'>
        {en ? hIWStrings.rightsEN.t : hIWStrings.rightsDE.t}
      </h1>
      <ul style={styles.list}>
        <li style={TextTheme.hiwPara} className='mb-1'>
        {en ? hIWStrings.rightsEN.l1 : hIWStrings.rightsDE.l1}
        </li>
        <li style={TextTheme.hiwPara} className='mb-1'>
        {en ? hIWStrings.rightsEN.l2 : hIWStrings.rightsDE.l2}
        </li>
        <li style={TextTheme.hiwPara} className='mb-1'>
        {en ? hIWStrings.rightsEN.l3 : hIWStrings.rightsDE.l3}
        </li>
      </ul>
    </div>
  )
}

const styles = {
  list: {
    maxWidth: 800,
  }
}

export default HIWRights
