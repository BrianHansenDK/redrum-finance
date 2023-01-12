import React from 'react'
import { getAuth } from 'firebase/auth'
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar'
import { Button } from 'rsuite'
import './styles/index.scss'
import BannerComponent from './components/banner'
import ProjectShowcase from './components/ProjectShowcase'
import PLACEHOLDER from '../../../../components/images/about_us_page_imgs/ab_img1.svg'
import MainBtn from '../../components/MainBtn'

const PROJECTS = [
  {
    backgroundImg: PLACEHOLDER,
    title: 'Bundle 1',
    maxAmount: 25000,
    currentlyInvested: 10000,
    index: 0,
  },
  {
    backgroundImg: PLACEHOLDER,
    title: 'Bundle 2',
    maxAmount: 92500,
    currentlyInvested: 7800,
    index: 1,
  }
]

const AppRoot = () => {
  const auth = getAuth()


  function toFixedIfNecessary(value: any, dp: any) {
    return +parseFloat(value).toFixed(dp);
  }
  return (
    <LayoutWithSidebar>
      <BannerComponent />
      {
        PROJECTS.map((project) => (
          <ProjectShowcase
            backgroundImg={project.backgroundImg}
            title={project.title}
            maxAmount={project.maxAmount}
            currentlyInvested={project.currentlyInvested}
            percentage={toFixedIfNecessary((project.currentlyInvested / project.maxAmount) * 100, 2)}
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