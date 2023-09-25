import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { FirebaseBundle } from '../../../../../../database/Objects'
import { getSpecificProject } from '../../../../../../firebase';
import RedrumProLoader from '../../../../components/RedrumProLoader';
import GalleryCarousel from '../overview/components/image-gallery/GalleryCarousel';
import './index.scss'

interface IProps {
  en: boolean
}

const ProjectGalleryPage = (props: IProps) => {
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
    <div className='project-gallery-page pt-0' id='top'>
      {loading || project === null ? (<RedrumProLoader/>) : (
        <GalleryCarousel en={en} projectName={project.name!} gallery={project.image_gallery_urls}/>
      )}
    </div>
  )
}

export default ProjectGalleryPage
