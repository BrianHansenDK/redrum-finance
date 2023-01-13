import React, { useState } from 'react'
import AboutUsPage from './routes/about-us-and-why/aboutUs.jsx';
import WhyMovies from './routes/about-us-and-why/whyMovies.jsx';
import SignInPage from './routes/auth/signIn.jsx';
import AccountPage from './routes/auth/account.jsx';
import SignUpPage from './routes/auth/signUp.jsx';
import { Route, Routes } from 'react-router-dom';
import Root from './routes/root/root.jsx';
import { initializeApp } from 'firebase/app';
import { config } from './config/config.js';
import AuthRoute from './routes/auth/components/AuthRoute';
import { getAuth } from 'firebase/auth';
import AppRoot from './routes/inside-app/pages/dashboard/AppRoot';
import InvestmentPage from './routes/inside-app/pages/investments/index.js';
import ProjectDetailsPage from './routes/inside-app/pages/bundle/index.js';

initializeApp(config.firebaseConfig)

const App = () => {
  const auth = getAuth()
  const [isVisible, setVisible] = useState(false)
  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)
  return (
    <Routes>
      <Route path='/' element={<Root isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/app' element={<AuthRoute link='/'><AppRoot /></AuthRoute>} />
      <Route path='/app/investments' element={<InvestmentPage />} />
      <Route path='/app/bundle/:bundleId' element={<ProjectDetailsPage />} />
      <Route path='/about-us' element={<AboutUsPage isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/why-movies' element={<WhyMovies isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/account' element={<AuthRoute link='/sign-in'> <AccountPage /> </AuthRoute>} />
    </Routes>
  )
}

export default App