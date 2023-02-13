import React from 'react'
import { Divider } from 'rsuite'
import BoxThemes from '../../../../library/themes/BoxThemes'
import { mainColors } from '../../../../routes/inside-app/themes/colors'
import { vanumoColors } from '../../../theme/vanumoTheme'

const ProjectCardTitle = ({project} : {project: any}) => {
  return (
    <div>
      <h1 style={styles.title}>
        {project.name}
      </h1>
      <Divider style={styles.divider} />
    </div>
  )
}

const styles = {
  title: {
    fontSize: 20.5,
    lineHeight: 1,
    color: mainColors.dark,
  },
  divider: {
    backgroundColor: vanumoColors.main,
    margin: '15px 0 25px',
  }
}

export default ProjectCardTitle
