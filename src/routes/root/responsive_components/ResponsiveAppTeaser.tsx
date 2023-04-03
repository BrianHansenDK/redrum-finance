import React from 'react'
import { Button, FlexboxGrid } from 'rsuite'
import { useMediaQuery } from '../../../misc/custom-hooks'
import APP from './redrum-pro-app.svg'
import { homeStrings } from '../../../library/string/Landinspage'
import GoogleBtn from '../../../components/GoogleBtn'
import AppleBtn from '../../../components/AppleBtn'

const ResponsiveAppTeaser = ({en}: {en:boolean}) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  return (
    <FlexboxGrid
    align='middle'
    justify='center'
    className='r-showcase-con'
    >
      {isMobile ? null : (
        <FlexboxGrid.Item
        className='r-showcase-img-con'
        colspan={isMobile ? 24 : 8}
        >
          <img
          src={APP}
          alt="Redrum finance as an App opened on an iPhone"
          width='100%'
          />
        </FlexboxGrid.Item>
      )}
      <FlexboxGrid.Item colspan={isMobile ? 24 : 10} className='r-showcase-txt-con'>
        <h1 className='r-main-title'>
          {en ? homeStrings.appTeaserEn.split(' ').slice(0,3).join(' ') : homeStrings.appTeaserDe} {en ? (<br/>): null}
          {en ? homeStrings.appTeaserEn.split(' ').slice(3).join(' '): null}
        </h1>
        <div className="r-btns-con">
          {isMobile ? (
            <div className='phone-img-con'>
              <img
              src={APP}
              alt="Redrum finance as an App opened on an iPhone"
              />
            </div>
          ) : null}
          <AppleBtn en={en}/>
          <GoogleBtn en={en}/>
        </div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default ResponsiveAppTeaser
