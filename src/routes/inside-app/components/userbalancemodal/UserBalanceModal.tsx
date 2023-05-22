import React from 'react'
import { Button, Modal } from 'rsuite';
import './userbalancemodal.scss'
import WithdrawMoneyModal from '../money/WithdrawMoneyModal';
import TransferMoneyModal from '../../pages/bundle/components/TransferMoneyModal';
import { auth } from '../../../../firebase';

interface IProps {
  en: boolean,
  open: boolean,
  close: any,
  balance: number
}

const UserBalanceModal = (props: IProps) => {
  const {en, open, close, balance} = props;

  // WithdrawalModal
  const [withdraw, setWithdraw] = React.useState<boolean>(false);
  const openW = () => setWithdraw(true); const closeW = () => setWithdraw(false);

  // TransferModal
  const [transfer, setTransfer] = React.useState<boolean>(false);
  const openT = () => setTransfer(true); const closeT = () => setTransfer(false);

  return (
    <>
      <Modal className='userbalance-modal' open={open} onClose={close} size='md'>
        <Modal.Header>
          <Modal.Title className='modal-title'>{en ? 'Balance' : 'Guthaben'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <h4 className="body-title">{en ? 'Currently available' : 'Derzeit verfügbar'}: {balance}€</h4>
          <div className="btns">
          <Button appearance='primary' className='r-btn r-main-btn' onClick={openT}>
            {en ? 'Deposit' : 'Einzahlen'}
          </Button>
          <Button className='r-btn r-secondary-btn' onClick={openW}>
            {en ? 'Withdraw' : 'auszahlen'}
          </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance='primary' className='r-btn r-main-btn' block onClick={close}>
            {en ? 'Close' : 'Schließen'}
          </Button>
        </Modal.Footer>
      </Modal>
      <WithdrawMoneyModal userId={auth.currentUser!.uid} visible={withdraw}
      closeModal={closeW} openRModal={openW}/>
      <TransferMoneyModal close={closeT} visible={transfer} navPressed={true}/>
    </>
  )
}

export default UserBalanceModal
