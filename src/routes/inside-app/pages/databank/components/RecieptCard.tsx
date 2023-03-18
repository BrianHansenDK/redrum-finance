import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { auth, database } from '../../../../../firebase'
import { numberWithCommas } from '../../../../../misc/custom-hooks'
import { mainCard } from '../../../themes/cardStyles'
import { mainColors } from '../../../themes/colors'
import RecieptSharesInfo from './RecieptSharesInfo'

const RecieptCard = ({investment}: {investment: any}) => {
  const [project, setProject] = useState<any>(null)
  const [shares, setShares] = useState<any>(null)
  // Reference Project and shares
  const projectRef = ref(database, 'projects/' + parseInt(investment.project))
  const sharesRef = ref(database, 'shares/')
  useEffect(() => {
    // Get Project and shares
    onValue(projectRef, (snap) => {setProject(snap.val())})
    onValue(sharesRef, (snap) => {
      let data: any[] = []
        snap.forEach((share) => {
        share.val().investment == investment.id && data.push(share.val())
      })
      setShares(data)
      })
  }, [auth])
  const createdDate = new Date(investment.created_at).toLocaleDateString()
  const createdTime = new Date(investment.created_at).toLocaleTimeString()
  return (
    <div style={mainCard} className='mt-3 mb-3'>
      {project?.name && (
        <h1 style={styles.projectTitle}>You invested in: {project?.name}</h1>
      )}
    <p>
      You have paid: {numberWithCommas(investment.paid)}€
    </p>
    <p>
      You have invested: {numberWithCommas(investment.amount)}€
    </p>
    <p>
      Date of investment: {createdDate} - {createdTime}
    </p>
    <p>
      Your investment includes {investment.movies.length} projects in 1 bundle, thus this investment has {investment.movies.length} shares.
    </p>
    {
      shares !== null && shares.map((share: any) => (
        <RecieptSharesInfo share={share} key={share.id} />
      ))
    }
    </div>
  )
}

const styles = {
  projectTitle: {
    fontSize: 18.5,
    color: mainColors.dark,
  }
}

export default RecieptCard
