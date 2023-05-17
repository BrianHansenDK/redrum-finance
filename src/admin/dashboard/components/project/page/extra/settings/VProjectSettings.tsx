import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { database } from '../../../../../../../firebase'
import VanumoLoader from '../../../../VanumoLoader'
import EditImagesBtn from './EditImagesBtn'
import EditInfoForm from './EditInfoForm'
import './VanumoProjectSettings.scss'
import EditFilesBtn from './EditFilesBtn'

const VProjectSettings = () => {
  const {projectId} = useParams()
  const [project, setProject] = useState<FirebaseBundle | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const reference = ref(database, 'projects/' + projectId)
    setLoading(true)
    onValue(reference, (snap) => {
      setProject(snap.val())
      setLoading(false)
    })
  }, [projectId])
  return (
    <div>
      {loading ? (<VanumoLoader />) : project !== null ? (
        <div className='page-wrapper'>
          <h1>
            Project settings
          </h1>
          <EditInfoForm project={project} />
          <EditImagesBtn project={project} />
          <EditFilesBtn project={project}/>
        </div>
      ) : null}
    </div>
  )
}

export default VProjectSettings
