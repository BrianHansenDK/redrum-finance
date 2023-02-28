import React from 'react'
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar'
import './styles/index.scss'
import { Outlet } from 'react-router-dom'

const AppRoot = ({en, setEn} : {en: boolean, setEn: any}) => {
  return (
    <LayoutWithSidebar en={en} setEn={setEn}>
      <Outlet />

    </LayoutWithSidebar>

  )
}

export default AppRoot
