import { onValue, ref } from 'firebase/database'
import React, { Component } from 'react'
import { InputNumber, Modal } from 'rsuite'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import ModalHeader from 'rsuite/esm/Modal/ModalHeader'
import ModalTitle from 'rsuite/esm/Modal/ModalTitle'
import { database, getCurrentUser } from '../../../../firebase'
import DepositMoneyInput from './DepositMoneyInput'

interface IProps {
  userId: any,
  visible: boolean,
  close: any,
}

interface IState {
  user: any,
}

class DepositMoneyModal extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount(): void {
    const reference = ref(database, 'users/' + this.props.userId)
    onValue(reference, (snap) => {
    snap.forEach((user) => {
      this.setState((_prev: any) => ({
        user: snap.val()
      }))
    })
  })
  }

  render() {
    return (
      <Modal open={this.props.visible} onClose={this.props.close} >
        <ModalHeader>
          <ModalTitle>Deposit</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h1>
            User: {this.state.user?.username ? this.state.user?.username : 'Loading...'}
          </h1>
          <p>
            Send us a request for the amount of money you wish to withdraw from your account. <br/>
            If you have the wished amount available in your account, we will be sure to send you the amount as soon as possible. <br/>
          </p>
          <DepositMoneyInput available={this.state.user?.money_available}/>
        </ModalBody>
      </Modal>
      )
  }
}

export default DepositMoneyModal
