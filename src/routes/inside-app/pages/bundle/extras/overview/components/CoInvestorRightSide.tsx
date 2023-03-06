import React, { useState } from 'react'
import bundleStrings from '../../../../../../../library/string/Bundle'
import { mainColors } from '../../../../../themes/colors'

interface IProps {
  amount: number,
  userName: any,
  investments: any[],
  en: boolean,
  isMobile: boolean,
 }

const CoInvestorRightSide: React.FunctionComponent<IProps> = (props) => {
  const { amount, userName, investments, en, isMobile } = props

    return (
        <div>
            <h3 style={styles.name}
            className={isMobile ? 'text-start' : ''}>
                {userName}
            </h3>
            <p style={styles.others}>
                {investments?.length} {en ? bundleStrings.coInvEN.content : bundleStrings.coInvDE.content}
            </p>
            <p style={styles.amount}>
                {amount} €
            </p>
        </div>
    )
}

const styles = {
    name: {
        fontSize: 25,
        fontWeight: '700',
        color: mainColors.dark,
        lineHeight: 1,
    },
    others: {
        fontSize: 18.5,
        color: mainColors.dark,
        marginTop: 8,
        opacity: .8,
        lineHeight: 1,
    },
    amount: {
        fontSize: 30,
        letterSpacing: 2.5,
        color: mainColors.dark,
        marginTop: 12.5,
        lineHeight: 1,
    }
}

export default CoInvestorRightSide
