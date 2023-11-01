import React, { FunctionComponent, useState } from 'react'
import { Button, FlexboxGrid, Message, Modal, useToaster } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { useMediaQuery } from '../../../../../../../misc/custom-hooks'
import { vanumoColors, vanumoShadows } from '../../../../../../theme/vanumoTheme'
import VProjectImageUpdate from './VProjectImageUpdate'
import { storage, storageRef } from '../../../../../../../firebaseStorage'
import { deleteObject } from 'firebase/storage'
import { ref, remove } from 'firebase/database'
import { database } from '../../../../../../../firebase'
interface IProps {
  project: FirebaseBundle,
  isOpen: boolean,
  closeModal: any,
}

const VProjectImagesModal: FunctionComponent<IProps> = (props) => {
  const {project, isOpen, closeModal} = props
  const toaster = useToaster()
  const isMobile = useMediaQuery('(max-width: 992px)')
  const [currentSrc, setSrc] = useState(project.smallImage!)
  const [currentType, setType] = useState('avatar')
  const [multiple, setMultiple] = useState<boolean>(false);
  const [srcs, setSrcs] = useState<string[]>()
  const [innerModalOpen, setInnerModalOpen] = useState(false)
  const openInner = () => {setInnerModalOpen(true)}
  const closeInner = () => {setInnerModalOpen(false)}

  // Delete gallery image on click
  const deleteGalleryImg = (imageRef: string) => {
    // Transform image reference
    const imgRef = 
    imageRef.replace("https://firebasestorage.googleapis.com/v0/b/redrum-finance.appspot.com/o/", '')
    .replace(/%2F/g, '/').split('?')[0];
    // Create storage reference
    const sReference = storageRef(storage, imgRef)
    
    // Delete the file
    deleteObject(sReference).then(() => {
      // Create database reference
      project.image_gallery_urls.forEach((img: string, index) => {
        if (img == imageRef) {
          const dataRef = ref(database, `projects/${project.id}/image_gallery_urls/${index}`)
          remove(dataRef)
        }
    })

      // Notify user
    toaster.push(
      <Message type='success' showIcon duration={5000}>
          Image deleted succesfully
      </Message>
    )
    }).catch((error) => {
      // Notify user
      <Message type='success' showIcon duration={5000}>
        {error.message}
      </Message>
    });
  }

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
              setMultiple(false)
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
              setMultiple(false)
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
              setMultiple(false)
              openInner()
            }}>
              Edit
            </Button>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={24} className='edit-img-modal-item'>
            <p>Gallery</p>
            <div className="gallery-edit-con">
            {project.image_gallery_urls !== null && project.image_gallery_urls !== undefined ? (
              <>
                {project.image_gallery_urls.map((img, index) => (
                  <div className="gallery-img-con">
                    <img style={styles.bigImg} src={img} alt={`${project.name} gallery img ${index}`} />
                    <Button className='delete-gallery-image-btn' style={styles.redBtn} 
                    appearance='primary' size='md' 
                    onClick={() => deleteGalleryImg(img)}>
                      Delete
                    </Button>
                  </div>
                ))}
              </>
              ) : null
            }
            </div>
            <Button style={styles.btn} appearance='primary' size='md'
            onClick={() => {
              setSrcs(project.image_gallery_urls)
              setType('gallery')
              setMultiple(true)
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
    <VProjectImageUpdate multiple={multiple} srcs={srcs} source={currentSrc} project={project} type={currentType} closeModal={closeInner} isVisible={innerModalOpen} />
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
  redBtn: {
    backgroundColor: vanumoColors.red,
    color: vanumoColors.white,
    fontWeight: '700',
    boxShadow: '0 3px 6px 0 #a274ff3d',
  },
}

export default VProjectImagesModal
