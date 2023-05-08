import { get, onValue, ref } from 'firebase/database';
import React, { Component, useEffect, useState } from 'react'
import { Divider, Table } from 'rsuite';
import EMPTY from '../../../../../assets/empty_img.png'
import { database } from '../../../../../firebase';
import { mainColors } from '../../../themes/colors';
import InvestmentsTable from './InvestmentsTable';
import SharesTable from './table/SharesTable';
import { FirebaseBundle, FirebaseMovie } from '../../../../../database/Objects';
import RedrumProLoader from '../../../components/RedrumProLoader';
interface IProps {
    userInvestments: any[],
    isMobile: boolean,
}

const ChartBody: React.FunctionComponent<IProps> = (props) => {
  const {userInvestments, isMobile} = props
  const [projects, setProjects] = React.useState<FirebaseBundle[] | null>(null)
  const [loading, setLoading] = React.useState(false)

  let movieData: number[] = []
  let data: FirebaseBundle[] = []
  useEffect(() => {
    setLoading(true)
    userInvestments.forEach((inv) => {
      const reference = ref(database, 'projects/' + inv.project)
      get(reference).then((snap) => {
        data.push(snap.val())
        movieData.push(snap.val().movies)
      })
    })
    window.setTimeout(() => {

      setProjects(data)
      setLoading(false)
    }, 1500)
  }, [])

  const styles = {
    wrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    txtWrap: {
        marginRight: isMobile ? 0 : 250,
    },
    emptyTitle: {
        fontSize: 22.5,
        color: mainColors.dark,
        lineHeight: 1,
        marginBottom: 10,
    },
    image: {
        width: isMobile ? 75 : 150,
        height: isMobile ? 75 : 150,
        margin: 'auto',
    }
}
  return (
    <>
      {loading ? (<RedrumProLoader/>) : projects === null ? null :  (
        <>
        {userInvestments.length > 0 ? (
          <>
          <SharesTable userInvestments={userInvestments} projects={projects} movieIds={movieData}/>
          {/*

            <InvestmentsTable investments={userInvestments}/>
          */}
          </>
        ) : (
            <div style={styles.wrap} className={isMobile ? 'flex-column text-center' : ''}>
                <div style={styles.txtWrap}>
                    <h1 style={styles.emptyTitle}>
                        No investments yet
                    </h1>
                    {isMobile ? (
                      <img
                      className='mb-1'
                      style={styles.image}
                      src={EMPTY}
                      alt="Empty box showcasing you have no investments" />
                    ) : null}
                    <p>
                        You have not invested in a project yet. <br />
                        {
                            location.pathname == '/app/investments' ?
                                'You can find them down below or in the Dashboard.' :
                                'You can find projects under "Investments" or in the "Dashboard".'
                        }
                     </p>
                </div>
                {
                  isMobile ? null : (
                    <img style={styles.image} src={EMPTY} alt="Empty box showcasing you have no investments" />
                  )
                }

            </div>

      )} </>)}
    </>
  );
}



export default ChartBody;
