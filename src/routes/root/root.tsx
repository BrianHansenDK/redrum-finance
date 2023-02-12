import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import MovieDocViewerDE from '../../components/documentviewer/MovieDocViewerDE'
import MainLayout from '../layouts/mainLayout'
import AppTeaser from './components/appTeaser'
import CtaDown from './components/ctaDown'
import CtaUp from './components/ctaUp'
import Features from './components/features'
import Hero from './components/hero'

interface IProps {
  isVisible: any, openModal: any, closeModal: Function, en : boolean, setEn: any
}

const Root: React.FunctionComponent<IProps> = (props) => {
  const { isVisible, openModal, closeModal, en, setEn } = props
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
                <Hero en={en} />
                <CtaUp en={en} />
                <Features en={en} />
                <AppTeaser en={en} />
                <CtaDown openModal={openModal} en={en} />
            </MainLayout>
        </>
    )
}

export default Root
