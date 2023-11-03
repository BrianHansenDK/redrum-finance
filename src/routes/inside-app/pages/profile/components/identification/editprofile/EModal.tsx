import React from 'react'
import { Button, Modal } from 'rsuite'
import './emodal.scss'

interface IProps {
  en: boolean, open: boolean, close: any, save: any,
}

const EModal = (props: IProps) => {
  // Mark: - PROPERTIES
  const {en, open, close, save} = props;

  // Mark: - FUNCTIONS


  // Mark: - PREVIEW
  return (
    <Modal open={open} onClose={close} className='emodal'>
      <Modal.Header className='emodal-header'>
        {/*<Modal.Title className='title'>
          {en ? 'Unsaved changes' : ' Egentwas geändert'}
  </Modal.Title>*/}
      </Modal.Header>
      <Modal.Body className='emodal-body'>
        {en ?
        (<p className='des'>
          To make sure that your changes are saved, we kindly remind you to click on the
          "Save" button before closing the popup. This will ensure that your profile is
          up-to-date and that your changes will be reflected in your account.
          <br/> <br/>
          If you have any questions or concerns about the changes you've made,
          please don't hesitate to reach out to our support team.
          We're always here to help you with any issues you may encounter.
          <br/> <br/>
          Thank you for choosing our platform and for keeping your profile up-to-date.
        </p>) : (
          <p className='des'>
            Um sicherzustellen, dass Ihre Änderungen gespeichert werden, möchten wir Sie daran erinnern,
            vor dem Schließen des Pop-up-Fensters auf die Schaltfläche "Speichern" zu klicken. Dies stellt sicher,
            dass Ihr Profil auf dem neuesten Stand ist und dass Ihre Änderungen in Ihrem Konto reflektiert werden.
            <br/> <br/>
            Wenn Sie Fragen oder Bedenken zu den von Ihnen vorgenommenen Änderungen haben,
            zögern Sie bitte nicht, sich an unser Support-Team zu wenden. Wir stehen Ihnen jederzeit zur Verfügung,
            um Ihnen bei Problemen zu helfen, die Sie möglicherweise haben.
            <br/> <br/>
            Vielen Dank, dass Sie sich für unsere Plattform entschieden haben und Ihr Profil auf dem neuesten Stand halten.
          </p>
        )
    }
      </Modal.Body>
      <Modal.Footer className='emodal-footer'>
        <div className="btn-con">
          <Button onClick={save} appearance='primary' className='r-btn r-main-btn'>
            {en ? 'Save' : 'Speichern'}
          </Button>
          <Button onClick={close} appearance='primary' className='r-btn r-secondary-btn'>
            {en ? 'Close' : 'Schließen'}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default EModal
