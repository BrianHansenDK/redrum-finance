import React from 'react'
import { FlexboxGrid, Button } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import APP from '../../../components/images/redrum_app.png'
import GPLAY from '@rsuite/icons/legacy/Google'
import APPLE from '@rsuite/icons/legacy/Apple'
import '../styles/app-teaser.scss'
import { homeStrings } from '../../../library/string/Landinspage'

const AppTeaser = ({en} : {en: boolean}) => {
    return (
        <FlexboxGrid className='pd-page txt-white' justify='center' id='app-teaser'>
            <FlexboxGridItem colspan={6}>
                <img src={APP} alt="Redrum finance as an App opened on an iPhone" width={300} />
            </FlexboxGridItem>
            <FlexboxGridItem colspan={10}>
                <h1>
                    {en ? homeStrings.appTeaserEn : homeStrings.appTeaserDe}
                </h1>
                <div className='mt-3' >

                    <Button appearance='primary' color='green' className='app-btn' style={{ width: 275 }}>
                        <div className='d-flex'>
                            <div className='mr-1 d-flex'>
                                <GPLAY style={{ fontSize: 30, alignSelf: 'center' }} />
                            </div>
                            <div>
                                <p className='get-on'>Get it on</p>
                                <p className='provider'>Google play</p>
                            </div>
                        </div>
                    </Button>
                </div>
                <div className='mt-1' >
                    <Button appearance='primary' color='blue' className='app-btn' style={{ width: 275 }}>
                        <div className='d-flex'>
                            <div className='mr-1 d-flex'>
                                <APPLE style={{ fontSize: 30, alignSelf: 'center' }} />
                            </div>
                            <div>
                                <p className='get-on'>Get it on</p>
                                <p className='provider'>App store</p>
                            </div>
                        </div>
                    </Button>
                </div>

            </FlexboxGridItem>
        </FlexboxGrid>
    )
}

export default AppTeaser
