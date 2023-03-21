import React from 'react'
import {Icon} from '@rsuite/icons'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import InstagramSvg from '../../assets/svgs/InstagramSvg'
import FacebookSvg from '../../assets/svgs/FacebookSvg'
import LinkedinSvg from '../../assets/svgs/LinkedinSvg'

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
