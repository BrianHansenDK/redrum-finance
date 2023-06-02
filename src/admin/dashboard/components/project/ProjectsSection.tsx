import { get, onValue, ref } from 'firebase/database';
import React, { Component, useEffect, useState } from 'react'
import { database } from '../../../../firebase';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {

  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    const reference = ref(database, 'projects/')
    let data: any[] = []
    onValue(reference, (project) => {
      project.forEach((p) => {
        data.push(p.val())
      })
      setProjects(data)
    })
  }, [])
    return (
      <div style={styles.wrap}>
        <h1 className='mb-1'>
          Projects
        </h1>
        <div className='d-flex' id='vanumo-projects-wrap'>
        {projects.map((project: any) => (
          <ProjectCard project={project} key={project.id}/>
          ))}
        </div>
      </div>
    );
}

const styles = {
  wrap: {
    margin: 'auto',
    maxWidth: 1200,
  }
}

export default ProjectsSection;
