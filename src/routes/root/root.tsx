import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import MainLayout from '../layouts/mainLayout'
import AppTeaser from './components/appTeaser'
import CtaDown from './components/ctaDown'
import CtaUp from './components/ctaUp'
import Features from './components/features'
import Hero from './components/hero'



const Root = ({ isVisible, openModal, closeModal }: { isVisible: any, openModal: any, closeModal: Function }) => {
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
            <MainLayout isVisible={isVisible} openModal={openModal} closeModal={closeModal} dark={active} >
                <Hero />
                <CtaUp />
                <Features />
                <AppTeaser />
                <CtaDown openModal={openModal} />
            </MainLayout>
        </>
    )
}

export default Root
