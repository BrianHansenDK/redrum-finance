import React from 'react';
import { useMediaQuery } from '../../../../misc/custom-hooks';
import ProjectShowcase from '../../components/ProjectShowcase';
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar';
import { PROJECTS } from '../dashboard/components/util';
import RadialChart from './components/RadialChart';
import Searchbar from './components/searchbar';
import { FirebaseUser } from '../../../../database/Objects';
import { auth, database, getCurrentUserFunction, getUserInvestmentsNew } from '../../../../firebase';
import RedrumProLoader from '../../components/RedrumProLoader';
import NoInvestmentsCard from '../databank/components/NoInvestmentsCard';
import { get, ref } from 'firebase/database';

const InvestmentPage = ({en} : {en: boolean}) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const [currentUser, setCurrentUser] = React.useState<FirebaseUser | null>(null);
  const [userInvestments, setUserInvestments] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  let data: any[] = []
  React.useEffect(() => {
    getCurrentUserFunction(auth.currentUser?.uid, setCurrentUser, setLoading);
    setLoading(true)
    const reference = ref(database, 'investments/')
    get(reference).then((snap) => {
      snap.forEach((investment) => {
        if (investment.val().user_id == auth.currentUser?.uid) {
          data.push(investment.val())
        }
      })
      setUserInvestments(data)
    }).finally(() => {
      setLoading(false)
    })
  }, [])
    return (
        <>
            {
            // When we have more projects <Searchbar />
            }
            {
             loading ? (<RedrumProLoader/>) : currentUser === null ? null : (
              <>
                {
                  userInvestments !== null && userInvestments.length > 0  ?(
                    <>
                      <RadialChart isMobile={isMobile} userInvestments={userInvestments} />
                      {/*<ProjectShowcase en={en} isMobile={isMobile} />*/}
                    </>
                  ) : (
                    <NoInvestmentsCard en={en} title={en ? 'No investments yet.' : 'Noch keine Investitionen.'}/>
                  )
                }

              </>
             )
            }


        </>
    )
}

export default InvestmentPage
