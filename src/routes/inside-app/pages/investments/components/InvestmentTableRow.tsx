import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Divider } from 'rsuite'
import { database } from '../../../../../firebase'
import { numberWithCommas } from '../../../../../misc/custom-hooks'
import { mainColors } from '../../../themes/colors'

const InvestmentTableRow = ({investment, projectId}: {investment: any, projectId: any}) => {
  const [project, setProject] = useState<any>(null)
  useEffect(() => {
    const reference = ref(database, 'projects/' + projectId)
    onValue(reference, (snap) => {setProject(snap.val())})
  }, [projectId])
  return (
    <>
    <div style={styles.wrap}>
        <div style={styles.titleElement}>{project?.name}</div>
        <div style={styles.titleElement}>{numberWithCommas(investment.amount)}€</div>
        <div
        style={
          {width: 200, color: investment.gain > investment.amount ? mainColors.success : mainColors.red}
        }
        >
          {numberWithCommas(investment.gain.toFixed(2).toString().replace(".", ",")).toString()}€
        </div>
        <div style={styles.titleElement}>{investment.movies.length}</div>
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
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleElement: {
    width: 200,
  },
  divider: {
    margin: '7.5px 50px 15px 0'
  }
}


export default InvestmentTableRow
