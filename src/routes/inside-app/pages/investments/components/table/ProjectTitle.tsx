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
    <div style={styles.wrap}>
      <p style={styles.int}>Project: </p>
      <p style={styles.name}>{projectName}</p>
    </div>
  )
}

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
  },
  int: {
    fontSize: 18.5,
    color: mainColors.dark,
    opacity: .8,
  },
  name: {
    fontSize: 18.5,
    color: mainColors.dark,
    fontWeight: '700',
    marginTop: 0,
    marginLeft: 15,
  }
}

export default ProjectTitle
