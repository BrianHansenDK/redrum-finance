import React from 'react'
import { hIWStrings } from '../../../../library/string/Landinspage'
import TextTheme from '../../../../library/themes/TextTheme'
import PLACEHOLDER from '../../../../assets/react.svg'

const P2CardTop = ({en} : {en: boolean}) => {
  return (
    <>
    <p style={TextTheme.hiwPara} className='mb-4 mt-4 text-center'>
        {en ? hIWStrings.phase2EN.des : hIWStrings.phase2DE.des}
      </p>
      <div className='d-flex align-items-center justify-content-center mb-1'>
        <img src={PLACEHOLDER} alt="Placeholder" width={250} height={225} />
      </div>
      <p style={TextTheme.mainPara} className='text-center mt-1 mb-1'>
        {en ? hIWStrings.phase2EN.rel : hIWStrings.phase2DE.rel}
      </p>
      <p style={TextTheme.hiwPara} className='text-center mb-3'>
        {en ? hIWStrings.phase2EN.receive : hIWStrings.phase2DE.receive}
      </p>
    </>
  )
}

export default P2CardTop
