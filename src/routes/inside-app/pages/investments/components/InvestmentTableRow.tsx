import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Divider } from 'rsuite'
import { database } from '../../../../../firebase'
import { numberWithCommas } from '../../../../../misc/custom-hooks'
import { mainColors } from '../../../themes/colors'

const InvestmentTableRow = ({investment, projectId}: {investment: any, projectId: any}) => {
  const [project, setProject] = useState<any>(null)
  const date = new Date(investment.created_at)
  useEffect(() => {
    const reference = ref(database, 'projects/' + projectId)
    onValue(reference, (snap) => {setProject(snap.val())})
  }, [projectId])
  return (
    <>
    <div style={styles.wrap} className='inv-table'>
        <div style={styles.titleElement}>{project?.name}</div>
        <div style={styles.titleElement}>{numberWithCommas(investment.amount)}€</div>
        <div
        style={
          {width: 150, color: investment.gain > investment.amount ? mainColors.success : mainColors.red}
        }
        >
          {numberWithCommas(investment.gain.toFixed(2).toString().replace(".", ",")).toString()}€
        </div>
        <div style={{width: 100}}>{investment.movies.length}</div>
        <div style={styles.titleElement}>{date.toLocaleDateString()} - {date.toLocaleTimeString()}</div>
      </div>
      <Divider style={styles.divider} />
    </>
  )
}

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14.5,
    color: mainColors.dark,
    opacity: .9,
    marginRight: 50,
    paddingTop: 17.5,
    paddingLeft: 10,
    paddingBottom: 17.5,
  },
  titleElement: {
    width: 150,
  },
  divider: {
    margin: '0 50px 0 0'
  }
}


export default InvestmentTableRow
