import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Loader } from 'rsuite'
import { auth, database } from '../../../../../../firebase'
import ProjectTitle from './ProjectTitle'
import ShareRow from './ShareRow'
import ShareTitles from './ShareTitles'
import './table.scss'

const SharesTable = () => {
  const [shares, setShares] = useState<any>(null)
  const [investments, setInvestments] = useState<any>([])
  const [projectIds, setProjectIds] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    // Get all shares
    setLoading(true)
    let data: any[] = []
    const reference = ref(database, 'shares')
    onValue(reference, (snap) => {
      snap.forEach((share) => {
        if (share.val().owner == auth.currentUser?.uid) {
          data.push(share.val())
        }
      })
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
      setShares(data)
      window.setTimeout(() => {setLoading(false)}, 2500)
      })
  }, [])
  return (
    <div>
      {
        loading ? (
          <div style={{width: '100%', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Loader size='lg' speed='slow' />
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
