import React, { useState, useRef } from 'react';
import { uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { update, ref } from 'firebase/database';
import { storage, storageRef } from '../../../../../../firebaseStorage';
import { auth, database, getSpecificProject } from '../../../../../../firebase';
import { FirebaseBundle } from '../../../../../../database/Objects';
import RedrumProLoader from '../../../../components/RedrumProLoader';
import { useLocation } from 'react-router-dom';
import ProjectSandCImages from './ProjectSandCImages';
import { Button } from 'rsuite';
import SAndCCarousel from './SAndCCarousel';
import { useMediaQuery } from '../../../../../../misc/custom-hooks';
import { mainCard } from '../../../../themes/cardStyles';

interface IProps {
  en: boolean;
}

const ProjectStoryAndConceptArtsPage = (props: IProps) => {
  const { en } = props;
  const projectId = useLocation().pathname.split('/')[3];

  const [project, setProject] = React.useState<FirebaseBundle>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [isVideos, setIsVideos] = React.useState<boolean>(false);

  // Load project
  React.useEffect(() => getSpecificProject(projectId, setProject, setLoading), []);

  const authorized = auth.currentUser?.email === import.meta.env.VITE_ADMIN_EMIAL || auth.currentUser?.email === import.meta.env.VITE_DEV_EMAIL
  const isDesktop = useMediaQuery('(min-width: 1600px)')

  return (
    <div>
      <h3 style={{textAlign: 'center'}} className='mb-4'>Story and Concept Arts</h3>
      {loading && project == null || project == undefined ? (
        <RedrumProLoader />
        ) : 
        <>
          <div style={mainCard} className='mb-3'>
            {project.story_and_concept_arts?.images !== undefined ? (
              <SAndCCarousel project={project} authorized={authorized} img sources={project.story_and_concept_arts?.images} title={'Images'}/>) : (<p>No images</p>)
            }
            {authorized ? (
        <>
          <Button className='mt-2 r-btn r-main-btn' appearance='primary' style={{display: 'block', margin: 'auto'}} onClick={() => setModalOpen(true)}>
            Add images
          </Button>
          <ProjectSandCImages project={project} type={'gallery'} closeModal={() => setModalOpen(false)} isVisible={modalOpen} videos={isVideos}  />
        </>) : null}
          </div>
        <div style={mainCard}>
          {project.story_and_concept_arts?.videos !== undefined ? (
            <SAndCCarousel project={project} authorized={authorized} img={false} sources={project.story_and_concept_arts?.videos} title={'Videos'}/>) : (<p>No videos</p>)
          }
          {authorized ? (
        <>
          <Button className='mt-2 r-btn r-main-btn' appearance='primary' style={{display: 'block', margin: 'auto'}} onClick={() => { setIsVideos(true); setModalOpen(true)}}>
            Add Videos
          </Button>
        </>) : null}
        </div>
        </>}
    </div>
  )
};

export default ProjectStoryAndConceptArtsPage;
