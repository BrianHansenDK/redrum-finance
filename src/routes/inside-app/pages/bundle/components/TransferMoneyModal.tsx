import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Modal } from 'rsuite'
import { auth, userRef } from '../../../../../firebase'
import { bottomBtns, btnsCon } from '../../../themes/modalStyles'
import { mainP, profileCardTitle, profileCardUnderTitle } from '../../../themes/textStyles'
import OOM from '../../../../../assets/out_of_money.svg'

interface IProps {
    close: any,
    visible: any
}

const TransferMoneyModal: React.FunctionComponent<IProps> = (props) => {
    const { close, visible } = props
    const userId = auth.currentUser?.uid
    const [username, setUsername] = useState<any>(null)
    const [available, setAvailable] = useState<any>(0)
    useEffect(() => {
        userRef(userId, '/username', setUsername)
        userRef(userId, '/money_available', setAvailable)
    })
    return (
        <Modal onClose={close} open={visible}>
            <Modal.Header>
                <Modal.Title>
                    <h1 style={profileCardTitle} className='text-center'>
                        {available == null ? 'No money transfered' : 'Out of money'}
                    </h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column align-center'>
                <img src={OOM} alt="Businessman with empty pockets." width={200} height={200} className='mb-2' />

                <p style={mainP} className='text-center'>
                    {available !== null ? 'Your account has run out of money. ' : 'You have not yet transfered money to your account. '}
                    To transfer money to your account, you simply need to transfer the wished amount to our Paypal account. <br /> <br />
                    Please note that for us to identify you, you need to add your username as a comment for the transfer.
                    <span style={styles.bold}> Don't worry!</span> Your username is unique 😁👍 <br /> <br />
                    Your username: <span style={styles.bold}>{username}</span>
                </p>
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
    bold: {
        fontWeight: '700',
    }
}

export default TransferMoneyModal