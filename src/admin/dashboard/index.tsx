import React, { useState } from 'react'
import VanumoNavbar from './components/navbar/Navbar'
import VanumoSignIn from './sign-in'

const VanumoDashboard = () => {
  const [signedIn, setSignedIn] = useState<any>(false)
  return (
    <div>
      {signedIn ? (
        <div>
          <VanumoNavbar/>
        </div>
      ) : (
        <VanumoSignIn setSignedIn={setSignedIn} />
      )}
    </div>
  )
}

export default VanumoDashboard
