import React from 'react'
import { hIWStrings } from '../../../library/string/Landinspage'
import BoxThemes from '../../../library/themes/BoxThemes'
import TextTheme from '../../../library/themes/TextTheme'
import mainShadows from '../../inside-app/themes/shadows'
import InvExampleP1Item from './InvExampleP1Item'

const InvExampleP1 = ({en} : {en: boolean}) => {
  return (
    <div style={BoxThemes.card}>
      <h3 style={TextTheme.secondaryTitle} className='mb-2'>
        {en ? hIWStrings.phase1EN.t : hIWStrings.phase1DE.t}
      </h3>
      <InvExampleP1Item title={en ? hIWStrings.phase1EN.l1 : hIWStrings.phase1DE.l1} number={'300€'} />
      <InvExampleP1Item title={en ? hIWStrings.phase1EN.l2 : hIWStrings.phase1DE.l2} number={'3'} />
      <InvExampleP1Item title={en ? hIWStrings.phase1EN.l3 : hIWStrings.phase1DE.l3} number={'100€'} />
    </div>
  )
}

export default InvExampleP1
