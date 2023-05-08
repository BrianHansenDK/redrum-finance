import React, { useEffect } from 'react'
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { mainColors } from '../routes/inside-app/themes/colors';
import { Message, useToaster } from 'rsuite';

interface IProps {
  amountToPay: any,
  updateUserBalance: any,
  closeModal: any,
  inModal: boolean,
  makeOrderFromOutside?: any,
  fromOutside?: boolean,
  approveFromOutside?: any,
}
const PaypalComponent: React.FunctionComponent<IProps> = (props) => {
  const {amountToPay, updateUserBalance, closeModal, inModal,
  makeOrderFromOutside, fromOutside, approveFromOutside} = props

  const toaster = useToaster()

  const testKey = "Ac-WLnlqTQB5NRhVK_KwJxjwqBVZ4K1M1UO2vlHD9oLtKz32JP7jDZ2ICqGxJWnQiOY0NqXcSo-86km0"

  // Function for Paypal order creation
  const makeOrder = (data:any, actions:any) => {
    return actions.order
        .create({
            purchase_units: [
                {
                    amount: {
                        value: amountToPay,
                    },
                },
            ],
        })
        .then((orderId:any) => {
            // Your code here after create the order
            return orderId;
        }); }

  function approvePayment (data:any, actions:any) {
    return actions.order.capture().then(function () {
      // Update users balance
      updateUserBalance()
        // Notify user of succesfull payment
        toaster.push(<Message showIcon type='success' duration={8000} closable>
          Your payment has been recieved and {amountToPay}€ was successfully added to your account
        </Message>, {placement: 'topCenter'})
        if (inModal) {closeModal()}
    });
}

  return (
    <PayPalScriptProvider
    options={{
      "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID /*testKey*/,
      currency: "EUR"
     }}
    >
      <PayPalButtons
      style={{ layout: 'vertical', color:  'blue', shape:  'rect', label:  'paypal'  }}
      forceReRender={[amountToPay]}
      createOrder={fromOutside ? makeOrderFromOutside : makeOrder}
      onApprove={fromOutside ? approveFromOutside : approvePayment}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalComponent
