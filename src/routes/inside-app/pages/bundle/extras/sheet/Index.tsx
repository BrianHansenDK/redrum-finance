import React from 'react'
import { useMediaQuery } from '../../../../../../misc/custom-hooks';
import { useLocation } from 'react-router-dom';
import { FirebaseBundle } from '../../../../../../database/Objects';
import { getSpecificProject } from '../../../../../../firebase';
import RedrumProLoader from '../../../../components/RedrumProLoader';

interface IProps {en: boolean}

const ProjectSheetPage = (props: IProps) => {
  const {en} = props;
  const isDesktop = useMediaQuery('(min-width: 1600px)');
  const projectId = useLocation().pathname.split('/')[3];

  const [project, setProject] = React.useState<FirebaseBundle>();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => getSpecificProject(projectId, setProject, setLoading), []);
  return (
    <div className='project-sheet' id='top' style={{minHeight: '100vh', paddingTop: 75, maxWidth: isDesktop ? 1600 : '100%', margin: 'auto'}}>
      <h1 className="title">Sheet</h1>
      {loading || project === null || project === undefined ? (<RedrumProLoader/>) : (
        <p>
          {project?.description}
        </p>
      )}
    </div>
  )
}

export default ProjectSheetPage
