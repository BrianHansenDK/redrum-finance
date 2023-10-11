import React from 'react'
import NoInvestmentsCard from '../databank/components/NoInvestmentsCard';

interface IProps {
    en: Boolean
}

const CashBonusPage = (props: IProps) => {
    const {en} = props;
  return (
    <NoInvestmentsCard en={en} bonus 
    title={
        en? 'Invite friends and recieve 10% cash' :
        'Jetzt Freunde einladen und 10% Cash erhalten'}
    />
  )
}

export default CashBonusPage