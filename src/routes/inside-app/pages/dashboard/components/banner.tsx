import React from 'react'
import { Button } from 'rsuite'
import BANNER from '../../../../../components/images/banner_placeholder.svg'
import { useMediaQuery } from '../../../../../misc/custom-hooks'

const BannerComponent = ({isMobile} : {isMobile: boolean}) => {

  const small = useMediaQuery('(max-width: 800px)')
  const styles = {
    wrap: {
      background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(255, 0, 150, 0.3)), url(' + BANNER + ')',
      marginBottom: 50,
      paddingTop: isMobile ? 10 : '1rem',
      paddingBottom: isMobile ? 10 : '1rem',
      padding: isMobile ? 10 : 'auto',
      maxWidth: small ? '100%' : 800,
    },
    title: {
      fontSize: isMobile ? 18 : 22.5,
      fontWeight: '600',
      margin: 0,
      padding: 0
    },
    promo: {
      lineHeight: isMobile ? 1 : '2rem',
      letterSpacing: isMobile ? 2 : 5,
      fontSize: isMobile ? 18 : '2rem',
    },
    bottomTxt: {
      fontSize: isMobile ? 15 : 20,
      fontWeight: '600',
      marginTop: 10,
      padding: 0,
      lineHeight: 1,
      marginBottom: isMobile ? 15 : 0
    }
  }

  return (
    <div className={`${isMobile ? '' : 'd-flex'} txt-white trans align-center txt-center banner`}
      style={styles.wrap}
    >
      <div>
        <p style={styles.title}>
          The banner
        </p>
        <h1 className='text-uppercase' style={styles.promo}>Here is the banner</h1>
        <p style={styles.bottomTxt}>
          Making ideas into projects
        </p>
      </div>
      <div>
        <Button
        appearance='primary'
        className={isMobile ? 'r-btn r-secondary-btn mb-1' : 'main-btn white shadow'}
        >
          Watch on youtube
        </Button>
      </div>
    </div>
  )
}

export default BannerComponent
