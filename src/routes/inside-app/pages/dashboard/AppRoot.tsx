import React from 'react'
import { getAuth } from 'firebase/auth'
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar'
import './styles/index.scss'
import BannerComponent from './components/banner'
import ProjectShowcase from '../../components/ProjectShowcase'
import { PROJECTS } from './components/util'
import MainBtn from '../../components/MainBtn'
import TestProjectsComponent from '../../components/test'
import { child, get, onValue, ref } from 'firebase/database'
import { database } from '../../../../firebase'
import { Loader, useToaster } from 'rsuite'
import PushNotification from '../../../../components/Notification'

const AppRoot = ({en} : {en: boolean}) => {
  return (
    <LayoutWithSidebar en={en}>
      <BannerComponent />

      <ProjectShowcase />
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
