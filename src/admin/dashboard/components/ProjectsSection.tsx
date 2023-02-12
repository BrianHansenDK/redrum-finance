import { get, onValue, ref } from 'firebase/database';
import React, { Component, useEffect, useState } from 'react'
import { database } from '../../../firebase';

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
        <h1>
          Projects
        </h1>
        {projects.map((project: any) => (
        <p>
          {project.name}
        </p>
        ))}
      </div>
    );
}

const styles = {
  wrap: {
    marginTop: 150,
  }
}

export default ProjectsSection;
