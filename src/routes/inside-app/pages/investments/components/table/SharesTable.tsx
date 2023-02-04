import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { auth, database } from '../../../../../../firebase'
import ProjectTitle from './ProjectTitle'
import ShareRow from './ShareRow'
import ShareTitles from './ShareTitles'
import './table.scss'

const SharesTable = () => {
  const [shares, setShares] = useState<any>(null)
  const [investments, setInvestments] = useState<any>([])
  const [projectIds, setProjectIds] = useState<any>([])
  useEffect(() => {
    // Get all shares
    let data: any[] = []
    const reference = ref(database, 'shares')
    onValue(reference, (snap) => {
      snap.forEach((share) => {
        if (share.val().owner == auth.currentUser?.uid) {
          data.push(share.val())
        }
      })
    }, {onlyOnce: true})
    // Set shares
    setShares(data)
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
      }, {onlyOnce: true})
  }, [])
  return (
    <div>
      {
        projectIds.map((projectId: any) => (
          <>
          <ProjectTitle projectId={projectId} key={projectId} />
          <table>
            <ShareTitles />
          {
            shares.map((share: any) => (
              <>
              {share.project == projectId ? (
                <ShareRow share={share} />
                ): null }
                </>
            ))
          }
          </table>
          </>
        ))
      }
    </div>
  )
}

export default SharesTable
