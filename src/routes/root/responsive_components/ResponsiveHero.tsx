import React from 'react'
import { Button, ButtonGroup, FlexboxGrid } from 'rsuite'
import { homeStrings } from '../../../library/string/Landinspage'
import CAT from '../../../components/images/redrum_cat.png'
import { useMediaQuery } from '../../../misc/custom-hooks'

const ResponsiveHero = ({en}: {en: boolean}) => {
  const isMobile = useMediaQuery('(max-width: 968px)')

  const styles = {
    wrap: {
      height: isMobile ? '100vh' : 'auto',
    },
    btn: {
      width: 'calc(50% - 12.5px)',
    }
  }
  return (
    <FlexboxGrid className='lp-hero' style={styles.wrap}>
      <FlexboxGrid.Item colspan={isMobile ? 24 : 12}>
        <h1 className='r-hero-title text-center'>Redrum Pro</h1>
        <p className='mt-1 r-hero-des text-center'>
          {en ? homeStrings.heroEN.slogan : homeStrings.heroDE.slogan}
        </p>
        {
          isMobile ? (
            <div className='d-flex justify-content-center mt-1 mb-2'>
              <img src={CAT} alt="Redrum logo"
              className={`r-hero-img ${isMobile ? 'mt-4' : ''}`} />
            </div>
          ) : null
        }
        <div className='btns-wrap mt-2' style={{width: '100%'}}>
          <Button
          appearance='primary'
          className='r-btn r-main-btn'
          style={styles.btn}
          >
            {en ? homeStrings.heroEN.investBtn : homeStrings.heroDE.investBtn}
          </Button>
          <Button
          appearance='primary'
          className='r-btn r-secondary-btn'
          style={styles.btn}
          >
            {en ? homeStrings.heroEN.worksBtn : homeStrings.heroDE.worksBtn}
          </Button>
        </div>

      </FlexboxGrid.Item>
      {
        !isMobile ? (
        <FlexboxGrid.Item colspan={isMobile ? 24 : 12} className='d-flex justify-content-center'>
          <img src={CAT} alt="Redrum logo"
          className={`r-hero-img ${isMobile ? 'mt-4' : ''}`} />
        </FlexboxGrid.Item>
        ) : null
      }

    </FlexboxGrid>
  )
}


export default ResponsiveHero
