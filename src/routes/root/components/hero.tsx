import React from 'react'
import { Button, FlexboxGrid, Navbar } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import MOUSE from '@rsuite/icons/legacy/MousePointer'
import IMG from '../../../components/images/redrum_cat.png'
import '../styles/hero.scss'
import Statistics from './statistics'
import Waves from './waves'
import { homeStrings } from '../../../library/string/Landinspage'
import { useNavigate } from 'react-router-dom'

interface IProps {en: boolean, openModal: any}
const Hero: React.FunctionComponent<IProps> = (props) => {
  const {en, openModal} = props
  const navigate = useNavigate()
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
                            <Button
                            onClick={openModal}
                            appearance='primary'
                            className='r-btn r-main-btn'

                            >
                                <MOUSE /> {en ? homeStrings.heroEN.investBtn : homeStrings.heroDE.investBtn}
                            </Button>
                            <Button
                            onClick={() => navigate('/how-it-works')}
                            appearance='subtle'
                            className='ml-1 r-btn r-secondary-btn'>
                                {en ? 'How It Works' : homeStrings.heroDE.worksBtn}
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
