import { ref, update } from '@firebase/database'
import React from 'react'
import { Button, ButtonGroup, Message, useToaster } from 'rsuite'
import { auth, database } from '../../../../firebase'

interface IProps {
  user: any,
  available: number,
  wished: any,
  closeModal: any,
  openRModal: any,
}
const WithdrawMoneyBtn: React.FunctionComponent<IProps> = (props) => {
  const {user, available, wished, closeModal, openRModal} = props
  const toaster = useToaster()
  const updateUser = () => {
    const reference = ref(database, 'users/' + auth.currentUser?.uid)
    let updates: any = {}
    updates['money_available'] = user.money_available - wished
    return update(reference, updates)
  }
  const handleSubmit = () => {
    if (wished > available) {
      toaster.push(
        <Message showIcon type='error'>
          You cannot wish for more than you have available in your account.... <br/>
          {typeof parseInt(wished)} : {parseInt(wished)}
        </Message>
      )
    }
    else {
      updateUser().then(() => {
        toaster.push(
          <Message showIcon type='info'>
            {wished}€ has been removed from your account balance and will be transfered to your within 5 week days.
          </Message>
        )
        closeModal()
        openRModal()
      })
    }
  }
  return (
    <ButtonGroup style={styles.wrap}>
      <Button appearance='primary' style={styles.btn} onClick={handleSubmit} size='lg'>
        Submit
      </Button>
      <Button appearance='ghost' style={styles.btn} onClick={closeModal} size='lg'>
        Close
      </Button>
    </ButtonGroup>
  )
}

const styles = {
  wrap: {
    width: '100%',
    boxShadow: '0 3px 6px 0 rgba(0,0,29, .15)',
    borderRadius: 7.5,
  },
  btn: {
    width: '50%',
  }
}

export default WithdrawMoneyBtn
