import React from 'react'
import { FirebaseBundle } from '../../../../../../database/Objects';
import { useLocation } from 'react-router-dom';
import { getSpecificProject } from '../../../../../../firebase';
import RedrumProLoader from '../../../../components/RedrumProLoader';
import FilesCard from '../overview/components/FilesCard';
import './index.scss'

interface IProps {en: boolean}

const ProjectFilesPage = (props: IProps) => {
  const {en} = props;
  // Mark: - PROPERTIES
  const location = useLocation();
  const projectId = location.pathname.split('bundle/')[1].split('/')[0];

  // Project
  const [project, setProject] = React.useState<FirebaseBundle | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  // Mark: - ON MOUNT
  React.useEffect(() => {
    getSpecificProject(projectId, setProject, setLoading);
  }, []);

  // Mark: - FUNCTIONS

  return (
    <div className='project-files-page'>
      {loading || project === null ? (<RedrumProLoader/>) : (
        <FilesCard project={project} en={en}/>
      )}
    </div>
  )
}

export default ProjectFilesPage
