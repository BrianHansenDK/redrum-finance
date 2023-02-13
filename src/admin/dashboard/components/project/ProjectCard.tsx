import React from 'react'
import { Link } from 'react-router-dom'
import BoxThemes from '../../../../library/themes/BoxThemes'
import ProjectCardBody from './ProjectCardBody'
import ProjectCardTitle from './ProjectCardTitle'
import './style/VanumoProjectStyling.scss'

const ProjectCard = ({project}: {project: any}) => {
  return (
    <Link style={styles.card} to={`/vanumo/project/${project.id}`} className='project-card'>
      <ProjectCardTitle project={project} />
      <ProjectCardBody project={project} />
    </Link>
  )
}
const styles = {
  card: {
    borderRadius: BoxThemes.card.borderRadius,
    boxShadow: BoxThemes.card.boxShadow,
    padding: BoxThemes.card.padding,
    width: 'max-content',
    marginRight: 50,
  },
}
export default ProjectCard
