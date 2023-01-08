import React from 'react'
import { Button, FlexboxGrid, Navbar } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import MOUSE from '@rsuite/icons/legacy/MousePointer'
import IMG from '../../../components/images/redrum_cat.png'
import '../styles/hero.scss'
import Statistics from './statistics'
import Waves from './waves'

const Hero = () => {
    return (
        <>
            <div id='hero-wrap' className=' hero-img'>
                <div id='epmty' style={{ opacity: 0, cursor: 'default' }}>
                    This is invisible
                </div>
                <div id='hero' >
                    <div id='hero-left'>
                        <h1>
                            Invest in movies & gain revenue
                        </h1>
                        <div>
                            And here is the supporting text for your headline. A short paragraph that provides extra info.
                        </div>
                        <div id='btn-group' className='mt-2 txt-1 '>
                            <Button appearance='primary' size='lg' className='main-btn blue mr-1 shadow'>
                                <MOUSE /> Start investing
                            </Button>
                            <Button appearance='ghost' size='lg' className='main-btn white hidden'>
                                Learn more
                            </Button>
                        </div>
                    </div>
                    <div id='hero-right'>
                        <img src={IMG} alt="Redrum official LOGO" />
                    </div>
                </div>
                <div id='stat-wrap'>

                    <Waves />
                    <Statistics />
                </div>
            </div>
        </>
    )
}

export default Hero