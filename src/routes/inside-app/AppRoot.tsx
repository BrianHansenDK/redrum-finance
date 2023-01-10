import React from 'react'
import { getAuth } from 'firebase/auth'
import AppNavBar from './components/AppNavBar'
import SideBar from './components/SideBar'
import LayoutWithSidebar from './layouts/LayoutWithSidebar'
import { Button } from 'rsuite'

const AppRoot = () => {
  const auth = getAuth()
  const logout = () => {
    auth.signOut().then(() => window.location.reload())
  }
  return (
      <LayoutWithSidebar>
        <div className='pl-2 pt-3 pr-2'>
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