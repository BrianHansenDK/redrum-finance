import React from 'react'
import { Button } from 'rsuite'
import { homeStrings } from '../../../library/string/Landinspage'

const ResponsiveLowerCTA = ({en}: {en: boolean}) => {
  return (
    <div className='r-cta-down'>
      <h1 className='r-main-title text-center mb-2'>
        {en ? homeStrings.ctaDownEN.title : homeStrings.ctaDownEN.title}
      </h1>
      <Button
      appearance='primary'
      className='r-btn r-main-btn'
      >
        {en ? homeStrings.ctaDownEN.btn : homeStrings.ctaDownDE.btn}
      </Button>
    </div>
  )
}

export default ResponsiveLowerCTA
