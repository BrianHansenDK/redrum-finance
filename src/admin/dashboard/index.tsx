import React, { useState } from 'react'
import { auth } from '../../firebase'
import VanumoNavbar from './components/navbar/Navbar'
import NavCards from './components/NavCards'
import ProjectsSection from './components/ProjectsSection'
import VanumoSignIn from './sign-in'

const VanumoDashboard = () => {
  const [signedIn, setSignedIn] = useState<any>(false)
  return (
    <div>
      {auth.currentUser?.email == 'brianhansen.work@gmail.com' || auth.currentUser?.email == 'merhi@gmx.net' ? (
        <div>
          <VanumoNavbar/>
          <ProjectsSection />
          <NavCards />
        </div>
      ) : (
        <VanumoSignIn setSignedIn={setSignedIn} />
      )}
    </div>
  )
}

export default VanumoDashboard
