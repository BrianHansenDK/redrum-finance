import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react'

interface IProps {product: any, fundingSource: any}
const PaypalCheckoutBtn = (props: IProps) => {
  const {product, fundingSource} = props;
  return (
    <PayPalButtons style={btnStyles}
    fundingSource={fundingSource}
    forceReRender={[fundingSource, btnStyles, product.price]}
    />
  )
}

const btnStyles: any = {
  color: 'blue',
  layout: 'horizontal',
  height: 48,
  tagline: false,
  shape: 'pill',
}

export default PaypalCheckoutBtn
