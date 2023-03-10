import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../../../../../../firebase'
import { mainColors } from '../../../../themes/colors'

const ProjectTitle = ({projectId}: {projectId: any}) => {
  const [projectName, setProjectName] = useState<any>('')
  useEffect(() => {
    const reference = ref(database, 'projects/' + projectId)
    onValue(reference, (snap) => {
      setProjectName(snap.val().name)
    })
  }, [projectId])
  return (
    <div className='table-project-name-wrap'>
      <p className='project-intro'>Project: </p>
      <p className='project-name'>{projectName}</p>
    </div>
  )
}

export default ProjectTitle
