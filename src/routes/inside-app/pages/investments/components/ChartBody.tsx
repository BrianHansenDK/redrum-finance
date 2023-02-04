import { onValue, ref } from 'firebase/database';
import React, { Component, useEffect, useState } from 'react'
import { Divider, Table } from 'rsuite';
import EMPTY from '../../../../../assets/empty_img.png'
import { database } from '../../../../../firebase';
import { mainColors } from '../../../themes/colors';
import InvestmentsTable from './InvestmentsTable';
import SharesTable from './table/SharesTable';
interface IProps {
    userInvestments: any[]
}

const ChartBody: React.FunctionComponent<IProps> = (props) => {
  const {userInvestments} = props
  useEffect(() => {
  let data: any[] = []
  let movieData: any[] = []
    userInvestments.forEach((inv) => {
      const reference = ref(database, 'projects/' + inv.project)
      onValue(reference, (snap) => {
        data.push(snap.val())
        movieData.push(snap.val().movies)
      })
    })
  }, [])
  return (
    <>
      {
        userInvestments.length > 0 ? (
          <>
          <SharesTable />
          {/*

            <InvestmentsTable investments={userInvestments}/>
          */}
          </>
        ) : (
            <div style={styles.wrap}>
                <div style={styles.txtWrap}>
                    <h1 style={styles.emptyTitle}>
                        No investments yet
                    </h1>
                    <p>
                        You have not invested in a project yet. <br />
                        {
                            location.pathname == '/app/investments' ?
                                'You can find them down below or in the Dashboard.' :
                                'You can find projects under "Investments" or in the "Dashboard".'
                        }
                     </p>
                </div>
                <img style={styles.image} src={EMPTY} alt="Empty box showcasing you have no investments" />
            </div>
        )
      }
    </>
  );
}

const styles = {
    wrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    txtWrap: {
        marginRight: 250,
    },
    emptyTitle: {
        fontSize: 22.5,
        color: mainColors.dark,
        lineHeight: 1,
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
    }
}

export default ChartBody;
