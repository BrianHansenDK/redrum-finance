import React, { Component, useEffect, useState } from 'react'
import { auth, getUserInvestments, userRef } from '../../../../../firebase';
import { mainColors } from '../../../themes/colors';
import mainShadows from '../../../themes/shadows';
import ChartBody from './ChartBody';
import ChartTitle from './ChartTitle';



const RadialChart = () => {
    const [userInvestments, setUserInvestments] = useState<any[]>([])
    useEffect(() => {
      getUserInvestments(auth.currentUser?.uid, setUserInvestments)
    }, [auth.currentUser?.uid])
        return (
            <div style={styles.wrap} >
                <ChartTitle />
                <ChartBody userInvestments={userInvestments} />
            </div>
        );
}

const styles = {
    wrap: {
        width: '100%',
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 10,
        padding: '25px 20px',
        backgroundColor: '#fefefe',
        boxShadow: mainShadows.card,
    }
}

export default RadialChart;
