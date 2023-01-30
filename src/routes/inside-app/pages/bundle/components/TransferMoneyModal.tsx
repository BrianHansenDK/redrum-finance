import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, InputNumber, Modal } from 'rsuite'
import { auth, database, userRef } from '../../../../../firebase'
import { bottomBtns, btnsCon } from '../../../themes/modalStyles'
import { mainP, profileCardTitle, profileCardUnderTitle } from '../../../themes/textStyles'
import OOM from '../../../../../assets/out_of_money.svg'
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
    const [payAmount, setPayAmount] = useState<any>(0)
    useEffect(() => {
        userRef(userId, '/username', setUsername)
        userRef(userId, '/money_available', setAvailable)
    })

    // Update user balance when payment is approved
    const updateUserBalance = () => {
      const reference = ref(database, 'users/' + userId)
      const updates:any = {}
      updates['/money_available'] = available !== null ? parseInt(available) + parseInt(payAmount) : parseInt(payAmount)
      return update(reference, updates)
    }

    return (
        <Modal onClose={close} open={visible}>
            <Modal.Header>
                <Modal.Title style={profileCardTitle} className='text-center bold'>
                        {available == null ? 'No money transfered' : 'Out of money'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column align-center'>
                <img src={OOM} alt="Businessman with empty pockets." width={200} height={200} className='mb-2' />

                <p style={mainP} className='text-center mb-2'>
                    {available !== null ? 'Your account has run out of money. ' : 'You have not yet transfered money to your account. '}
                    To transfer money to your account, you simply need to transfer the wished amount to our Paypal account. <br /> <br />
                </p>
                <InputNumber style={styles.input} placeholder='Select wished amount' onChange={setPayAmount} />
                <PaypalComponent
                amountToPay={payAmount.toString()}
                updateUserBalance={updateUserBalance}
                closeModal={close}
                />
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup style={btnsCon}>
                    <Button
                        style={bottomBtns}
                        as='a' href='https://www.paypal.com/' target='_blank' rel='noopener noreferrer'
                        color='blue' appearance='primary'
                    >
                        Go to Paypal
                    </Button>
                    <Button style={bottomBtns} color='blue' appearance='ghost' onClick={close}>
                        Go back
                    </Button>
                </ButtonGroup>
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
