import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Divider } from 'rsuite';
import { database, getAllUserObjectsInfo, userRef } from '../../../../../../../firebase';
import bundleStrings from '../../../../../../../library/string/Bundle';
import { useMediaQuery } from '../../../../../../../misc/custom-hooks';
import { mainColors } from '../../../../../themes/colors';
import CoInvestorCard from './CoInvestorCard';
interface IProps {
  projectId: string,
  en: boolean,
 }

const CoInvestorsSection: React.FunctionComponent<IProps> = (props) => {
  const {projectId, en} = props
  const [projectInvestments, setProjectInvestments] = useState<any>([])
  const isMobile = useMediaQuery('(max-width: 1100px)')
    useEffect(() =>  {
      const investRef = ref(database, 'investments/')
      onValue(investRef, (snap) => {
        let data: any[] = []
        snap.forEach((inv) => {
          if (inv.val().project == projectId) {
            data.push(inv.val())
          }
        })
        setProjectInvestments(data)
      })
    }, [])

    const styles = {
      wrap: {
          marginTop: 50,
          width: isMobile ? '100%' : '80%',
          marginBottom: 75,
      },
      title: {
          marginBottom: 15,
          color: mainColors.dark,
          fontSize: isMobile ? 25 : 35,
      },
      divider: {
          marginBottom: isMobile ? 15 : 50,
          backgroundColor: mainColors.dark,
          opacity: isMobile ? 0 : 1,
      },
      nonTitle: {
        color: mainColors.dark,
        opacity: .75,
        fontSize: isMobile ? 20 : 30,
      }
  }
        return (
            <div style={styles.wrap}>
                <h2 style={styles.title}>{en ? bundleStrings.coInvEN.title : bundleStrings.coInvDE.title}</h2>
                <Divider style={styles.divider} />
                {
                  projectInvestments.length > 0 ? (
                    <CoInvestorCard
                  amount={projectInvestments[projectInvestments.length - 1]?.amount}
                  userId={projectInvestments[projectInvestments.length - 1]?.creator}
                  investments={projectInvestments}
                  en={en}
                  isMobile={isMobile}
                  />
                  ) : (
                    <h1 style={styles.nonTitle}>
                      No investments yet.
                    </h1>
                  )
                }

            </div>
        );
}

export default CoInvestorsSection;
