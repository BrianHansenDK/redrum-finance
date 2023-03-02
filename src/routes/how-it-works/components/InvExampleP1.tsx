import React from 'react'
import { hIWStrings } from '../../../library/string/Landinspage'
import BoxThemes from '../../../library/themes/BoxThemes'
import TextTheme from '../../../library/themes/TextTheme'
import InvExampleP1Item from './InvExampleP1Item'
import InvImg from '../../../assets/invest-splittes-shares.svg'
import mainShadows from '../../inside-app/themes/shadows'

const InvExampleP1 = ({en, isDesktop} : {en: boolean, isDesktop: boolean}) => {

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
      borderRadius: 5,
      boxShadow: mainShadows.image,
      marginBottom: '2rem',
    }
  }
  return (
    <div style={styles.card} className='d-flex flex-column align-items-center'>
      <h3 style={isDesktop ? TextTheme.bigSecondaryTitle : TextTheme.secondaryTitle} className='mb-2'>
        {en ? hIWStrings.phase1EN.t : hIWStrings.phase1DE.t}
      </h3>
      <img src={InvImg} alt="A graph showing the users investment getting split into 3 segments" style={styles.image} />
      <div>
      <InvExampleP1Item isDesktop={isDesktop} title={en ? hIWStrings.phase1EN.l1 : hIWStrings.phase1DE.l1} number={'300€'} />
      <InvExampleP1Item isDesktop={isDesktop} title={en ? hIWStrings.phase1EN.l2 : hIWStrings.phase1DE.l2} number={'3'} />
      <InvExampleP1Item isDesktop={isDesktop} title={en ? hIWStrings.phase1EN.l3 : hIWStrings.phase1DE.l3} number={'100€'} />
      </div>
    </div>
  )
}


export default InvExampleP1
