import React from 'react'
import { Button, Input, Message, Modal, useToaster } from 'rsuite'
import { FirebaseBundle } from '../../../../../database/Objects'
import createContractPdf from '../../../../../misc/CreateContractPdf'
import { mainColors } from '../../../themes/colors'
import PushThemes from '../../../themes/PushThemes'

interface IProps {
  project: FirebaseBundle,
  isOpen: boolean,
  closeModal: any,
}

const ContractModal: React.FunctionComponent<IProps> = (props) => {
  const {project, isOpen, closeModal} = props
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
      window.setTimeout(() => {
        toaster.clear()
      },8000)
    }
    else {
      createContractPdf(true, today, fullName, address)
    }
  }
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Modal.Header>
        <Modal.Title>
          Contract
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Before buying stocks for {project.name}, you will need to sign the related contract. <br/>
          Before signing we will need the current information from you:
        </p>
        <div>
          <label style={styles.label}>Full name:</label>
          <Input placeholder='Your full name' onChange={setFullName}/>
        </div>
        <div>
          <label style={styles.label}>Address:</label>
          <Input placeholder='Hauptstr. 26, 10827 Berlin' onChange={setAddress}/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <Button appearance='primary' className='r-btn r-main-btn' onClick={downloadContract}>
            Download Contract
          </Button>
          <Button appearance='primary' className='r-btn r-secondary-btn'>
            Cancel
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

export default ContractModal
