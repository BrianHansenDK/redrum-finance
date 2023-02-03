import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, InputNumber, Modal } from 'rsuite'
import { auth, database, userRef } from '../../../../../firebase'
import { bottomBtns, btnsCon } from '../../../themes/modalStyles'
import { mainP, profileCardTitle, profileCardUnderTitle } from '../../../themes/textStyles'
import OOM from '../../../../../assets/out_of_money.svg'
import INV from '../../../../../assets/investment-growth-svgrepo-com.svg'
import PaypalComponent from '../../../../../paypal/PaypalComponent'
import { ref, update } from 'firebase/database'

interface IProps {
    close: any,
    visible: any,
}

const TransferMoneyModal: React.FunctionComponent<IProps> = (props) => {
    const { close, visible } = props
    const userId = auth.currentUser?.uid
    const [username, setUsername] = useState<any>(null)
    const [available, setAvailable] = useState<any>(0)
    const [completion, setCompletion] = useState<any>(0)
    const [payAmount, setPayAmount] = useState<any>(0)
    useEffect(() => {
        userRef(userId, '/username', setUsername)
        userRef(userId, '/money_available', setAvailable)
        userRef(userId, '/completion', setCompletion)
    })

    // Update user balance when payment is approved
    const updateUserBalance = () => {
      const reference = ref(database, 'users/' + userId)
      const updates:any = {}
      updates['/money_available'] = available !== null ? parseInt(available) + parseInt(payAmount) : parseInt(payAmount)
      updates['/completion'] = available !== null ? completion : completion + 50
      return update(reference, updates)
    }

    return (
        <Modal onClose={close} open={visible}>
            <Modal.Header>
                <Modal.Title style={profileCardTitle} className='text-center bold'>
                        {location.pathname.includes('profile') ? 'Add to your balance' : available == null ? 'No money transfered' : 'Out of money'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column align-center'>
                <img src={location.pathname.includes('profile') ? INV : OOM} alt="Businessman with empty pockets." width={200} height={200} className='mb-2' />
                {
                  location.pathname.includes('profile') ? (
                    <p style={mainP} className='text-center mb-2'>
                    To transfer money to your account, you simply need to transfer the wished amount via Paypal or Credit Card. <br /> <br />
                    </p>
                  ) : (
                    <p style={mainP} className='text-center mb-2'>
                      {available !== null ? 'Your account has run out of money. ' : 'You have not yet transfered money to your account. '}
                      To transfer money to your account, you simply need to transfer the wished amount via Paypal or Credit Card. <br /> <br />
                    </p>
                  )
                }

                <InputNumber style={styles.input} placeholder='Select wished amount' onChange={setPayAmount} />
                <PaypalComponent
                amountToPay={payAmount.toString()}
                updateUserBalance={updateUserBalance}
                closeModal={close}
                />
            </Modal.Body>
            <Modal.Footer>
                    <Button style={{width: '100%'}} color='blue' appearance='ghost' onClick={close}>
                        Go back
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

const styles = {
    input: {
        width: 300,
        marginBottom: '2rem',
    },

}

export default TransferMoneyModal
