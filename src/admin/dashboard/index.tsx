import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { auth } from '../../firebase'
import VanumoNavbar from './components/navbar/Navbar'
import NavCards from './components/NavCards'
import ProjectsSection from './components/project/ProjectsSection'
import VanumoSignIn from './sign-in'
import './components/styles/vanumoMain.scss'

const VanumoDashboard = () => {
  const [signedIn, setSignedIn] = useState<any>(true)
  const location = useLocation()

  return (
    <div>
      <div>
          <VanumoNavbar/>
          <div style={styles.contentWrap}>
            <Outlet />
          </div>
        </div>
      {/*((auth.currentUser?.email === import.meta.env.VITE_DEV_EMAIL || auth.currentUser?.email === import.meta.env.VITE_ADMIN_EMAIL)
       || location.pathname.includes('requests')) || signedIn ? (
        <div>
          <VanumoNavbar/>
          <div style={styles.contentWrap}>
            <Outlet />
          </div>
        </div>
      ) : (
        <VanumoSignIn setSignedIn={setSignedIn} />
      )*/}
    </div>
  )
}

const styles = {
  contentWrap: {
    paddingTop: 75,
  }
}

export default VanumoDashboard
