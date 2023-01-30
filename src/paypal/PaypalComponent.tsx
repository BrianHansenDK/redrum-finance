import React, { useEffect } from 'react'
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { mainColors } from '../routes/inside-app/themes/colors';
import { Message, useToaster } from 'rsuite';

interface IProps {
  amountToPay: any,
  updateUserBalance: any,
  closeModal: any,
}
const PaypalComponent: React.FunctionComponent<IProps> = (props) => {
  const {amountToPay, updateUserBalance, closeModal} = props

  const toaster = useToaster()

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
      updateUserBalance().then(() => {
        // Notify user of succesfull payment
        toaster.push(<Message showIcon type='success'>
          Your payment has been recieved and {amountToPay}€ was successfully added to yyour account
        </Message>, {placement: 'topCenter'})
        closeModal()
      })
    });
}

  return (
    <PayPalScriptProvider
    options={{
      "client-id": "ARX5PmQchcq7C5ARza5dhdEI3IDkxN_K0OSp667F8HTLQIf9AKPKNbHGyymNbx5JBgeXsELnDKRV-MDm",
      currency: "EUR"
     }}
    >
      <PayPalButtons
      style={{ layout: 'vertical', color:  'blue', shape:  'rect', label:  'paypal'  }}
      forceReRender={[amountToPay]}
      createOrder={makeOrder}
            onApprove={approvePayment}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalComponent