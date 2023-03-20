import React, { Component, useEffect, useState } from 'react'
import { auth, getUserInvestments, userRef } from '../../../../../firebase';
import { useMediaQuery } from '../../../../../misc/custom-hooks';
import { mainColors } from '../../../themes/colors';
import mainShadows from '../../../themes/shadows';
import ChartBody from './ChartBody';
import ChartTitle from './ChartTitle';



const RadialChart = ({isMobile} : {isMobile: boolean}) => {
    const [userInvestments, setUserInvestments] = useState<any[]>([])
    useEffect(() => {
      getUserInvestments(auth.currentUser?.uid, setUserInvestments)
    }, [auth.currentUser?.uid])

    const small = useMediaQuery('(max-width: 800px)')

    const styles = {
      wrap: {
          width: '100%',
          maxWidth: small ? '100%' : 800,
          marginTop: isMobile ? 0 : 50,
          marginBottom: 50,
          borderRadius: 10,
          padding: isMobile ? 20 : '25px 20px',
          backgroundColor: '#fefefe',
          boxShadow: mainShadows.card,
      }
  }
        return (
            <div style={styles.wrap} >
                <ChartTitle isMobile={isMobile} />
                <ChartBody
                userInvestments={userInvestments}
                isMobile={isMobile}/>
            </div>
        );
}

export default RadialChart;
