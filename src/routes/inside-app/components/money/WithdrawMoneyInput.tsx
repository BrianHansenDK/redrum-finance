import React, {FunctionComponent, useState} from 'react'
import { InputNumber } from 'rsuite'
import mainShadows from '../../themes/shadows'

interface IProps {setAmount: any}
const WithdrawMoneyInput: FunctionComponent<IProps> = (props) => {
  const {setAmount} = props
  return (
    <div>
      <InputNumber style={styles.input} placeholder='Set number here' onChange={setAmount} />
    </div>
  )
}

const styles = {
  input: {
    width: 300,
    marginBottom: '1rem',
  },
}

export default WithdrawMoneyInput
