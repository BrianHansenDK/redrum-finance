import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, InputNumber, Modal } from 'rsuite'
import { auth, createDepositNotification, database, getCurrentUserFunction, userRef } from '../../../../../firebase'
import { bottomBtns, btnsCon } from '../../../themes/modalStyles'
import { mainP, profileCardTitle, profileCardUnderTitle } from '../../../themes/textStyles'
import OOM from '../../../../../assets/out_of_money.svg'
import INV from '../../../../../assets/investment-growth-svgrepo-com.svg'
import PaypalComponent from '../../../../../paypal/PaypalComponent'
import { ref, update } from 'firebase/database'
import { FirebaseUser } from '../../../../../database/Objects'
import RedrumProLoader from '../../../components/RedrumProLoader'

interface IProps {
    close: any,
    visible: any,
    navPressed: boolean
}

const TransferMoneyModal: React.FunctionComponent<IProps> = (props) => {
    const { close, visible, navPressed } = props
    const userId = auth.currentUser?.uid
    const [user, setUser] = React.useState<FirebaseUser | null>(null)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [payAmount, setPayAmount] = useState<any>(0)
    useEffect(() => {
      getCurrentUserFunction(userId, setUser, setLoading)
    }, [])

    // Update user balance when payment is approved
    const updateUserBalance = () => {
      const haveAllInfo =
      (!user?.company_account && ((user?.full_name !== "" && user!.full_name.split(" ").length > 1) && user?.address !== ""
      && user?.birth_date !== "" && user?.title !== undefined
      && user.phone_number && user.country !== "")) || (
        (user?.company_account) && (user?.full_name !== "" && user?.address !== ""
        && user?.birth_date !== "" && user?.title !== undefined
        && user.phone_number && user.country !== ""
        && user.company_name !== undefined && user.role !== "" && user.company_address !== undefined ))

        if (user !== null) {
          // Update account balance
          const reference = ref(database, 'users/' + userId)
          const updates:any = {}
          updates['/money_available'] = user.money_available + parseInt(payAmount)
          update(reference, updates)

          // Create a notification
          createDepositNotification(user.id);
        }
    }

    return (
        <Modal onClose={close} open={visible}>
            <Modal.Header>
                <Modal.Title style={profileCardTitle} className='text-center bold'>
                        {location.pathname.includes('profile') || navPressed ? 'Add to your balance' : user?.money_available == 0 ? 'No money transfered' : 'Out of money'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column align-center'>
              {loading || user === null ? (
                <RedrumProLoader/>
              ) : (
                <>
                <img src={location.pathname.includes('profile') || navPressed ? INV : OOM} alt="Businessman with empty pockets." width={200} height={200} className='mb-2' />
                {
                  location.pathname.includes('profile') || navPressed ? (
                    <p style={mainP} className='text-center mb-2'>
                    To transfer money to your account, you simply need to transfer the wished amount via Paypal or Credit Card. <br /> <br />
                    </p>
                  ) : (
                    <p style={mainP} className='text-center mb-2'>
                      {'You have no money in your account balance. '}
                      To transfer money to your account, you simply need to transfer the wished amount via Paypal or Credit Card. <br /> <br />
                    </p>
                  )
                }
                <InputNumber style={styles.input} placeholder='Select wished amount' onChange={setPayAmount} />
                <PaypalComponent
                inModal
                amountToPay={payAmount.toString()}
                updateUserBalance={updateUserBalance}
                closeModal={close}
                /></>)}
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
