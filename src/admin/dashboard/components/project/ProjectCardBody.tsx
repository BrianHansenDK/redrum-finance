import React from 'react'
import { Progress } from 'rsuite'
import { numberWithCommas, toFixedIfNecessary } from '../../../../misc/custom-hooks'
import { mainColors } from '../../../../routes/inside-app/themes/colors'
import mainShadows from '../../../../routes/inside-app/themes/shadows'
import { vanumoColors } from '../../../theme/vanumoTheme'

const ProjectCardBody = ({project}: {project: any}) => {
  return (
    <>
      <div style={styles.wrap}>
        <img src={project.overviewImage} alt={`${project.name} Overview image`} style={styles.image} />
        <div style={styles.infoWrap}>
          <p style={styles.info}>
            Already invested: &nbsp;
            <span style={styles.infoNumber} className='bold'>
            {numberWithCommas(parseFloat(project.currentlyInvested.toString().replace('.', ',')))}€
            </span>
          </p>
          <p style={styles.info}>
            Investment Goal: &nbsp;
            <span style={styles.infoNumber} className='bold'>
            {numberWithCommas(parseFloat(project.goal.toString().replace('.', ',')))}€
            </span>
          </p>
          <p style={styles.info}>
            Guaranteed Return: &nbsp;
            <span style={styles.infoNumber} className='bold'>
            {project.guaranteedReturn}%
            </span>
          </p>
        </div>
      </div>
      <div style={styles.progressWrap} className='mt-1'>
        <p style={styles.info}>Progress</p>
        <Progress.Circle
        strokeColor={project.currentlyInvested >= project.goal ? mainColors.success : vanumoColors.main}
        style={styles.progress}
        percent={toFixedIfNecessary((project.currentlyInvested / project.goal) * 100, 2)}
        status={project.currentlyInvested >= project.goal ? 'success' : 'active'}
        />
      </div>
    </>
  )
}
const styles = {
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 125,
    borderRadius: 5,
    boxShadow: mainShadows.image,
  },
  infoWrap: {
    marginLeft: 25,
    minWidth: 200,
  },
  info: {
    color: vanumoColors.dark,
  },
  infoNumber: {
    color: vanumoColors.main,
  },
  progressWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    width: 100,
    height: 100,
    marginLeft: 50,
  }
}

export default ProjectCardBody
