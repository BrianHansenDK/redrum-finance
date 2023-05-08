import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../../../../../../firebase'
import { mainColors } from '../../../../themes/colors'
import { FirebaseBundle } from '../../../../../../database/Objects'

interface IProps {
  project: FirebaseBundle
}

const ProjectTitle = (props: IProps) => {
  const {project} = props;
  return (
    <div className='table-project-name-wrap'>
      <p className='project-intro'>Project: </p>
      <p className='project-name'>{project.name}</p>
    </div>
  )
}

export default ProjectTitle
