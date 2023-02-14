import { onValue, ref, update } from '@firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Loader, Message, useToaster } from 'rsuite'
import { auth, createWithdrawalRequest, database } from '../../../../firebase'
import PushThemes from '../../themes/PushThemes'

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
  const [requests, setRequests] = useState<Array<any>>([])
  const [loading, setLoading] = useState<boolean>(false)

  // Get current requests
  useEffect(() => {
    setLoading(true)
    const refe = ref(database, 'requests/')
    let data: any[] = []
    onValue(refe, (snap) => {
      snap.forEach((req) => {data.push(req.val())})
    })
    setRequests(data)
    window.setTimeout(() => {setLoading(false)}, 1000)
  }, [])

  const updateUser = () => {
    const reference = ref(database, 'users/' + auth.currentUser?.uid)
    let updates: any = {}
    updates['money_available'] = user.money_available - wished
    return update(reference, updates)
  }
  const handleSubmit = () => {
    if (wished > available) {
      toaster.push(
        <Message type='error' style={PushThemes.pushRed}>
          <span style={PushThemes.txt}>You cannot wish for more than you have available in your account.... <br/></span>
          {typeof parseInt(wished)} : {parseInt(wished)}
        </Message>
      )
    }
    else {
      createWithdrawalRequest(requests.length, auth.currentUser!.uid, wished, Date.now())
      updateUser().then(() => {
        toaster.push(
          <Message type='info' style={PushThemes.pushBlue}>
            <span style={PushThemes.txt}>
              {wished}€ has been removed from your account balance and will be transfered to your within 5 week days.
            </span>
          </Message>
        )
        closeModal()
        openRModal()
      })
    }
  }
  return (
    <ButtonGroup style={styles.wrap}>
      <Button appearance='primary' style={styles.btn} onClick={handleSubmit} size='lg' disabled={loading}>
        {loading ? (<Loader size='sm' speed='slow' />) : 'Submit'}
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
