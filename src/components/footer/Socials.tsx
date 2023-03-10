import React from 'react'
import {Icon} from '@rsuite/icons'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import InstagramSvg from './svgs/InstagramSvg'
import FacebookSvg from './svgs/FacebookSvg'
import LinkedinSvg from './svgs/LinkedinSvg'

const Socials = (props : {colspan: any}) => {
  const {colspan} = props
  return (
    <FlexboxGridItem colspan={colspan} className='socials'>
      <div className='social-media'>
        <Icon as={InstagramSvg} className='brand' />
      </div>
      <div className='social-media'>
        <Icon as={FacebookSvg} className='brand' />
      </div>
      <div className='social-media'>
        <Icon as={LinkedinSvg} className='brand' />
      </div>
    </FlexboxGridItem>
  )
}

export default Socials