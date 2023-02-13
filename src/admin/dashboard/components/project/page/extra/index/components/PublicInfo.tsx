import React from 'react'
import { numberWithCommas } from '../../../../../../../../misc/custom-hooks'
import { vanumoColors } from '../../../../../../../theme/vanumoTheme'

const VanumoProjectPublicInformation = ({project} : {project: any}) => {
  return (
    <div>
      <p style={styles.info}>
        Introduction: {project.intro}
      </p>
      <p style={styles.info}>
        Description: {project.description}
      </p>
      <p style={styles.info}>
        Already invested: {numberWithCommas(project.currentlyInvested.toString().replace('.',','))}€
      </p>
      <p style={styles.info}>
        Investment goal: {numberWithCommas(project.goal.toString().replace('.',','))}€
      </p>
      <p style={styles.info}>
        Project value: {numberWithCommas(project.value.toString().replace('.',','))}€
      </p>
      <p style={styles.info}>
        Guaranteed return: {project.guaranteedReturn}%
      </p>
      <p style={styles.info}>
        Publication: {project.publication} Months
      </p>
    </div>
  )
}

const styles = {
  title: {
    fontSize: 22.5,
    color: vanumoColors.dark,
    lineHeight: 1,
    marginBottom: 10,
  },
  info: {
    fontSize: 20,
    color: vanumoColors.dark,
  }
}

export default VanumoProjectPublicInformation
