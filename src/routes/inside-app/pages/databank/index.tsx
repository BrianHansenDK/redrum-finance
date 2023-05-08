import { get, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Loader } from 'rsuite'
import { auth, database } from '../../../../firebase'
import RedrumProLoader from '../../components/RedrumProLoader'
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar'
import { mainColors } from '../../themes/colors'
import RecieptsList from './components/RecieptsList'

const DatabankPage = ({en} : {en: boolean}) => {
  const [investments, setInvestments] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    const reference = ref(database, 'investments/')
    get(reference).then((snap) => {
      let data: any[] = []
      snap.forEach((investment) => {
        if (investment.val().user_id == auth.currentUser?.uid) {
          data.push(investment.val())
        }
      })
      setInvestments(data)
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  return (
    <>
    {loading ? (<RedrumProLoader/>) : (<RecieptsList en={en} investments={investments}/>)}
    </>
  )
}

const styles = {
  pageTitle: {
    fontSize: 45,
    color: mainColors.dark,
  }
}

export default DatabankPage
