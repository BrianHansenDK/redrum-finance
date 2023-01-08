import React from 'react'
import { FlexboxGrid } from 'rsuite'
import IMG1 from '../../../components/images/stats_1.svg'
import IMG2 from '../../../components/images/stats_2.svg'
import IMG3 from '../../../components/images/stats_3.svg'
import Stat from './stat'


const Statistics = () => {
    return (
        <div id='stats'>
            <div id='stats-inner'>

                <div className='txt-center' >
                    <Stat
                        icon={IMG1}
                        title='Current Users'
                        stats='7 Users'
                    />
                </div>
                <div className='txt-center'>
                    <Stat
                        icon={IMG2}
                        title='Money invested'
                        stats='1.720.611,00 €'
                    />
                </div>
                <div className='txt-center'>
                    <Stat
                        icon={IMG3}
                        title='Average investment'
                        stats='13.502,27 €'
                    />
                </div>
            </div>
        </div>
    )
}

export default Statistics