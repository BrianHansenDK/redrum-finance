import React, {FunctionComponent, useState} from 'react'
import { Button, InputNumber, Message, useToaster } from 'rsuite'
import mainShadows from '../../themes/shadows'

interface IProps {available: number}
const DepositMoneyInput: FunctionComponent<IProps> = (props) => {
  const {available} = props
  const [amount, setAmount] = useState<any>(0)
  const toaster = useToaster()
  const handleSubmit = () => {
    if (amount > available) {
      toaster.push(
        <Message showIcon type='error'>
          You cannot wish for more than you have available in your account.... <br/>
          {typeof parseInt(amount)} : {parseInt(amount)}
        </Message>
      )
    }
    else {
      toaster.push(
        <Message showIcon type='success'>
          This is possible
        </Message>
      )
    }
  }
  return (
    <div>
      <InputNumber placeholder='Set number here' onChange={setAmount} />
      <Button style={styles.btn} onClick={handleSubmit} appearance='primary' >
        Submit
      </Button>
    </div>
  )
}

const styles = {
  btn: {
    marginTop: 25,
    boxShadow: mainShadows.navBar
  }
}

export default DepositMoneyInput
