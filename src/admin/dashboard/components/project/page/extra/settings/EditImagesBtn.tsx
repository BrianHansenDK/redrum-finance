import React, { useState } from 'react'
import { Button } from 'rsuite'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { vanumoColors } from '../../../../../../theme/vanumoTheme'
import VProjectImagesModal from './VProjectImagesModal'

const EditImagesBtn = ({project} : {project: FirebaseBundle}) => {
  const [isOpen, setOpen] = useState(false)
  const openModal = () => {setOpen(true)}
  const closeModal = () => {setOpen(false)}
  return (
    <>
      <div className='edit-imgs-btn-con'>
        <Button appearance='primary' size='lg' block style={styles.btn} onClick={openModal}>
          Edit images
        </Button>
      </div>
      <VProjectImagesModal project={project} isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

const styles = {
  btn: {
    width: '50%',
    backgroundColor: vanumoColors.main,
    color: vanumoColors.white,
    fontWeight: '700',
    boxShadow: '0 3px 6px 0 #a274ff3d',
  },
}

export default EditImagesBtn
