import React from 'react'
import TextTheme from '../../../library/themes/TextTheme'

const InvExampleP1Item = ({title, number, isDesktop} : {title:string, number:string, isDesktop: boolean}) => {
  const styles = {
    title: TextTheme.mainPara && {
      fontFamily: TextTheme.mainPara.fontFamily,
      fontSize: isDesktop ? TextTheme.bigMainPara.fontSize : TextTheme.mainPara.fontSize,
      fontWeight: TextTheme.mainPara.fontWeight,
      color: TextTheme.mainPara.color,
      lineHeight: TextTheme.mainPara.lineHeight,
      opacity: TextTheme.mainPara.opacity,
      width: isDesktop ? '80%' : 170,
    },
  }
  return (
    <div className='d-flex align-items-center'>
      <p style={styles.title}>
        {title}
      </p>
      <p style={isDesktop ? TextTheme.bigMainPara : TextTheme.mainPara} className='m-0 ml-3'>
        {number}
      </p>
    </div>
  )
}

export default InvExampleP1Item
