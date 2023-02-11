import React from 'react'
import TextTheme from '../../../library/themes/TextTheme'

const InvExampleP1Item = ({title, number} : {title:string, number:string}) => {
  return (
    <div className='d-flex align-items-center'>
      <p style={styles.title}>
        {title}
      </p>
      <p style={TextTheme.mainPara} className='m-0 ml-3'>
        {number}
      </p>
    </div>
  )
}

const styles = {
  title: TextTheme.mainPara && {
    fontFamily: TextTheme.mainPara.fontFamily,
    fontSize: TextTheme.mainPara.fontSize,
    fontWeight: TextTheme.mainPara.fontWeight,
    color: TextTheme.mainPara.color,
    lineHeight: TextTheme.mainPara.lineHeight,
    opacity: TextTheme.mainPara.opacity,
    width: 170,
  },
}

export default InvExampleP1Item
