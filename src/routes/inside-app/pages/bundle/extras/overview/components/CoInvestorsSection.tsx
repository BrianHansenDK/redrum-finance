import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Divider } from 'rsuite';
import { database, getAllUserObjectsInfo, userRef } from '../../../../../../../firebase';
import bundleStrings from '../../../../../../../library/string/Bundle';
import { mainColors } from '../../../../../themes/colors';
import CoInvestorCard from './CoInvestorCard';
interface IProps {
  projectId: string,
  en: boolean,
 }

interface IState {
    userData: any,
    projectInvestments: any[],
}

const CoInvestorsSection: React.FunctionComponent<IProps> = (props) => {
  const {projectId, en} = props
  const [projectInvestments, setProjectInvestments] = useState<any>([])
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
                  />
                  ) : (
                    <h1>
                      No investments yet.
                    </h1>
                  )
                }

            </div>
        );
}

const styles = {
    wrap: {
        marginTop: 50,
        width: '80%',
        marginBottom: 75,
    },
    title: {
        marginBottom: 15,
        color: mainColors.dark,
    },
    divider: {
        marginBottom: 50,
        backgroundColor: mainColors.dark
    },
}

export default CoInvestorsSection;
