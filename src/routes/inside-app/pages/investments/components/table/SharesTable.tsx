import React, { useEffect, useState } from 'react'
import { FirebaseBundle, FirebaseInvestment } from '../../../../../../database/Objects'
import { getProjectCountWithProjects } from '../../../../../../firebase'
import RedrumProLoader from '../../../../components/RedrumProLoader'
import './table.scss'
import ShareTableInner from './ShareTableInner'

interface IProps {
  userInvestments: FirebaseInvestment[],
  projects: FirebaseBundle[],
  movieIds: number[]
}

const SharesTable = (props: IProps) => {
  const {userInvestments, projects, movieIds} = props;
  const [projectsCount, setProjectsCount] = React.useState<number>(0)
  const [uniqueProjects, setUniqueProjects] = React.useState<FirebaseBundle[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  /*useEffect(() => {
    userInvestments.forEach(inv => {
      setSum(sum + inv.amount)
      console.log(`Sum: ${sum}`)
    });
    setLoading(true)
    // Get all shares
    let lst: FirebaseShare[] = []
    let data: Array<FirebaseShare> = []

    const reference = ref(database, 'shares')
    get(reference).then((snap) => {
      snap.forEach((share) => {
        if (share.val().owner === auth.currentUser?.uid) {
          data.push(share.val())
        }
      })
      data.map((share) => {
        console.log(share.owner)
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
      }
    })
    }).finally(() => setShares([lst[0]] /*.slice(0,3)))
    // Set shares
    // Get investments
    let invData: any[] = []
    let projectData: any[] = []
    const shareRef = ref(database, 'investments')
    get(shareRef).then((snap) => {
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
      }).finally(() => {
        setLoading(false)
      })

      console.log(lst)

  }, []) */

  React.useEffect(() => {
    getProjectCountWithProjects(setProjectsCount, projects, setUniqueProjects, setLoading)
    console.log(projectsCount)
  }, [])
  return (
    <div>
        {loading ? (
          <div style={{width: '100%', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <RedrumProLoader/>
          </div>
        ) : (
          <>
          {projects !== null && userInvestments !== null && uniqueProjects !== null &&
            userInvestments.map((investment: FirebaseInvestment, index) => (
              <div key={investment.id}>
                {(index >= projectsCount)  ? null :
                (
                  <ShareTableInner project={uniqueProjects[index]}/>
                )}

          </div>
        ))
      }
      </>
        )}
    </div>
  )
}

export default SharesTable
