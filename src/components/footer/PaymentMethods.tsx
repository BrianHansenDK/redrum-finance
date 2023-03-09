import React from 'react'
import { FlexboxGrid } from 'rsuite'
import PaymentBrands from './PaymentBrands'

interface IProps {en:boolean, colspan: any}
const PaymentMethods = (props: IProps) => {
  const {en, colspan} = props
  return (
    <FlexboxGrid.Item colspan={colspan} className='right-side'>
      <h2 className="title">
        {en ? 'Our Payment Methoods' : 'Unsere Zahlungsmethoden'}
      </h2>
      <PaymentBrands/>
      <p className="description">
        {
        en ? 'Including VAT, plus service fee and management fee' :
        'Inklusive Mehrwertsteuer, zuzüglich Servicegebühr und Verwaltungsgebühr'
        }
      </p>
    </FlexboxGrid.Item>
  )
}

export default PaymentMethods
