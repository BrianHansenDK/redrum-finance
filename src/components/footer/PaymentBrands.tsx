import React from 'react'
import {Icon} from '@rsuite/icons'
import PaypalCard from '../../assets/svgs/PaypalCard'
import VisaSvg from '../../assets/svgs/VisaSvg'
import MasterCardSvg from '../../assets/svgs/MasterCardSvg'

const PaymentBrands = () => {
  return (
    <div className='logo-cards'>
      <div className="logo-card">
        <Icon as={PaypalCard} width="3em" height="2em"/>
      </div>
      <div className="logo-card">
        <Icon as={VisaSvg} width="3em" height="2em"/>
      </div>
      <div className="logo-card">
        <Icon as={MasterCardSvg} width="3em" height="2em"/>
      </div>
    </div>
  )
}

export default PaymentBrands
