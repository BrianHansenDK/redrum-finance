import React from 'react'
import { auth, getSpecificProject } from '../../../../../../firebase';
import { Button } from 'rsuite';
import MakeSectionModal from './MakeSectionModal';
import { FirebaseBundle } from '../../../../../../database/Objects';
import { useLocation } from 'react-router-dom';
import RedrumProLoader from '../../../../components/RedrumProLoader';
import PageSections from './PageSections';

interface IProps {en: boolean}

const CastAndCrewPage = (props: IProps) => {
    const {en} = props;
    const projectId = useLocation().pathname.split('/')[3];
    const authorized = auth.currentUser?.email === import.meta.env.VITE_ADMIN_EMAIL || auth.currentUser?.email === import.meta.env.VITE_DEV_EMAIL;


    const [project, setProject] = React.useState<FirebaseBundle>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    // Load project
    React.useEffect(() => getSpecificProject(projectId, setProject, setLoading), []);

  return (
    <div>
        <h1>Cast & Crew</h1>
        { loading ? (<RedrumProLoader/>) : project !== null && project !== undefined ? (
            <>
        <PageSections project={project} en={en} authorized={authorized}/>
        {authorized ? (
            <>
                <Button className='mt-5 r-btn r-main-btn' appearance='primary' onClick={() => setModalOpen(true)}>
                    Make section
                </Button>
                <MakeSectionModal project={project} isOpen={modalOpen} close={() => setModalOpen(false)} />
            </>
        ) : null}
        </>) : null
        }
    </div>
  )
}

export default CastAndCrewPage