import React from 'react'
import { hIWStrings } from '../../../../library/string/Landinspage'
import TextTheme from '../../../../library/themes/TextTheme'
import PLACEHOLDER from '../../../../assets/react.svg'
import { Message } from 'rsuite'
import { mainColors } from '../../../inside-app/themes/colors'

const P2CardBottom = ({en} : {en: boolean}) => {
  return (
    <>
    <div className='d-flex align-items-center justify-content-center mb-1'>
      <Message closable type="info" header="Minimum return">
        The 7% works as a minimum return. More information will be given below.
      </Message>
    </div>
    <p style={TextTheme.hiwPara} className='text-center mt-3 mb-5'>
        {en ? hIWStrings.phase2EN.after : hIWStrings.phase2DE.after}
    </p>
      <div className='d-flex align-items-center justify-content-center mb-1'>
          <img src={PLACEHOLDER} alt="Placeholder" width={250} height={225} />
      </div>
      <p style={TextTheme.hiwPara} className='text-center'>
        {en ? hIWStrings.phase2EN.c1 : hIWStrings.phase2DE.c1}
      </p>
      <p style={TextTheme.hiwPara} className='text-center mt-3 mb-3'>
        {en ? hIWStrings.phase2EN.or : hIWStrings.phase2DE.or}
      </p>
      <div className='d-flex align-items-center justify-content-center mb-1'>
        <img src={PLACEHOLDER} alt="Placeholder" width={250} height={225} />
      </div>
      <p style={TextTheme.hiwPara} className='text-center mb-3'>
        {en ? hIWStrings.phase2EN.c2 : hIWStrings.phase2DE.c2}
      </p>
      <p style={TextTheme.hiwPara} className='text-center'>
        {en ? hIWStrings.phase2EN.end : hIWStrings.phase2DE.end}
      </p>
    </>
  )
}

export default P2CardBottom
