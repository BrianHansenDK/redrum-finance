import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { auth, database } from '../../../../firebase'
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar'
import { mainColors } from '../../themes/colors'
import RecieptsList from './components/RecieptsList'

const DatabankPage = () => {
  const [investments, setInvestments] = useState<any>([])
  useEffect(() => {
    const reference = ref(database, 'investments/')
    onValue(reference, (snap) => {
      let data: any[] = []
      snap.forEach((investment) => {
        if (investment.val().creator == auth.currentUser?.uid) {
          data.push(investment.val())
        }
      })
      setInvestments(data)
    })
  }, [auth])
  return (
    <LayoutWithSidebar>
      <RecieptsList investments={investments}/>
    </LayoutWithSidebar>
  )
}

const styles = {
  pageTitle: {
    fontSize: 45,
    color: mainColors.dark,
  }
}

export default DatabankPage
