import React from 'react'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import VanumoNumbersSliderCard from './VanumoNumbersSliderCard'

const VanumoProjectEditRight = ({project, span} : {project: FirebaseBundle, span: number}) => {
  return (
    <FlexboxGridItem colspan={span}>
      <div>
        <h1 className='settings-card-title'>
          ProjectProgress
        </h1>
        <VanumoNumbersSliderCard project={project} />
      </div>
    </FlexboxGridItem>
  )
}

export default VanumoProjectEditRight
