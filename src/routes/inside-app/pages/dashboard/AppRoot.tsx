import React from 'react'
import { getAuth } from 'firebase/auth'
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar'
import { Button } from 'rsuite'
import './styles/index.scss'
import BannerComponent from './components/banner'
import ProjectShowcase from '../../components/ProjectShowcase'
import { PROJECTS } from './components/util'
import MainBtn from '../../components/MainBtn'

const AppRoot = () => {


  function toFixedIfNecessary(value: any, dp: any) {
    return +parseFloat(value).toFixed(dp);
  }
  return (
    <LayoutWithSidebar>
      <BannerComponent />
      {
        PROJECTS.map((project) => (
          <ProjectShowcase
            index={project.index}
            backgroundImg={project.backgroundImg}
            title={project.title}
            maxAmount={project.maxAmount}
            currentlyInvested={project.currentlyInvested}
            key={project.index}
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