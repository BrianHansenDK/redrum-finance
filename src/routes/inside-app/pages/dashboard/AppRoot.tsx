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
import { Outlet } from 'react-router-dom'

const AppRoot = ({en, setEn} : {en: boolean, setEn: any}) => {
  return (
    <LayoutWithSidebar en={en} setEn={setEn}>
      <Outlet />

    </LayoutWithSidebar>

  )
}

export default AppRoot
