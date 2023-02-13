import React from 'react'
import { Avatar, FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { useMediaQuery } from '../../../../../../../../misc/custom-hooks'

const ProjectImages = ({project} : {project: any}) => {
  const isMobile = useMediaQuery('(max-width: 992px)')
  return (
    <div className='index-img-section'>
      <h1 className='section-title'>
        Images
      </h1>
      <FlexboxGrid>
        <FlexboxGridItem className='img-container' colspan={isMobile ? 24 : 6}>
          <p className='img-title'>
            Avatar image:
          </p>
          <Avatar src={project.smallImage} alt="Small image" size='lg' className='small-image'/>
        </FlexboxGridItem>
        <FlexboxGridItem className='img-container' colspan={isMobile ? 24 : 6}>
          <p className='img-title'>
            Overview image:
          </p>
          <img src={project.overviewImage} alt="Overview image" className='big-image'/>
        </FlexboxGridItem>
        <FlexboxGridItem className='img-container' colspan={isMobile ? 24 : 6}>
          <p className='img-title'>
            presentation image:
          </p>
          <img src={project.presentationImage} alt="Presentation image" className='big-image'/>
        </FlexboxGridItem>
        <FlexboxGridItem className='img-container' colspan={isMobile ? 24 : 6}>
        <p className='img-title'>
          Banner image:
        </p>
        <img src={project.banner} alt="Banner image" className='big-image'/>
        </FlexboxGridItem>
      </FlexboxGrid>
    </div>
  )
}

export default ProjectImages
