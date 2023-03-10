import React from 'react'
import './styles/banner.scss'
interface IProps {en: boolean}

const Banner = (props: IProps) => {
  const {en} = props
  return (
    <div className='app-teaser-banner'>
      <h1 className='sentence r-main-title'>
        {en ? 'Make your portfolio a part of cinematic history'.split(' ').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ') :
        'Schenke deinem portfolio einen platz in der filmgeschichte'.split(' ').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
        }
      </h1>
    </div>
  )
}

export default Banner
