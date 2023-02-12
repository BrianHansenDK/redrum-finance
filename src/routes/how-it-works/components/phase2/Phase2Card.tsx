import React from 'react'
import SharesImg from '../../../../assets/user-shares.svg'
import { hIWStrings } from '../../../../library/string/Landinspage'
import BoxThemes from '../../../../library/themes/BoxThemes'
import TextTheme from '../../../../library/themes/TextTheme'
import mainShadows from '../../../inside-app/themes/shadows'
import P2CardBottom from './P2CardBottom'
import P2CardTop from './P2CardTop'

const Phase2Card = ({en} : {en: boolean}) => {
  return (
    <div style={BoxThemes.card}>
      <div className='d-flex align-items-center justify-content-center mb-1'>
        <img src={SharesImg} alt="Overview of users shares grouped by project." style={styles.image} />
      </div>
      <P2CardTop en={en} />
      <P2CardBottom en={en} />
    </div>
  )
}

const styles = {
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    boxShadow: mainShadows.card,
  }
}

export default Phase2Card
