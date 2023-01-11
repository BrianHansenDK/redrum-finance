import React from 'react'
import { Button } from 'rsuite'
import BANNER from '../../../../../components/images/banner_placeholder.svg'

const BannerComponent = () => {
  return (
    <div className='d-flex txt-white trans align-center pb-1 pt-1 txt-center banner' 
        style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(255, 0, 150, 0.3)), url(' + BANNER + ')',
        }}
        >
          <div>
            <p style={{fontSize: 22.5, fontWeight: '600', margin: 0, padding: 0}}>
              The banner
            </p>
            <h1 className='txt-2' style={{ lineHeight: 2 + 'rem', letterSpacing: 5, textTransform: 'uppercase'}}>Here is the banner</h1>
            <p style={{fontSize: 20, fontWeight: '600', marginTop: 10, padding: 0}}>
              Making ideas into projects
            </p>
          </div>
          <div>
            <Button className='main-btn white shadow'>
              Watch on youtube
            </Button>
          </div>
        </div>
  )
}

export default BannerComponent