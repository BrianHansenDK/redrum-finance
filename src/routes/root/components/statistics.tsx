import React, { useEffect } from 'react'
import { FlexboxGrid } from 'rsuite'
import IMG1 from '../../../components/images/stats_1.svg'
import IMG2 from '../../../components/images/stats_2.svg'
import IMG3 from '../../../components/images/stats_3.svg'
import { getAllUserObjectsInfo } from '../../../firebase'
import Stat from './stat'


const Statistics = () => {
  const [users, setUsers] = React.useState<any>([])
  useEffect(() => {
    getAllUserObjectsInfo(setUsers)
  }, [])
    return (
        <div id='stats'>
            <div id='stats-inner'>

                <div className='txt-center' >
                    <Stat
                        icon={IMG1}
                        title='Current Users'
                        stats={`${users.length} users`}
                    />
                </div>
                <div className='txt-center'>
                    <Stat
                        icon={IMG2}
                        title='Money invested'
                        stats='245.801,751 €'
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
