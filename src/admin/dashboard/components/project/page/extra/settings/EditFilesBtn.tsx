import React from 'react'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { Button } from 'rsuite';
import EditFilesModal from './EditFilesModal';
import { vanumoColors } from '../../../../../../theme/vanumoTheme';

interface IProps {project: FirebaseBundle}

const EditFilesBtn = (props: IProps) => {
  const {project} = props;
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <>
      <div className="d-flex flex-colum align-items-center mb-5">
        <Button size='lg' style={styles.btn} onClick={open}>
          Edit Files
        </Button>
      </div>
      <EditFilesModal project={project} isOpen={isOpen} close={close}/>
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
    margin: 'auto',
  },
}

export default EditFilesBtn
