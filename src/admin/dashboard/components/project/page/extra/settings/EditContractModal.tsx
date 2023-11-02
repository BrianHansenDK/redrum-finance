import React from 'react'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { Button, Message, Modal, useToaster } from 'rsuite';
import { storage, storageRef } from '../../../../../../../firebaseStorage';
import { getDownloadURL, uploadBytes } from 'firebase/storage';
import { updateProjectContract, updateProjectFiles, updateProjectGermanContract } from '../../../../../../../firebase';
import { pushError, pushSuccess, vanumoColors, vanumoShadows } from '../../../../../../theme/vanumoTheme';
import PushThemes from '../../../../../../../routes/inside-app/themes/PushThemes';
import { mainColors } from '../../../../../../../routes/inside-app/themes/colors';

interface IProps {
  project: FirebaseBundle,
  isOpen: boolean,
  isEnglish: boolean,
  close: any,
  closeOuter: any,
}

const EditContractModal = (props: IProps) => {
  const {project, isOpen, isEnglish, close, closeOuter} = props;
  // Mark: - PROPERTIES

  const toaster = useToaster()

  const [files, setFiles] = React.useState<any[]>([])
  const [fileUrls, setFileUrls] = React.useState<string[]>([])
  const [fileNames, setFileNames] = React.useState<string[]>([])
  const [finalFiles, setFinalFiles] = React.useState<any>()

  // Mark: - FUNCTIONS
  // FILES - Multiple files
  const handleFiles = (e: any) => {
    let data: any[] = []
    let names: string[] = []
    const target: EventTarget & any = e.target
    if (target.files.length > 0) {
      const f = target.files;
      setFiles(f);
      f.forEach((file: any) => {
        names.push(file.name)
      });
      setFileNames(names);
    }
  }

    const handleFilesSubmit = () => {
      let data: string[] = []
      let finalData: any = []
        if (files.length > 0 && project.name! !== '') {
          files.forEach((file: any, index) => {
            const fileRef = 
            isEnglish? storageRef(storage, `documents/projects/${project.name!.split(' ').join('_')}/framework_agreement.pdf`)
            : storageRef(storage, `documents/projects/${project.name!.split(' ').join('_')}/rahmenvertrag.pdf`)
            uploadBytes(fileRef, file).then((snap) => {
                getDownloadURL(fileRef).then((url) => {
                    data.push(url)
                    finalData.push(url)
                }).catch((err) => {
                    toaster.push(<Message type='error' closable duration={10000}>
                      An error occured: ${err.message}
                    </Message>, { placement: 'topCenter' })
                }).finally(() => {
                  setFileUrls(data);
                  setFinalFiles(finalData)
                  if (isEnglish) {
                      updateProjectContract(project.id!, finalData, () => {
                          toaster.push(<Message type='success' style={pushSuccess} closable duration={10000}>
                      <p style={{color:'#fefefe'}}>The projects English framework agreement was updated Succesfully</p>
                    </Message>, { placement: 'topCenter' })
                  }, (err: any) => {
                      toaster.push(<Message type='error' style={pushError} closable duration={10000}>
                      <p style={{color:'#fefefe'}}>{err.message}</p>
                    </Message>, { placement: 'topCenter' })
                  }, () => close())
                } else {
                    updateProjectGermanContract(project.id!, finalData, () => {
                        toaster.push(<Message type='success' style={pushSuccess} closable duration={10000}>
                    <p style={{color:'#fefefe'}}>The projects German framework agreement was updated Succesfully</p>
                  </Message>, { placement: 'topCenter' })
                }, (err: any) => {
                    toaster.push(<Message type='error' style={pushError} closable duration={10000}>
                    <p style={{color:'#fefefe'}}>{err.message}</p>
                  </Message>, { placement: 'topCenter' })
                }, () => {close(); closeOuter()})
                }
                })
            })
          })
        }
    }

  return (
    <Modal open={isOpen} onClose={close}>
      <Modal.Header>
        <Modal.Title>{project.name!} {isEnglish? 'English' : 'German'} Contract</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Current contract: {project.contract !== null && project.contract !== undefined ? (
            <p>{isEnglish ? 'framework_agreement.pdf' : 'rahmenvertrag.pdf'}</p>
        ) : (
          <p>The are currently no files added to this project</p>
        )}
        <div className="edit-files-section mt-2 mb-2">
          <input type='file' multiple accept='application/pdf' onChange={handleFiles} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex align-items-center">
          <Button style={styles.saveBtn} onClick={handleFilesSubmit}>
            Overwrite
          </Button>
          <Button style={styles.cancelBtn} onClick={() => close()}>
            Cancel
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
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

export default EditContractModal
