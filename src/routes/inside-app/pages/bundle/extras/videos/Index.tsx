import React from 'react'
import { useLocation } from 'react-router-dom';
import { FirebaseBundle } from '../../../../../../database/Objects';
import { getMovieTrailers, getSpecificProject } from '../../../../../../firebase';
import RedrumProLoader from '../../../../components/RedrumProLoader';
import MovieTrailer from '../overview/components/trailers/MovieTrailer';
import PitchVideo from '../overview/components/image-gallery/PitchVideo';
import TrailerCard from '../overview/components/trailers/TrailerCard';
import PresentationCard from '../overview/components/image-gallery/PresentationCard';
import './index.scss'

interface IProps {en: boolean}

const ProjectVideosPage = (props: IProps) => {
  const {en} = props;
  // Mark: - PROPERTIES
  const location = useLocation();
  const projectId = location.pathname.split('bundle/')[1].split('/')[0];

  // Project
  const [project, setProject] = React.useState<FirebaseBundle | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  // Trailers
  const [tLoading, setTLoading] = React.useState(false);
  const [trailers, setTrailers] = React.useState<string[] | null>(null)

  // Mark: - ON MOUNT
  React.useEffect(() => {
    getSpecificProject(projectId, setProject, setLoading);
  }, []);
  React.useEffect(() => {
    if (project !== null) {
      getMovieTrailers(project!.movies!, setTrailers, setLoading);
    }
  }, [project]);

  // Mark: - FUNCTIONS
  return (
    <div className='project-videos-page'>
      {
        loading || tLoading ? (<RedrumProLoader/>) : project !== null && trailers !== null ? (
          <>
          {project.pitch_video !== '' ? (
            <PresentationCard en={en} project={project}/>
            ) : null}
            <TrailerCard movieIds={project.movies!} en={en} />
          </>
        ) : null
      }
    </div>
  )
}

export default ProjectVideosPage
