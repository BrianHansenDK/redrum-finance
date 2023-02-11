import React from 'react'
import PLACEHOLDER from '../../../../assets/react.svg'
import { hIWStrings } from '../../../../library/string/Landinspage'
import BoxThemes from '../../../../library/themes/BoxThemes'
import TextTheme from '../../../../library/themes/TextTheme'
import P2CardBottom from './P2CardBottom'
import P2CardTop from './P2CardTop'

const Phase2Card = ({en} : {en: boolean}) => {
  return (
    <div style={BoxThemes.card}>
      <div className='d-flex align-items-center justify-content-center mb-1'>
        <img src={PLACEHOLDER} alt="Placeholder" width={250} height={225} />
      </div>
      <P2CardTop en={en} />
      <P2CardBottom en={en} />
    </div>
  )
}

export default Phase2Card
