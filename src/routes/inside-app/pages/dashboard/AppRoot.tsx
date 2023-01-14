import React from 'react'
import { getAuth } from 'firebase/auth'
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar'
import './styles/index.scss'
import BannerComponent from './components/banner'
import ProjectShowcase from '../../components/ProjectShowcase'
import { PROJECTS } from './components/util'
import MainBtn from '../../components/MainBtn'

const AppRoot = () => {
  return (
    <LayoutWithSidebar>
      <BannerComponent />
      {
        PROJECTS.map((project) => (
          <ProjectShowcase
            index={project.index}
            image={project.image}
            name={project.name}
            goal={project.goal}
            currentlyInvested={project.currentlyInvested}
            key={project.index}
            description={project.description}
            endDate={project.endDate}
            yearlyReturn={project.yearlyReturn}
            returnSum={project.returnSum}
            value={project.value}
            movies={project.movies}
          />
        ))
      }
      <div className='pl-2 pt-3 pr-2 pb-3'>
        <MainBtn
          pressed={() => null}
          btnColor='blue'
          btnAppearance='primary'
          btnSize='lg'
          isBlock={true}
          content='How it works'
        />

      </div>

    </LayoutWithSidebar>

  )
}

export default AppRoot