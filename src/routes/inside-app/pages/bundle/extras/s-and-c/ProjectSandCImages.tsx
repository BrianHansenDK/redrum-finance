import React, { FunctionComponent, useState } from 'react';
import { Button, Input, Message, Modal, useToaster } from 'rsuite';

import { getDownloadURL, uploadBytes } from 'firebase/storage';
import { FirebaseBundle } from '../../../../../../database/Objects';
import { storage, storageRef } from '../../../../../../firebaseStorage';
import { updateProjectSAndCImages, updateProjectSAndCVideos } from '../../../../../../firebase';
import { mainColors } from '../../../../themes/colors';
import mainShadows from '../../../../themes/shadows';
import { YOUTUBE } from '../../../../../../misc/custom-hooks';

interface IProps {
  project: FirebaseBundle;
  type: string;
  closeModal: any;
  isVisible: boolean;
  srcs?: string[];
  videos?: boolean;
}

const ProjectSandCImages: FunctionComponent<IProps> = (props) => {
  const toaster = useToaster();
  const { project, type, closeModal, isVisible, srcs, videos=false } = props;
  const [gallery, setGallery] = useState<any[]>([]);
  const [videoLinks, setVideoLinks] = useState<string>('')

  // Gallery - Multiple pictures

  const handleGallery = (e: any) => {
    let data: any[] = []
    const target: EventTarget & any = e.target
    if (target.files.length > 0) {
      const files = target.files;
      setGallery(files)
    }
  }

    const handleGallerySubmit = async () => {
      let data: string[] = []
        if (gallery.length > 0 && project.name! !== '') {
          gallery.forEach((img: any, index: number) => {
            const imageRef = storageRef(storage, `images/projects/${project.name!.split(' ').join('_')}/story_and_concept_arts/${img.name}`)
            uploadBytes(imageRef, img).then((snap) => {
                getDownloadURL(imageRef).then((url) => {
                    data.push(url)
                }).catch((err) => {
                    toaster.push(<Message type='error' duration={10000}>
                      An error occured: {err.message} - Please try again!
                    </Message>, { placement: 'topCenter' })
                }).then(() => {
                  updateProjectSAndCImages(project.id!, data)
                }).finally(() => closeModal())
            })
          })
        }
    }

    const HandleVideoSubmit = async () => {
        let data: string[] = videoLinks.replace(/ /g, '').split(',').map((link) => YOUTUBE(link))
        if (data.length > 0) {
            await updateProjectSAndCVideos(project.id!, data)
        }
        closeModal();
    }

  return (
    <Modal open={isVisible} onClose={closeModal}>
      <Modal.Header>
        <Modal.Title>{type} Image</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.body}>
        { !videos ? (
        <>
        <input
          accept="image/*"
          type="file"
          multiple
          onChange={handleGallery}
          className="custom-file-input-prpl"
        />
        <div className="d-flex flex-column">
          { srcs !== undefined && srcs !== null
              ? srcs.map((img, index) => (
                  <img style={styles.image} src={img} alt={`Gallery Image-${index} for ${project.name}`} />
                ))
              : null}
        </div>
        </>
        ) : (<>
        <p>Seperate with ","</p>
        <Input as="textarea" rows={5} placeholder='Seperate with ","' onChange={setVideoLinks}/>
        <div className="d-flex flex-column">
          { srcs !== undefined && srcs !== null
              ? srcs.map((video, index) => (
                  <iframe style={styles.image} src={video} />
                ))
              : null}
        </div>
        </>) }
      </Modal.Body>
      <Modal.Footer>
        <div className="numbers-btns-wrap">
          <Button
            style={styles.saveBtn}
            onClick={!videos ? handleGallerySubmit : HandleVideoSubmit}
            disabled={(!videos && gallery.length === 0) || (videos && videoLinks == "")}
            color="blue"
            appearance="primary"
          >
            Save
          </Button>
          <Button style={styles.cancelBtn} onClick={closeModal} color="blue" appearance="primary">
            Cancel
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

const styles = {
  body: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 100,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 5,
  },
  chooseBtn: {
    marginTop: 15,
  },
  saveBtn: {
    width: 'calc(50% - 12.5px)',
    fontWeight: '700',
    backgroundColor: mainColors.main,
    color: mainColors.white,
    boxShadow: mainShadows.image,
  },
  cancelBtn: {
    width: 'calc(50% - 12.5px)',
    fontWeight: '700',
    backgroundColor: mainColors.white,
    color: mainColors.main,
    boxShadow: mainShadows.image,
  },
  success: {
    backgroundColor: mainColors.main,
  },
  error: {
    backgroundColor: mainColors.red,
  },
  msgInner: {
    color: mainColors.white,
  },
};

export default ProjectSandCImages;
