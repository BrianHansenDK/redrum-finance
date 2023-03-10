import React from 'react'
import { Button, ButtonGroup, FlexboxGrid } from 'rsuite'
import { homeStrings } from '../../../library/string/Landinspage'
import MOUSE from '@rsuite/icons/legacy/MousePointer'
import CAT from '../../../components/images/redrum_cat.png'
import { useMediaQuery } from '../../../misc/custom-hooks'
import { useNavigate } from 'react-router-dom'

interface IProps {
  en: boolean,
  openModal: any,
}
const ResponsiveHero = (props: IProps) => {
  const {en, openModal} = props
  const isPhone = useMediaQuery('(max-width: 768px)')
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const isDesktop = useMediaQuery('(min-width: 1600px)')
  const navigate = useNavigate()
  const styles = {
    wrap: {
      height: isMobile ? '100vh' : 'auto',
    },
    btn: {
      width: 'auto',
    }
  }
  return (
    <FlexboxGrid className='lp-hero' style={styles.wrap} align='middle' justify='center'>
      <FlexboxGrid.Item colspan={isMobile ? 24 : 10} className={`r-hero-txt-con ${isDesktop ? 'mr-3' : ''}`}>
        <div>
      {
          isMobile ? (
            <div className='d-flex justify-content-center'>
              <img src={CAT} alt="Redrum logo"
              className={`r-hero-img ${isMobile ? '' : ''}`} />
            </div>
          ) : null
        }
          <h1 className='r-main-title r-hero-title'>Redrum Pro</h1>
          </div>
          <p className='mt-1 r-hero-des r-sub-title'>
            {en ? homeStrings.heroEN.slogan : homeStrings.heroDE.slogan}
          </p>

        <div className='btns-wrap' style={{width: '100%'}}>
          <Button
          appearance='primary'
          className='r-btn r-main-btn'
          style={styles.btn}
          block={isMobile && !isPhone}
          onClick={openModal}
          >
            {!isMobile ? (<MOUSE/>) : null} {en ? homeStrings.heroEN.investBtn : homeStrings.heroDE.investBtn}
          </Button>
          <Button
          appearance='primary'
          className='r-btn r-secondary-btn'
          style={styles.btn}
          block={isMobile && !isPhone}
          onClick={() => navigate('/how-it-works')}
          >
            {en ? 'How It Works' : homeStrings.heroDE.worksBtn}
          </Button>
        </div>

      </FlexboxGrid.Item>
      {
        !isMobile ? (
        <FlexboxGrid.Item colspan={isMobile ? 24 : 6} className='d-flex justify-content-center'>
          <img src={CAT} alt="Redrum logo"
          className={`r-hero-img ${isMobile ? 'mt-4' : ''}`} />
        </FlexboxGrid.Item>
        ) : null
      }
    </FlexboxGrid>
  )
}


export default ResponsiveHero
