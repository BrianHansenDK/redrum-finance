import React from 'react'
import { getAuth } from 'firebase/auth'
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar'
import { Button } from 'rsuite'
import './styles/index.scss'
import BannerComponent from './components/banner'
import ProjectShowcase from './components/ProjectShowcase'
import PLACEHOLDER from '../../../../components/images/about_us_page_imgs/ab_img1.svg'

const PROJECTS = [
  {
    backgroundImg: PLACEHOLDER, 
    title: 'Bundle 1', 
    maxAmount: 25000, 
    currentlyInvested:10000, 
    index: 0,
  },
  {
    backgroundImg: PLACEHOLDER, 
    title: 'Bundle 2', 
    maxAmount: 92500, 
    currentlyInvested:7800, 
    index: 1,
  }
]

const AppRoot = () => {
  const auth = getAuth()
  const logout = () => {
    auth.signOut().then(() => window.location.reload())
  }

  function toFixedIfNecessary( value:any, dp:any ){
    return +parseFloat(value).toFixed( dp );
  }
  return (
      <LayoutWithSidebar>
        <BannerComponent/>
        {
          PROJECTS.map((project) => (
            <ProjectShowcase
            backgroundImg={project.backgroundImg}
            title={project.title}
            maxAmount={project.maxAmount}
            currentlyInvested={project.currentlyInvested}
            percentage={toFixedIfNecessary((project.currentlyInvested/project.maxAmount) * 100, 2)}
            key={project.index}
             />
          ) )
        }
        <div className='pl-2 pt-3 pr-2 pb-3'>
          <h1>
            Welcome {auth.currentUser?.displayName?.split(' ')[0].toString()}
          </h1>
          <Button appearance='primary' color='red' onClick={logout}>
            Logout
          </Button>
        </div>
        
      </LayoutWithSidebar>
    
  )
}

export default AppRoot