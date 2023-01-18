import React from 'react'
import { getAuth } from 'firebase/auth'
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar'
import './styles/index.scss'
import BannerComponent from './components/banner'
import ProjectShowcase from '../../components/ProjectShowcase'
import { PROJECTS } from './components/util'
import MainBtn from '../../components/MainBtn'
import TestProjectsComponent from '../../components/test'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../firebase'

const AppRoot = () => {
  let data: any[] = []
  const reference = ref(database, 'projects/')
  onValue(reference, (snap) => (
    snap.forEach((project) => {
      data.push(project.val())
    })
  ))
  return (
    <LayoutWithSidebar>
      <BannerComponent />
      {
        data.map((project) => (
          <ProjectShowcase
            id={project.id}
            name={project.name}
            goal={project.goal}
            currentlyInvested={project.currentlyInvested}
            key={project.id}
            description={project.description}
            endDate={project.endDate}
            value={project.value}
            movies={project.movies}
            intro={project.intro}
            startDate={project.startDate}
            guaranteedReturn={project.guaranteedReturn} />
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
      <TestProjectsComponent />
    </LayoutWithSidebar>

  )
}

export default AppRoot