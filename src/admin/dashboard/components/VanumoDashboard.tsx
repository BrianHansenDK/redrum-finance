import React from 'react'
import VanumoMoviesSection from './movies'
import ProjectsSection from './project/ProjectsSection'

const VanumoDashboardIndex = () => {
  return (
    <div className='pb-5 pt-2'>
      <ProjectsSection />
      <VanumoMoviesSection />
    </div>
  )
}

export default VanumoDashboardIndex
