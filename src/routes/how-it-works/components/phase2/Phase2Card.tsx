import React from 'react'
import Congrats from '../../../../assets/congrats-image.svg'
import { hIWStrings } from '../../../../library/string/Landinspage'
import BoxThemes from '../../../../library/themes/BoxThemes'
import TextTheme from '../../../../library/themes/TextTheme'
import mainShadows from '../../../inside-app/themes/shadows'
import P2CardBottom from './P2CardBottom'
import P2CardTop from './P2CardTop'

const Phase2Card = ({en, isDesktop} : {en: boolean, isDesktop: boolean}) => {
  const styles = {
    card: {
      maxWidth: isDesktop ? 1200 : BoxThemes.card.maxWidth,
      borderRadius: BoxThemes.card.borderRadius,
      boxShadow: BoxThemes.card.boxShadow,
      padding: BoxThemes.card.padding,
      margin: BoxThemes.card.margin,
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: 10,
      boxShadow: mainShadows.card,
    }
  }
  return (
    <div style={styles.card}>
      <div className='d-flex align-items-center justify-content-center mb-1'>
        <img src={Congrats}
        alt="Congartulation message page, after investment with a button which redirects you to the dashboard."
        style={styles.image} />
      </div>
      <P2CardTop en={en} isDesktop={isDesktop} />
      <P2CardBottom en={en} isDesktop={isDesktop} />
    </div>
  )
}



export default Phase2Card
