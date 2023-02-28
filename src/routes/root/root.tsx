import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import MovieDocViewerDE from '../../components/documentviewer/MovieDocViewerDE'
import { useMediaQuery } from '../../misc/custom-hooks'
import MainLayout from '../layouts/mainLayout'
import AppTeaser from './components/appTeaser'
import CtaDown from './components/ctaDown'
import CtaUp from './components/ctaUp'
import Features from './components/features'
import Hero from './components/hero'
import ResponsiveCtaUpper from './responsive_components/ResponsiveCtaUpper'
import ResponsiveHero from './responsive_components/ResponsiveHero'
import ResponsiveStats from './responsive_components/ResponsiveStats'

interface IProps {
  isVisible: any, openModal: any, closeModal: Function, en : boolean, setEn: any
}

const Root: React.FunctionComponent<IProps> = (props) => {
  const { isVisible, openModal, closeModal, en, setEn } = props
  const isTablet = useMediaQuery('(max-width: 1100px)')
  const isDesktop = useMediaQuery('(min-width: 1600px)')

  const auth = getAuth()
    const [active, setActive] = useState(false)

    window.addEventListener('scroll', () => {
      if (window.scrollY < 50) {
          setActive(false)
      } else {
          setActive(true)
      }
  })

    return (
        <>
            <MainLayout en={en} setEn={setEn} isVisible={isVisible} openModal={openModal} closeModal={closeModal} dark={active} >
              {
                isTablet || isDesktop ? (
                  <div className='r-page-wrap'>
                    <ResponsiveHero en={en} />
                    <ResponsiveStats en={en} />
                    <ResponsiveCtaUpper en={en} />
                  </div>
                ) : (
                  <>
                    <Hero en={en} />
                    <CtaUp en={en} />
                    <Features en={en} />
                    <AppTeaser en={en} />
                    <CtaDown openModal={openModal} en={en} />
                  </>
                )
              }

            </MainLayout>
        </>
    )
}

export default Root
