import { onValue, ref } from 'firebase/database'
import React, { Component, useState } from 'react'
import { InputNumber, Modal } from 'rsuite'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import ModalHeader from 'rsuite/esm/Modal/ModalHeader'
import ModalTitle from 'rsuite/esm/Modal/ModalTitle'
import { database, getCurrentUser } from '../../../../firebase'
import WithdrawMoneyInput from './WithdrawMoneyInput'
import WithdrawPhoto from '../../../../assets/withdraw_img.svg'
import { mainP } from '../../themes/textStyles'
import ModalFooter from 'rsuite/esm/Modal/ModalFooter'
import WithdrawMoneyBtn from './WithdrawMoneyBtn'
import WithdrawMoneyModalBody from './WithdrawMoneyModalBody'

interface IProps {
  userId: any,
  visible: boolean,
  closeModal: any,
  openRModal: any,
}

interface IState {
  user: any,
}

class WithdrawMoneyModal extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      user: null,
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
      <Modal open={this.props.visible} onClose={this.props.closeModal} >
        <WithdrawMoneyModalBody
        user={this.state.user}
        closeModal={this.props.closeModal}
        openRModal={this.props.openRModal}
        />
      </Modal>
      )
  }
}

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: '2rem',
  }
}

export default WithdrawMoneyModal
