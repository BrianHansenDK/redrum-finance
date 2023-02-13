import React from 'react'
import { FlexboxGrid, Input, Stack } from 'rsuite'
import StackItem from 'rsuite/esm/Stack/StackItem'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { useMediaQuery } from '../../../../../../../misc/custom-hooks'
import VProjectEditFormLeftSide from './FormLeftSide'
import VanumoProjectEditRight from './VanumoProjectEditRight'

const EditInfoForm = ({project}: {project: FirebaseBundle}) => {
  const isMobile = useMediaQuery('(max-width: 992px)')
  return (
    <FlexboxGrid className='mt-2'>
      <VProjectEditFormLeftSide project={project} span={isMobile ? 24 : 10} />
      <VanumoProjectEditRight project={project} span={isMobile ? 24 : 12} />
    </FlexboxGrid>
  )
}

export default EditInfoForm
