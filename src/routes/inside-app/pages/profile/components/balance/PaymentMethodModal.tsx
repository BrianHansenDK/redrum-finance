import React from 'react'
import { Button, Input, Message, Modal, Radio, RadioGroup, useToaster } from 'rsuite'
import FormGroup from 'rsuite/esm/FormGroup'
import { FirebaseUser } from '../../../../../../database/Objects'
import PaypalIcon from '../../../../../../assets/svgs/PaypalCard'
import RedrumDeposits from '@rsuite/icons/legacy/GithubAlt'
import Exchange from '@rsuite/icons/legacy/Exchange'
import {Icon} from '@rsuite/icons'
import { ref } from 'firebase/database'
import { database } from '../../../../../../firebase'
import PushThemes from '../../../../themes/PushThemes'

interface IProps {
  currentUser: FirebaseUser,
  closeModal: Function,
  isOpen: boolean,
  isPayPal: boolean,
  withdrawalIsPaypal: boolean,
  en: boolean
}

const PaymentMethodModal = (props: IProps) => {
  const {currentUser, isOpen, isPayPal, withdrawalIsPaypal, closeModal, en} = props
  const [currentMethod, setCurrentMethod] = React.useState(isPayPal ? 'PayPal' : 'Redrum_Pro_deposit')
  const [currentWithdrawal, setCurrentWithdrawal] = React.useState(withdrawalIsPaypal ? 'PayPal' : 'Bank transfer')
  const [paypalEmail, setPayPalEmail] = React.useState(currentUser.paypal_account ? currentUser.paypal_account : '')
  const [bic, setBic] = React.useState(currentUser.bank_information ? currentUser.bank_information.split(' ')[1] : '')
  const [iban, setIban] = React.useState(currentUser.bank_information ? currentUser.bank_information.split(' ')[3] : '')

  const toaster = useToaster()

  function resetValues() {
    setPayPalEmail(currentUser.paypal_account ? currentUser.paypal_account : '')
    setBic(currentUser.bank_information ? currentUser.bank_information.split(' ')[1] : '')
    setIban(currentUser.bank_information ? currentUser.bank_information.split(' ')[3] : '')
  }

  function updateBankData() {
    const reference = ref(database, 'users/' + currentUser.id)
    const updates: any = {}
    // Update Payment method
    updates['/payment_method'] = currentMethod

    // Update withdrawal method
    if (currentWithdrawal === 'PayPal') {}
    const errorStatements = {
      noPayPalInput: currentWithdrawal === 'PayPal' && paypalEmail === '',
      paypalInvalid: currentWithdrawal === 'PayPal' && !(paypalEmail.split('@').length === 2 && paypalEmail.split('.').length === 2),
      noBicOrIBAN: currentWithdrawal === 'Bank transfer' && (bic === '' || iban === ''),
      falseBicOrIBAN: currentWithdrawal === 'Bank transfer' && (!(bic.split('').length === 5) || !(iban.split('').length === 7)),
    }
    const successStatements = {
      ppEdited: currentWithdrawal === 'PayPal' && (paypalEmail !== '' && paypalEmail !== currentUser.paypal_account),
      bankEdited: currentWithdrawal === 'Bank transfer' && (bic !== '' && iban !== ''),
    }
    const noError = ((!errorStatements.noPayPalInput && !errorStatements.paypalInvalid) ||
    (!errorStatements.noBicOrIBAN && !errorStatements.falseBicOrIBAN))
    // Generate error message if necessary
    const errorMessage =
      errorStatements.noPayPalInput ?
        en ? 'Please type the email address used for your PayPal account to continue.':
          'Bitte geben Sie die für Ihr PayPal-Konto verwendete E-Mail-Adresse ein, um fortzufahren.' :
      errorStatements.paypalInvalid ?
        en ? 'Please type a valid email address to continue.' :
        ' Bitte geben Sie eine gültige E-Mail-Adresse ein, um fortzufahren.' :
      errorStatements.noBicOrIBAN ?
        en ? 'Please fill out the necessary fields to continue: BIC, IBAN' :
          ' Bitte füllen Sie die erforderlichen Felder aus, um fortzufahren: BIC, IBAN' :
      en ? 'Please fill out BIC and IBAN correctly.' : 'Bitte BIC und IBAN korrekt ausfüllen.'

      console.log(noError)

      if (
        errorStatements.noPayPalInput || errorStatements.paypalInvalid ||
        errorStatements.noBicOrIBAN || errorStatements.falseBicOrIBAN) {
          toaster.push(
            <Message style={PushThemes.pushRed} type='error'>
              <p style={PushThemes.txt}> {errorMessage} </p>
            </Message>, {placement: 'bottomCenter'}
          )
          window.setTimeout(() => toaster.clear(), 10000)
        }
      if (noError) {
        toaster.push(
          <Message style={PushThemes.pushGreen} type='success'>
            <p style={PushThemes.txt}> Success </p>
          </Message>, {placement: 'bottomCenter'}
        )
        window.setTimeout(() => toaster.clear(), 10000)
      }
  }

  return (
    <Modal className='payment-method-modal' size='lg' onClose={() => closeModal()} open={isOpen}>
      <Modal.Header className='modal-header'>
        <Modal.Title className='modal-title'>
          {en ? 'Payment method' : 'Zahlungsmetode'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <h1 className="content-title">
          {en ?
          'Please choose preferable payment method when investing' :
          'Bitte wählen Sie bei der Investition die bevorzugte Zahlungsmethode'}
        </h1>
        <div className="radio-btns-con">
          {/* Payment method radio group */}
          <FormGroup controlId="payment_methods" >
            <RadioGroup name='payment_methods' value={currentMethod} onChange={(val:any, e:any) => {
              setCurrentMethod(val)
            }}>
              <div className="radio-btn-con">
                <Radio value={'PayPal'}>
                  <div className="radio-inner">
                    <p className='option-brand'>PayPal</p> <Icon as={PaypalIcon} className='icon'/>
                  </div>
                </Radio>
              </div>
              <div className="radio-btn-con">
                <Radio value={'Redrum_Pro_deposit'} >
                  <div className="radio-inner">
                    <p className='option-brand'>Redrum Pro deposit</p> <Icon as={RedrumDeposits} className='icon dark'/>
                  </div>
                </Radio>
              </div>
            </RadioGroup>
          </FormGroup>
          <h1 className="content-title">
          {en ?
          'Please choose preferable withdrawal method when requesting for cashout' :
          'Bitte wählen Sie die bevorzugte Auszahlungsmethode, wenn Sie eine Auszahlung beantragen'}
        </h1>
          {/* Withdrawal method radio group */}
          <FormGroup controlId='withdrawal-methods' className='withdrawal-methods'>
            <RadioGroup name='withdrawal-methods' value={currentWithdrawal} onChange={(val:any, e:any) => {
              setCurrentWithdrawal(val)
            }} className='withdrawal-methods-inner'>
            <div className="radio-btn-con">
                <Radio value={'PayPal'}>
                  <div className="radio-inner">
                    <p className='option-brand'>PayPal</p> <Icon as={PaypalIcon} className='icon'/>
                  </div>
                </Radio>
              </div>
              <div className="radio-btn-con">
                <Radio value={'Bank transfer'} >
                  <div className="radio-inner">
                    <p className='option-brand'>{en ? 'Bank transfer' : 'Banküberweisung'}</p> <Icon as={Exchange} className='icon'/>
                  </div>
                </Radio>
              </div>
            </RadioGroup>
          </FormGroup>
          {
            currentWithdrawal === 'PayPal' ? (
              <div className="withdrawal-input-element">
                <label className="input-label">PayPal Email</label>
                <Input
                placeholder={currentUser.paypal_account ? currentUser.paypal_account :
                   en ? 'Your PayPal email address' : 'Dein PayPal Email Adresse'}
                onChange={setPayPalEmail}
                />
              </div>
            ) : (
              <div className="withdrawal-input-element bank-details">
                <div className="item bic">
                  <label className="input-label">BIC:</label>
                  <Input
                  minLength={5}
                  maxLength={5}
                  placeholder={currentUser.payment_method ? currentUser.bank_information?.split(' ')[1] : '2841H'}
                  onChange={setBic}
                  />
                </div>
                <div className="item iban">
                  <label className="input-label">IBAN:</label>
                  <Input
                  minLength={7}
                  maxLength={7}
                  placeholder={currentUser.payment_method ? currentUser.bank_information?.split(' ')[3] : 'YU5654h'}
                  onChange={setIban}
                  />
                </div>
              </div>
            )
          }
          <p>
            {`PayPal: ${paypalEmail}`} <br/>
            {`BIC: ${bic}`} <br/>
            {`IBAN: ${iban}`}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className='modal-footer'>
        <Button
        className='r-btn r-main-btn'
        appearance='primary'
        onClick={() => updateBankData()}
        >
          {en ? 'Save' : 'Speichern'}
        </Button>
        <Button
        className='r-btn r-main-btn secondary'
        appearance='primary'
        onClick={() => resetValues()}
        >
          {en ? 'Reset' : 'zurücksetzen'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PaymentMethodModal
