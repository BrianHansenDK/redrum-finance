import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FlexboxGrid } from 'rsuite'
import { homeStrings } from '../../../library/string/Landinspage'
import { useMediaQuery } from '../../../misc/custom-hooks'

const ResponsiveCtaUpper = ({en}: {en: boolean}) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  return (
    <div className='r-cta-upper'>
      <h1 className='r-main-title r-cta-upper-title mb-2'>
        {en ? homeStrings.ctaUpperEN.title : homeStrings.ctaUpperDE.title}
      </h1>
      <p className='r-main-des r-cta-upper-des mb-3'>
        {en ? homeStrings.ctaUpperEN.sentence : homeStrings.ctaUpperDE.sentence}
      </p>
      <Button
      className='r-btn r-secondary-btn'
      as={Link} to='/how-it-works'
      size='lg' block={isMobile}
      appearance='primary'>
        {en ? homeStrings.ctaUpperEN.btn : homeStrings.ctaUpperDE.btn}
      </Button>
    </div>
  )
}

export default ResponsiveCtaUpper
