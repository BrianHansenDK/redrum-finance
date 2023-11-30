import React from 'react'
import { Button, Modal } from 'rsuite'
import { FirebaseBundle } from '../../../../../../database/Objects'
import SectionCreationModal from './SectionCreationModal';

interface IProps {
    project: FirebaseBundle,
    isOpen: boolean,
    close: any,
}

const MakeSectionModal = (props: IProps) => {
    const { project, isOpen, close} = props;
    const [sectionType, setSectionType] = React.useState<number>(1);
    const [innerModalOpen, setInnerModalOpen] = React.useState<boolean>(false);
    const [isBanner, setIsBanner] = React.useState<boolean>(false);
  return (
    <>
    <Modal open={isOpen} onClose={close}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>What section type do you wish to make?</p>

        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => {
                setSectionType(1);
                setInnerModalOpen(true);
            }} appearance="primary">
            Only Text
          </Button>
          <Button onClick={() => {
            setSectionType(2);
            setIsBanner(true);
            setInnerModalOpen(true);
        }} appearance="primary">
            Banner
          </Button>
          <Button onClick={() => {
            setSectionType(3);
            setIsBanner(false);
            setInnerModalOpen(true);
          }} appearance="primary">
            Picture
          </Button>
          <Button onClick={() => {
            setSectionType(4);
            setInnerModalOpen(true);
          }} appearance="primary">
            Video
          </Button>
          <Button onClick={close} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
    </Modal>
    <SectionCreationModal isBanner={isBanner} project={project} isOpen={innerModalOpen} closeOuter={close} close={() => setInnerModalOpen(false)} sectionType={sectionType}/>
    </>
  )
}

export default MakeSectionModal