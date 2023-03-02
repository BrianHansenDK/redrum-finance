import React from 'react'
import { hIWStrings } from '../../../library/string/Landinspage'
import TextTheme from '../../../library/themes/TextTheme'
import { useMediaQuery } from '../../../misc/custom-hooks'
import InvExampleP1 from './InvExampleP1'
import InvExampleP2 from './phase2/InvExampleP2'

const InvExample = ({en} : {en : boolean}) => {
  const isDesktop = useMediaQuery('(min-width: 1600px)')
  return (
    <div>
      <h1 style={isDesktop ? TextTheme.bigSecondaryTitle : TextTheme.secondaryTitle} className='title'>
        {en ? hIWStrings.exampleTitleEN : hIWStrings.exampleTitleDE}
      </h1>
      <InvExampleP1 en={en} isDesktop={isDesktop} />
      <InvExampleP2 en={en} isDesktop={isDesktop} />
    </div>
  )
}

export default InvExample
