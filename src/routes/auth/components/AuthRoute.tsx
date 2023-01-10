import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export interface IAuthRouteProps {children:any, link:string}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const {children, link} = props

    const auth = getAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      
      const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false)
            const uid = user.uid
        } else {
            console.log('Unauthorized')
            navigate(link)
            
        }
      })
      AuthCheck()
      return () => AuthCheck()
    }, [auth])
    
      if (loading) {
        return <p>Loading... </p>
      }
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthRoute