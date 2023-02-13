import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FlexboxGrid, Col } from 'rsuite'
import { database } from '../../../../../../../firebase'
import mainShadows from '../../../../../../../routes/inside-app/themes/shadows'
import { vanumoColors } from '../../../../../../theme/vanumoTheme'
import VanumoLoader from '../../../../VanumoLoader'
import ProjectImages from './components/ProjectImages'
import VanumoProjectPublicInformation from './components/PublicInfo'

const VProjectIndex = () => {
  const {projectId} = useParams()
  const [project, setProject] = useState<any>(null)
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
    <>
    {
      loading ? (
        <VanumoLoader />
      ) : project !== null && (
        <>
          <FlexboxGrid justify='space-around'>
            <FlexboxGrid.Item as={Col} colspan={24} xxl={8} xl={8} lg={8} >
              <img src={project.overviewImage} alt={`${project.name} overview Image`} style={styles.ovImage} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item as={Col} colspan={24} xxl={14} xl={14} lg={14}>
              <h1 style={styles.projectName}>
                {project.name}
              </h1>
              <VanumoProjectPublicInformation project={project} />
            </FlexboxGrid.Item>
          </FlexboxGrid>
          <ProjectImages project={project} />
        </>
      )
    }
    </>

  )
}
const styles = {
  ovImage: {
    width: '100%',
    height: 'auto',
    borderRadius: 5,
    boxShadow: mainShadows.image,
  },
  projectName: {
    fontSize: 30,
    color: vanumoColors.dark,
  }
}

export default VProjectIndex
