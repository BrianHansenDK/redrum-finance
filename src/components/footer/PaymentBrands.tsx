import React from 'react'
import {Icon} from '@rsuite/icons'
import PaypalCard from './svgs/PaypalCard'
import VisaSvg from './svgs/VisaSvg'
import MasterCardSvg from './svgs/MasterCardSvg'

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
