import React from 'react';
import { useMediaQuery } from '../../../../misc/custom-hooks';
import ProjectShowcase from '../../components/ProjectShowcase';
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar';
import { PROJECTS } from '../dashboard/components/util';
import RadialChart from './components/RadialChart';
import Searchbar from './components/searchbar';
import { FirebaseUser } from '../../../../database/Objects';
import { auth, getCurrentUserFunction, getUserInvestmentsNew } from '../../../../firebase';
import RedrumProLoader from '../../components/RedrumProLoader';
import NoInvestmentsCard from '../databank/components/NoInvestmentsCard';

const InvestmentPage = ({en} : {en: boolean}) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const [currentUser, setCurrentUser] = React.useState<FirebaseUser | null>(null);
  const [userInvestments, setUserInvestments] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    getCurrentUserFunction(auth.currentUser?.uid, setCurrentUser, setLoading);
    getUserInvestmentsNew(auth.currentUser!.uid, setUserInvestments);
  }, [auth])
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
                      <RadialChart isMobile={isMobile} />
                      <ProjectShowcase en={en} isMobile={isMobile} />
                    </>
                  ) : (
                    <NoInvestmentsCard title={en ? 'No investments yet.' : 'Noch keine Investitionen.'}/>
                  )
                }

              </>
             )
            }


        </>
    )
}

export default InvestmentPage
