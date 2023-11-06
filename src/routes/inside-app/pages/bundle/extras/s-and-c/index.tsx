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

  // Load project name
  React.useEffect(() => getSpecificProject(projectId, setProject, setLoading), []);

  const authorized = auth.currentUser?.email === import.meta.env.VITE_ADMIN_EMIAL || auth.currentUser?.email === import.meta.env.VITE_DEV_EMAIL

  return (
    <div>
      <h1>Story and Concept Arts Page</h1>
      {loading && project == null || project == undefined ? (
        <RedrumProLoader />
        ) : 
        <>
        {
        project.story_and_concept_arts?.images !== undefined ? (
        <SAndCCarousel project={project} authorized={authorized} img sources={project.story_and_concept_arts?.images} title={'Images'}/>) : (<p>No images</p>)
        }
        {authorized ? (
        <>
          <Button onClick={() => setModalOpen(true)}>
            Add images
          </Button>
          <ProjectSandCImages project={project} type={'gallery'} closeModal={() => setModalOpen(false)} isVisible={modalOpen} videos={isVideos}  />
        </>) : null}
        {
        project.story_and_concept_arts?.videos !== undefined ? (
        <SAndCCarousel project={project} authorized={authorized} img={false} sources={project.story_and_concept_arts?.videos} title={'Videos'}/>) : (<p>No videos</p>)
        }
      {authorized ? (
        <>
          <Button onClick={() => { setIsVideos(true); setModalOpen(true)}}>
            Add Videos
          </Button>
        </>) : null}
        </>}
    </div>
  )
};

export default ProjectStoryAndConceptArtsPage;
