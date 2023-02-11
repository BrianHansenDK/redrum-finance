import React from 'react'
import { hIWStrings } from '../../../../library/string/Landinspage'
import TextTheme from '../../../../library/themes/TextTheme'
import Phase2Card from './Phase2Card'

const InvExampleP2 = ({en} : {en: boolean}) => {
  return (
    <div>
      <h3 style={TextTheme.secondaryTitle} className='text-center'>
        {en ? hIWStrings.phase2EN.t : hIWStrings.phase2DE.t}
      </h3>
      <Phase2Card en={en} />
    </div>
  )
}

export default InvExampleP2
