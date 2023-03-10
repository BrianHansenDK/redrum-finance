import React from 'react'
import { Button, Input, Message, Modal, useToaster } from 'rsuite'
import { FirebaseBundle } from '../../database/Objects'
import createContractPdf from '../../misc/CreateContractPdf'
import { mainColors } from '../inside-app/themes/colors'
import PushThemes from '../inside-app/themes/PushThemes'

interface IProps {
  isOpen: boolean,
  closeModal: any,
  en: boolean,
}

const DocumentModal: React.FunctionComponent<IProps> = (props) => {
  const {isOpen, closeModal, en} = props
  const [fullName, setFullName] = React.useState<any>('')
  const [address, setAddress] = React.useState<any>('')
  const today = new Date(Date.now())
  const toaster = useToaster()
  const downloadContract = () => {
    const statements = [
      fullName == '',
      fullName.split(' ').length < 2,
      address == '',
      address.split(' ').length < 4
    ]
    const errorMessage = statements[0] ? 'Name not provided.' :
    statements[1] ? 'Full name is not in correct format.' :
    statements[2] ? 'Address not provided.' :
    statements[3] ? 'Adress is not in correct format. Format Example: (street_name 10, 0000 city_name)' :
    ''

    if (statements[0] || statements[1] || statements[2] || statements[3]) {
      toaster.push(
        <Message style={PushThemes.pushRed} type='error'>
          <p style={PushThemes.txt}>Error: {errorMessage}</p>
        </Message>, {placement: 'bottomCenter'}
      )
     /* window.setTimeout(() => {
        toaster.clear()
      },8000)*/
    }
    else {
      createContractPdf(en, today, fullName, address)
    }
  }
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Modal.Header>
        <Modal.Title>
          {en ? 'Document' : 'Dokument'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {en ?
          'Before downloading the Document insert your full name and your address below:' :
          'Bevor Sie das Dokument herunterladen, geben Sie unten Ihren vollständigen Namen und Ihre Adresse ein:'
          }
        </p>
        <div>
          <label style={styles.label}>{en ? 'Full name' : 'Voller Name'}:</label>
          <Input placeholder='Your full name' onChange={setFullName}/>
        </div>
        <div>
          <label style={styles.label}>{en ? 'Address' : 'Adresse'}:</label>
          <Input placeholder='Hauptstr. 26, 10827 Berlin' onChange={setAddress}/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <Button appearance='primary' className='r-btn r-main-btn' onClick={downloadContract}>
            {en ? 'Download Document' : 'Dokument herunterladen'}
          </Button>
          <Button appearance='primary' className='r-btn r-secondary-btn' onClick={closeModal}>
            {en ? 'Back' : 'Zurück'}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

const styles = {
  label: {
    marginTop: 10,
    marginBottom: 5,
    color: mainColors.dark
  }
}

export default DocumentModal
