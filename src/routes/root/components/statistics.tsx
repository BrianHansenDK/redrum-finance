import React, { useEffect } from 'react'
import { FlexboxGrid } from 'rsuite'
import IMG1 from '../../../components/images/stats_1.svg'
import IMG2 from '../../../components/images/stats_2.svg'
import IMG3 from '../../../components/images/stats_3.svg'
import { getAllUserObjectsInfo } from '../../../firebase'
import { homeStrings } from '../../../library/string/Landinspage'
import Stat from './stat'


const Statistics = ({en}: {en: boolean}) => {
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
                        title={en ? homeStrings.heroEN.userStat : homeStrings.heroDE.userStat}
                        stats={`${users.length} ${en ? 'users' : 'nutzeren'}`}
                    />
                </div>
                <div className='txt-center'>
                    <Stat
                        icon={IMG2}
                        title={en ? homeStrings.heroEN.totalInvStat : homeStrings.heroDE.totalInvStat}
                        stats='245.801,751 €'
                    />
                </div>
                <div className='txt-center'>
                    <Stat
                        icon={IMG3}
                        title={en ? homeStrings.heroEN.averageInvStat : homeStrings.heroDE.averageInvStat}
                        stats='13.502,27 €'
                    />
                </div>
            </div>
        </div>
    )
}

export default Statistics
