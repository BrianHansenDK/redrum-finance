import React from 'react'
import { hIWStrings } from '../../../library/string/Landinspage'

import TextTheme from '../../../library/themes/TextTheme'

const HIWHero = ({en}: {en: boolean}) => {
  return (
    <div>
      <h1 style={TextTheme.mainTitle} className='mb-1 title'>
        {en ? hIWStrings.HeroEN.t : hIWStrings.HeroDE.t}
      </h1>
      <p style={TextTheme.mainPara} className='mb-2 sub-title'>
      {en ? hIWStrings.HeroEN.des : hIWStrings.HeroDE.des}
      </p>
    </div>
  )
}

export default HIWHero
