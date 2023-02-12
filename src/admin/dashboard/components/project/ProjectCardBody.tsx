import React from 'react'
import { Progress } from 'rsuite'
import { numberWithCommas, toFixedIfNecessary } from '../../../../misc/custom-hooks'
import mainShadows from '../../../../routes/inside-app/themes/shadows'

const ProjectCardBody = ({project}: {project: any}) => {
  return (
    <>
      <div style={styles.wrap}>
        <img src={project.overviewImage} alt={`${project.name} Overview image`} style={styles.image} />
        <div style={styles.infoWrap}>
          <p>
            Already invested: <span className='bold'> {numberWithCommas(parseFloat(project.currentlyInvested.toString().replace('.', ',')))}€</span>
          </p>
          <p>
            Investment Goal: <span className='bold'> {numberWithCommas(parseFloat(project.goal.toString().replace('.', ',')))}€</span>
          </p>
          <p>
            Guaranteed Return: <span className='bold'> {project.guaranteedReturn}%</span>
          </p>
        </div>
      </div>
      <div style={styles.wrap} className='mt-1'>
        <p>Progress</p>
        <Progress.Circle
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
  progress: {
    width: 100,
    height: 100,
  }
}

export default ProjectCardBody
