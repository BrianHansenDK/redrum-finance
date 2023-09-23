import React from 'react'
import {Icon} from '@rsuite/icons'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import InstagramSvg from '../../assets/svgs/InstagramSvg'
import FacebookSvg from '../../assets/svgs/FacebookSvg'
import LinkedinSvg from '../../assets/svgs/LinkedinSvg'
import { Link } from 'react-router-dom'
import YoutubeSvg from '../../assets/svgs/YoutubeSvg'

const Socials = (props : {colspan: any}) => {
  const {colspan} = props
  return (
    <FlexboxGridItem colspan={colspan} className='socials'>
      <a className='social-media' 
      style={{color:'whitesmoke'}}
      href='https://www.instagram.com/redrumbooks/'
      target='_blank' rel='noreferrer'>
        <Icon as={InstagramSvg} className='brand' />
      </a>
      <a className='social-media'
      style={{color:'whitesmoke'}}
      href='https://www.facebook.com/RedrumBooks'
      target='_blank' rel='noreferrer'>
        <Icon as={FacebookSvg} className='brand' />
      </a>
      <a className='social-media'
      style={{color:'whitesmoke'}}
      href='https://www.youtube.com/@RedrumBooks'
      target='_blank' rel='noreferrer'>
        <Icon as={YoutubeSvg} className='brand' />
      </a>
    </FlexboxGridItem>
  )
}

export default Socials
