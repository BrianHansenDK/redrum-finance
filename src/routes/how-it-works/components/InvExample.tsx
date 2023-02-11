import React from 'react'
import { hIWStrings } from '../../../library/string/Landinspage'
import TextTheme from '../../../library/themes/TextTheme'
import InvExampleP1 from './InvExampleP1'
import InvExampleP2 from './phase2/InvExampleP2'

const InvExample = ({en} : {en : boolean}) => {
  return (
    <div>
      <h1 style={TextTheme.mainTitle} className='text-center'>
        {en ? hIWStrings.exampleTitleEN : hIWStrings.exampleTitleDE}
      </h1>
      <InvExampleP1 en={en} />
      <InvExampleP2 en={en} />
    </div>
  )
}

export default InvExample
