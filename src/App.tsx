import React, { Children, useLayoutEffect, useState } from 'react'
import AboutUsPage from './routes/about-us-and-why/aboutUs.jsx';
import WhyMovies from './routes/about-us-and-why/whyMovies.jsx';
import SignInPage from './routes/auth/signIn.jsx';
import AccountPage from './routes/auth/account.jsx';
import SignUpPage from './routes/auth/signUp.jsx';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Root from './routes/root/root.jsx';
import AuthRoute from './routes/auth/components/AuthRoute';
import AppRoot from './routes/inside-app/pages/dashboard/AppRoot';
import InvestmentPage from './routes/inside-app/pages/investments/index.js';
import CreateProjectPage from './routes/createproject/index.js';
import CreateMoviePage from './routes/createmovie/index.js';
import ProjectDetailsPageWrapper from './routes/inside-app/pages/bundle/indexFunction.js';
import ProjectDetailsOverviewWrapper from './routes/inside-app/pages/bundle/extras/overview/indexFunction'
import ProjectDetailsMovieWrapper from './routes/inside-app/pages/bundle/extras/movies/indexFunction'
import ProjectDetailsQAndAWrapper from './routes/inside-app/pages/bundle/extras/q-and-a/indexFunction'
import ProjectDetailsUpdatesWrapper from './routes/inside-app/pages/bundle/extras/updates/indexFunction'
import ProjectDetailsInvestorWrapper from './routes/inside-app/pages/bundle/extras/investors/indexFunction'
import PortfolioPage from './routes/inside-app/pages/portfolio/index.js';
import TestPage from './routes/test/index.js';
import ProfilePageWrapper from './routes/inside-app/pages/profile/indexFunction';
import AccountAdmin from './routes/edit-accounts/index.js';
import UserCard from './routes/edit-accounts/components/UserCard.js';
import ScrollToTop from './components/ScollToTop.js';
import PageNotFound from './routes/not-found/index.js';
import DatabankPage from './routes/inside-app/pages/databank/index.js';


const App = () => {
  const [isVisible, setVisible] = useState(false)
  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)
  const location = useLocation();
  return (
    <>
      <ScrollToTop>

    <Routes>
      <Route path='*' element={<PageNotFound isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>} />
      <Route path='/' element={<Root isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/create-project' element={<CreateProjectPage />} />
      <Route path='/create-movie' element={<CreateMoviePage />} />
      <Route path='/accounts-admin' element={<AccountAdmin />} >
        <Route path='/accounts-admin/:userId' element={<UserCard />} />
      </Route>

      <Route path='/app' element={<AuthRoute link='/'><AppRoot /></AuthRoute>} />
      <Route path='/app/investments' element={<InvestmentPage />} />
      <Route path='/app/databank' element={<DatabankPage />} />
      {/* <Route path='/app/portfolio' element={<PortfolioPage />} /> */}
      <Route path='/app/bundle/:bundleId' element={<ProjectDetailsPageWrapper />} >
        <Route index element={<ProjectDetailsOverviewWrapper />} />
        <Route path='extras/movies' element={<ProjectDetailsMovieWrapper />} />
        <Route path='extras/q-and-a' element={<ProjectDetailsQAndAWrapper />} />
        <Route path='extras/updates' element={<ProjectDetailsUpdatesWrapper />} />
        <Route path='extras/investors' element={<ProjectDetailsInvestorWrapper />} />
      </Route>
      <Route path='/app/profile/:userId' element={<ProfilePageWrapper />}>

      </Route>

      <Route path='/about-us' element={<AboutUsPage isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/why-movies' element={<WhyMovies isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/account' element={<AuthRoute link='/sign-in'> <AccountPage /> </AuthRoute>} />
      <Route path='/test' element={<TestPage />} />
    </Routes>
      </ScrollToTop>
    </>
  )
}

export default App
