import React from 'react'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { Button, Modal } from 'rsuite';
import { vanumoColors, vanumoShadows } from '../../../../../../theme/vanumoTheme';
import { mainColors } from '../../../../../../../routes/inside-app/themes/colors';
import EditContractModal from './EditContractModal';

interface IProps {
  project: FirebaseBundle,
  isOpen: boolean,
  close: any
}

const ChooseContractModal = (props: IProps) => {
  const {project, isOpen, close} = props;

    const [english, setEnglish] = React.useState<boolean>(true)
    const [innerOpen, setInnerOpen] = React.useState<boolean>(true)

    const openInner = () => setInnerOpen(true); const closeInner = () => setInnerOpen(false)

  return (
    <>
        <Modal open={isOpen} onClose={close}>
          <Modal.Header>
            <Modal.Title>Choose Contract</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you want to change the English contract or the German contract?</p>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex align-items-center">
              <Button style={styles.saveBtn} onClick={() => {setEnglish(true); openInner()}}>
                English
              </Button>
              <Button style={styles.cancelBtn} onClick={() => {setEnglish(false); openInner()}}>
                German
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
        <EditContractModal project={project} isOpen={innerOpen} isEnglish={english} close={closeInner} closeOuter={close}/>
    </>
  )
}

const styles = {
  saveBtn: {
    width: 'calc(50% - 12.5px)',
    fontWeight: '700',
    backgroundColor: vanumoColors.main,
    color: mainColors.white,
    boxShadow: vanumoShadows.image,
  },
  cancelBtn: {
    width: 'calc(50% - 12.5px)',
    fontWeight: '700',
    backgroundColor: mainColors.white,
    color: vanumoColors.main,
    boxShadow: vanumoShadows.image,
  },
}

export default ChooseContractModal
