import React from 'react'
import { hIWStrings } from '../../../library/string/Landinspage'

import TextTheme from '../../../library/themes/TextTheme'
import { useMediaQuery } from '../../../misc/custom-hooks'

const HIWHero = ({en}: {en: boolean}) => {
  const isDesktop = useMediaQuery('(min-width: 1600px)')

  return (
    <div>
      <h1 style={isDesktop ? TextTheme.bigMainTitle : TextTheme.mainTitle} className='mb-1 title'>
        {en ? hIWStrings.HeroEN.t : hIWStrings.HeroDE.t}
      </h1>
      <p style={isDesktop ? TextTheme.bigSecondaryTitle : TextTheme.secondaryTitle} className='mb-2 sub-title'>
      {en ? hIWStrings.HeroEN.des : hIWStrings.HeroDE.des}
      </p>
    </div>
  )
}

export default HIWHero
