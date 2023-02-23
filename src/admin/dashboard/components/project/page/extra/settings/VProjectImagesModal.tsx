import React, { FunctionComponent, useState } from 'react'
import { Button, FlexboxGrid, Modal } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { useMediaQuery } from '../../../../../../../misc/custom-hooks'
import { vanumoColors, vanumoShadows } from '../../../../../../theme/vanumoTheme'
import VProjectImageUpdate from './VProjectImageUpdate'
interface IProps {
  project: FirebaseBundle,
  isOpen: boolean,
  closeModal: any,
}

const VProjectImagesModal: FunctionComponent<IProps> = (props) => {
  const {project, isOpen, closeModal} = props
  const isMobile = useMediaQuery('(max-width: 992px)')
  const [currentSrc, setSrc] = useState(project.smallImage!)
  const [currentType, setType] = useState('avatar')
  const [innerModalOpen, setInnerModalOpen] = useState(false)
  const openInner = () => {setInnerModalOpen(true)}
  const closeInner = () => {setInnerModalOpen(false)}
  return (
    <>
    <Modal open={isOpen} onClose={closeModal} size='full'>
      <Modal.Header>
        <Modal.Title>
          Images
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FlexboxGrid>
          <FlexboxGridItem colspan={isMobile ? 24 : 6} className='edit-img-modal-item'>
            <p>Avatar</p>
            <img style={styles.smallImg} src={project.smallImage!} alt={project.name} />
            <Button style={styles.btn} appearance='primary' size='md'
            onClick={() => {
              setSrc(project.smallImage!)
              setType('avatar')
              openInner()
            }}>
              Edit
            </Button>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={isMobile ? 24 : 6} className='edit-img-modal-item'>
            <p>Overview</p>
            <img style={styles.bigImg} src={project.overviewImage} alt={project.name} />
            <Button style={styles.btn} appearance='primary' size='md'
            onClick={() => {
              setSrc(project.overviewImage!)
              setType('overview')
              openInner()
            }}>
              Edit
            </Button>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={isMobile ? 24 : 6} className='edit-img-modal-item'>
            <p>Presentation</p>
            <img style={styles.bigImg} src={project.presentationImage} alt={project.name} />
            <Button style={styles.btn} appearance='primary' size='md'
            onClick={() => {
              setSrc(project.presentationImage!)
              setType('presentation')
              openInner()
            }}>
              Edit
            </Button>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={isMobile ? 24 : 6} className='edit-img-modal-item'>
            <p>Banner</p>
            <img style={styles.bigImg} src={project.banner} alt={project.name} />
            <Button style={styles.btn} appearance='primary' size='md'
            onClick={() => {
              setSrc(project.banner!)
              setType('banner')
              openInner()
            }}>
              Edit
            </Button>
          </FlexboxGridItem>
        </FlexboxGrid>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
    <VProjectImageUpdate source={currentSrc} project={project} type={currentType} closeModal={closeInner} isVisible={innerModalOpen} />
    </>
  )
}

const styles = {
  smallImg: {
    width: 100,
    height: 100,
    borderRadius: 2.5,
    boxShadow: vanumoShadows.image,
  },
  bigImg: {
    height: 'auto',
    width: '100%',
    borderRadius: 5,
    boxShadow: vanumoShadows.image,
  },
  btn: {
    backgroundColor: vanumoColors.main,
    color: vanumoColors.white,
    fontWeight: '700',
    boxShadow: '0 3px 6px 0 #a274ff3d',
  },
}

export default VProjectImagesModal