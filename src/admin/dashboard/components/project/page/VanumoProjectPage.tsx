import { get, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { database } from '../../../../../firebase'
import VanumoLoader from '../../VanumoLoader'
import VProjectBottomNavbar from './components/Navbar'

const VanumoProjectPage = () => {
  return (
    <>
    <div>
    <Outlet />
    </div>
    <VProjectBottomNavbar />
    </>
  )
}


export default VanumoProjectPage
