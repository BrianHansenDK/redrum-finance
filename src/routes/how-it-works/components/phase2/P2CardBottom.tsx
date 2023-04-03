import React from 'react'
import { hIWStrings } from '../../../../library/string/Landinspage'
import TextTheme from '../../../../library/themes/TextTheme'
import PLACEHOLDER from '../../../../assets/react.svg'
import { Message } from 'rsuite'
import { mainColors } from '../../../inside-app/themes/colors'

const P2CardBottom = ({en, isDesktop} : {en: boolean, isDesktop: boolean}) => {
  return (
    <>
    <div className='d-flex align-items-center justify-content-center mb-1'>
      <Message closable type="info" header="Minimum return">
        The 7% works as a minimum return. You will see what you can do with this below.
      </Message>
    </div>
    <p style={isDesktop ? TextTheme.bigHiwPara : TextTheme.hiwPara} className='des mt-3 mb-3'>
        {en ? hIWStrings.phase2EN.after : hIWStrings.phase2DE.after}
    </p>
      <p style={isDesktop ? TextTheme.bigHiwPara : TextTheme.hiwPara} className='des'>
        {en ? hIWStrings.phase2EN.c1 : hIWStrings.phase2DE.c1}
      </p>
      <p style={isDesktop ? TextTheme.bigHiwPara : TextTheme.hiwPara} className='text-center mt-3 mb-3'>
        {en ? hIWStrings.phase2EN.or : hIWStrings.phase2DE.or}
      </p>
      <p style={isDesktop ? TextTheme.bigHiwPara : TextTheme.hiwPara} className='des mb-3'>
        {en ? hIWStrings.phase2EN.c2 : hIWStrings.phase2DE.c2}
      </p>
      <p style={isDesktop ? TextTheme.bigHiwPara : TextTheme.hiwPara} className='text-center'>
        {en ? hIWStrings.phase2EN.end : hIWStrings.phase2DE.end}
      </p>
    </>
  )
}

export default P2CardBottom
