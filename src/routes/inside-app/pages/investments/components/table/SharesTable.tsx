import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Loader } from 'rsuite'
import { FirebaseShare } from '../../../../../../database/Objects'
import { auth, database } from '../../../../../../firebase'
import RedrumProLoader from '../../../../components/RedrumProLoader'
import ProjectTitle from './ProjectTitle'
import ShareRow from './ShareRow'
import ShareTitles from './ShareTitles'
import './table.scss'

const SharesTable = () => {
  const [shares, setShares] = useState<FirebaseShare[]>([])
  const [groupedShares, setGroupedShares] = useState<FirebaseShare[]>([])
  const [investments, setInvestments] = useState<any>([])
  const [projectIds, setProjectIds] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    // Get all shares
    let lst: FirebaseShare[] = []
    setLoading(true)
    let data: Array<FirebaseShare> = []

    const reference = ref(database, 'shares')
    onValue(reference, (snap) => {
      snap.forEach((share) => {
        if (share.val().owner == auth.currentUser?.uid) {
          data.push(share.val())
        }
      })
      data.map((share) => {
        lst.push(share)
      })
      lst.map((share, i) => {
        if (share.movie === lst[0].movie && i > 0) {
          lst[0].amount += share.amount
        }
        /*if (share.movie === lst[1].movie && i > 1) {
          lst[1].amount += share.amount
        }
        if (share.movie === lst[2].movie && i > 2) {
          lst[2].amount += share.amount
        }*/
      })
      setShares(lst /*.slice(0,3)*/)
    })
    // Set shares
    // Get investments
    let invData: any[] = []
    let projectData: any[] = []
    const shareRef = ref(database, 'investments')
    onValue(shareRef, (snap) => {
      snap.forEach((inv) => {
        if (inv.val().creator == auth.currentUser?.uid) {
          invData.push(inv.val())
          if (!projectData.includes(inv.val().project)) {
            projectData.push(inv.val().project)
          }
        }
      })
      setInvestments(invData)
      setProjectIds(projectData)

      window.setTimeout(() => {setLoading(false)}, 1200)
      })


  }, [])
  return (
    <div>
      {
        loading ? (
          <div style={{width: '100%', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <RedrumProLoader/>
          </div>
        ) : (
          <>
          {
            projectIds.map((projectId: any) => (
              <div key={projectId}>
          <ProjectTitle projectId={projectId} key={projectId} />
          <table>
            <ShareTitles />
          {
            shares.map((share: any) => (
              <tbody key={share.id}>
              {share.project == projectId ? (
                <ShareRow share={share} />
                ): null }
                </tbody>
            ))
          }
          </table>
          </div>
        ))
      }
      </>
        )
      }

    </div>
  )
}

export default SharesTable
