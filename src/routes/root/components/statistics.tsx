import React, { useEffect } from 'react'
import { FlexboxGrid } from 'rsuite'
import IMG1 from '../../../components/images/stats_1.svg'
import IMG2 from '../../../components/images/stats_2.svg'
import IMG3 from '../../../components/images/stats_3.svg'
import { getAllInvestedInProjects, getAllUserObjectsInfo, getInvestments } from '../../../firebase'
import { homeStrings } from '../../../library/string/Landinspage'
import { numberWithCommas, toFixedIfNecessary } from '../../../misc/custom-hooks'
import Stat from './stat'


const Statistics = ({en}: {en: boolean}) => {
  const [users, setUsers] = React.useState<any>([])
  const [sum, setSum] = React.useState(0)
  useEffect(() => {
    getAllUserObjectsInfo(setUsers)
    getAllInvestedInProjects(setSum)
  }, [])
  // const average = sum / investments.length > 0 ? sum / investments.length : 0 // Real average
  const average = sum > 0 ? sum / users.length : 0 // Fake average
    return (
        <div id='stats'>
            <div id='stats-inner'>

                <div className='txt-center' >
                    <Stat
                        icon={IMG1}
                        title={en ? homeStrings.heroEN.userStat : homeStrings.heroDE.userStat}
                        stats={users.length}
                    />
                </div>
                <div className='txt-center'>
                    <Stat
                        icon={IMG2}
                        title={en ? homeStrings.heroEN.totalInvStat : homeStrings.heroDE.totalInvStat}
                        stats={`${numberWithCommas(toFixedIfNecessary(parseFloat(sum.toString().replace('.',',')), 2))}€`}
                    />
                </div>
                <div className='txt-center'>
                    <Stat
                        icon={IMG3}
                        title={en ? homeStrings.heroEN.averageInvStat : homeStrings.heroDE.averageInvStat}
                        stats={`${numberWithCommas(toFixedIfNecessary(parseFloat(average.toString().replace('.',',')), 2))}€`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Statistics
