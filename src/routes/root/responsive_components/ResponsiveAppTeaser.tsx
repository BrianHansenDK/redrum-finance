import React from 'react'
import { Button, FlexboxGrid } from 'rsuite'
import { useMediaQuery } from '../../../misc/custom-hooks'
import APP from '../../../components/images/redrum_app.png'
import GPLAY from '@rsuite/icons/legacy/Google'
import APPLE from '@rsuite/icons/legacy/Apple'
import { homeStrings } from '../../../library/string/Landinspage'

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
          {en ? homeStrings.appTeaserEn : homeStrings.appTeaserDe}
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
        <p className="r-sub-title mb-2">
          Get it on
        </p>
        <Button
        block
        appearance='primary'
        className='r-showcase-btn'
        >
          <GPLAY/> Google PLay
        </Button> <br/>
        <Button
        block
        appearance='primary'
        className='r-showcase-btn'
        >
          <APPLE/> App Store
        </Button>
        </div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default ResponsiveAppTeaser
