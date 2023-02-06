import React from 'react'
import { Button, FlexboxGrid, Navbar } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import MOUSE from '@rsuite/icons/legacy/MousePointer'
import IMG from '../../../components/images/redrum_cat.png'
import '../styles/hero.scss'
import Statistics from './statistics'
import Waves from './waves'
import { homeStrings } from '../../../library/string/Landinspage'

const Hero = ({en} : {en: boolean}) => {
    return (
        <>
            <div id='hero-wrap' className=' hero-img'>
                <div id='epmty' style={{ opacity: 0, cursor: 'default' }}>
                    This is invisible
                </div>
                <div id='hero' >
                    <div id='hero-left'>
                        <h1 className='mt-4'>
                            Redrum Pro
                        </h1>
                        <div>
                            {en ? homeStrings.heroEN.slogan : homeStrings.heroDE.slogan}
                        </div>
                        <div id='btn-group'>
                            <Button appearance='primary' className=' shadow btn-1'>
                                <MOUSE /> {en ? homeStrings.heroEN.investBtn : homeStrings.heroDE.investBtn}
                            </Button>
                            <Button appearance='subtle' className=' ml-1 btn-2'>
                                {en ? homeStrings.heroEN.worksBtn : homeStrings.heroDE.worksBtn}
                            </Button>
                        </div>
                    </div>
                    <div id='hero-right'>
                        <img src={IMG} alt="Redrum official LOGO" />
                    </div>
                </div>
                <div id='stat-wrap'>

                    <Waves />
                    <Statistics en={en} />
                </div>
            </div>
        </>
    )
}

export default Hero
