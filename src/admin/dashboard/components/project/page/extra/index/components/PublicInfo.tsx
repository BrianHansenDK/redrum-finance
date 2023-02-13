import React from 'react'
import { FirebaseBundle } from '../../../../../../../../database/Objects'
import { numberWithCommas } from '../../../../../../../../misc/custom-hooks'
import { vanumoColors } from '../../../../../../../theme/vanumoTheme'

const VanumoProjectPublicInformation = ({project} : {project: FirebaseBundle}) => {
  return (
    <div>
      <p style={styles.info}>
        Introduction: {project.intro}
      </p>
      <p style={styles.info}>
        Description: {project.description}
      </p>
      <p style={styles.info}>
        Already invested: {numberWithCommas(parseFloat(project.currentlyInvested!.toString().replace('.',',')))}€
      </p>
      <p style={styles.info}>
        Investment goal: {numberWithCommas(parseFloat(project.goal!.toString().replace('.',',')))}€
      </p>
      <p style={styles.info}>
        Project value: {numberWithCommas(parseFloat(project.value!.toString().replace('.',',')))}€
      </p>
      <p style={styles.info}>
        Guaranteed return: {project.guaranteedReturn}%
      </p>
      <p style={styles.info}>
        Publication: {project.publication} Months
      </p>
      <p style={styles.info}>
        Start date: {project.startDate}
      </p>
      <p style={styles.info}>
        End data: {project.endDate}
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
