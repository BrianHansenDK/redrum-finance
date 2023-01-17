import React, { Children, useState } from 'react'
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
import BundleMoviesDetals from './routes/inside-app/pages/bundle/extras/movies/index.js';
import BundleQAndADetails from './routes/inside-app/pages/bundle/extras/q-and-a/index.js';
import BundleUpdatesDetails from './routes/inside-app/pages/bundle/extras/updates/index.js';
import BundleInvestorsDetails from './routes/inside-app/pages/bundle/extras/investors/index.js';
import BundleOverview from './routes/inside-app/pages/bundle/extras/overview/index.js';


const App = () => {
  const [isVisible, setVisible] = useState(false)
  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)
  return (
    <Routes>
      <Route path='/' element={<Root isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/app' element={<AuthRoute link='/'><AppRoot /></AuthRoute>} />
      <Route path='/app/investments' element={<InvestmentPage />} />
      <Route path='/app/bundle/:bundleId' element={<ProjectDetailsPage />} >
        <Route index element={<BundleOverview />} />
        <Route path='extras/movies' element={<BundleMoviesDetals />} />
        <Route path='extras/q-and-a' element={<BundleQAndADetails />} />
        <Route path='extras/updates' element={<BundleUpdatesDetails />} />
        <Route path='extras/investors' element={<BundleInvestorsDetails />} />
      </Route>
      <Route path='/about-us' element={<AboutUsPage isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/why-movies' element={<WhyMovies isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/account' element={<AuthRoute link='/sign-in'> <AccountPage /> </AuthRoute>} />
    </Routes>
  )
}

export default App