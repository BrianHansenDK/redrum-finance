import React from 'react'
import { Container, Content, Footer, Header } from 'rsuite'
import Navbar from '../../components/navbar'
import MainLayout from '../layouts/mainLayout'
import AppTeaser from './components/appTeaser'
import CtaDown from './components/ctaDown'
import CtaUp from './components/ctaUp'
import Features from './components/features'
import Hero from './components/hero'

const Root = () => {
    return (
        <>
            <MainLayout>
                <Hero />
                <CtaUp />
                <Features />
                <AppTeaser />
                <CtaDown />
            </MainLayout>
        </>
    )
}

export default Root