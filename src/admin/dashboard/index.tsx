import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { auth } from '../../firebase'
import VanumoNavbar from './components/navbar/Navbar'
import NavCards from './components/NavCards'
import ProjectsSection from './components/project/ProjectsSection'
import VanumoSignIn from './sign-in'
import './components/styles/vanumoMain.scss'

const VanumoDashboard = () => {
  const [signedIn, setSignedIn] = useState<any>(false)

  return (
    <div>
      {auth.currentUser?.email == 'brianhansen.work@gmail.com' || auth.currentUser?.email == 'merhi@gmx.net' ? (
        <div>
          <VanumoNavbar/>
          <div style={styles.contentWrap}>
            <Outlet />
          </div>
        </div>
      ) : (
        <VanumoSignIn setSignedIn={setSignedIn} />
      )}
    </div>
  )
}

const styles = {
  contentWrap: {
    paddingTop: 75,
  }
}

export default VanumoDashboard
