import React, { Children, useEffect, useLayoutEffect, useState } from 'react'
import {loadEnv} from 'vite';
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
import VanumoDashboard from './admin/dashboard/index.js';
import HowItWorksPage from './routes/how-it-works/index.js';
import TermsAndConditionsPage from './routes/terms-and-conditions/index.js';
import MovieTAC from './routes/terms-and-conditions/MovieTAC.js';
import VanumoDashboardIndex from './admin/dashboard/components/VanumoDashboard.js';
import VanumoProjectPage from './admin/dashboard/components/project/page/VanumoProjectPage.js';
import VProjectIndex from './admin/dashboard/components/project/page/extra/index/VProjectIndex.js';
import VProjectSettings from './admin/dashboard/components/project/page/extra/settings/VProjectSettings.js';
import VanumoMoviesPage from './admin/dashboard/components/movies/page/index.js';
import VanumoRequestsPage from './admin/dashboard/components/requests/page/index.js';
import AppRootIndexPage from './routes/inside-app/pages/dashboard/AppRootIndexPage.js';
import NotificationsPage from './routes/inside-app/pages/notifications/index.js';
import './routes/inside-app/components/styles/redrum-pro.scss'
import { useMediaQuery } from './misc/custom-hooks.js';
import ImprintPage from './routes/imprint/Index.js';
import EnglishPrivacyPolicy from './routes/privacy-policy/EnglishDocument.js';
import GermanPrivacyPolicy from './routes/privacy-policy/GermanDocument.js';
import EnglishRelations from './routes/public-relations/EnglishDocument.js';
import GermanRelations from './routes/public-relations/GermanDocument.js';
import EnglishWithdrawalRights from './routes/withdrawal-rights/EnglishDocument.js';
import GermanWithdrawalRights from './routes/withdrawal-rights/GermanDocument.js';
import ContactPage from './routes/contact/index.js';
import ThankYouPage from './routes/inside-app/pages/purchase/ThankYouPage.js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import TACEnglish from './routes/terms-and-conditions/TACEnglish.js';
import FAQPage from './routes/faq/FAQPage.js';
import ProjectSheetPage from './routes/inside-app/pages/bundle/extras/sheet/Index.js';
import ProjectGalleryPage from './routes/inside-app/pages/bundle/extras/gallery/Index.js';
import ProjectVideosPage from './routes/inside-app/pages/bundle/extras/videos/Index.js';
import ProjectFilesPage from './routes/inside-app/pages/bundle/extras/documents/Index.js';
import PromoSection from './admin/dashboard/components/promocodes/PromoSection.js';
import DepositedPage from './routes/inside-app/pages/purchase/DepositedPage.js';
import CashBonusPage from './routes/inside-app/pages/cash-bonus/index.js';
import LoginFirst from './LoginFirst.js';


const App = () => {

  // Check if on public domain
  const currentLink = window.location.href;

  // Check if user is admin
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);


  const [isVisible, setVisible] = useState(false)
  const [isEnglish, setEnglish] = useState(false)
  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)
  const location = useLocation();
  const changeLan = () => {
    setEnglish(!isEnglish)
  }

  const isMobile = useMediaQuery('(max-width: 1100px)')

  return (
  <> 
    {currentLink.includes('redrumpro.com') && !isAdmin ? 
    (<LoginFirst setIsAdmin={setIsAdmin}/>) :
    (
    <PayPalScriptProvider options={{
      "client-id" : 'Ac-WLnlqTQB5NRhVK_KwJxjwqBVZ4K1M1UO2vlHD9oLtKz32JP7jDZ2ICqGxJWnQiOY0NqXcSo-86km0',
      currency : 'EUR',
      components: "buttons,marks,funding-eligibility",
    }}>
      <ScrollToTop>
      <Routes>

      {/* Vanumo / Admin */}
      <Route path='/vanumo' element={<VanumoDashboard />}>
        <Route index element={<VanumoDashboardIndex />}/>
        <Route path='create-project/' element={<CreateProjectPage />} />
        <Route path='create-movie' element={<CreateMoviePage/>} />
        <Route path='promo' element={<PromoSection/>} />
        <Route path='users/' element={<AccountAdmin />} >
          <Route path=':userId' element={<UserCard />} />
        </Route>
        <Route path='project/:projectId' element={<VanumoProjectPage />} >
          <Route index element={<VProjectIndex />} />
          <Route path='settings/' element={<VProjectSettings />}/>
        </Route>
        <Route path='movie/:movieId' element={<VanumoMoviesPage />}/>
        <Route path='requests/' element={<VanumoRequestsPage />} />
      </Route>

      {/* Test admin */}


      {/* The App itself */}
      <Route path='/app' element={<AuthRoute link='/'><AppRoot en={isEnglish} setEn={changeLan} /></AuthRoute>} >
        <Route index element={<AppRootIndexPage en={isEnglish}/>} />
        <Route path='investments/' element={<InvestmentPage en={isEnglish}/>} />
        <Route path='databank/' element={<DatabankPage en={isEnglish}/>} />
        <Route path='notifications/' element={<NotificationsPage en={isEnglish}/>}/>
        <Route path='cash-bonus/' element={<CashBonusPage en={isEnglish}/>}/>
      </Route>
      <Route path='/app/bundle/:bundleId' element={<ProjectDetailsPageWrapper en={isEnglish} setEn={changeLan} />} >
        <Route index element={<ProjectDetailsOverviewWrapper en={isEnglish} />} />
        <Route path='extras/movies' element={<ProjectDetailsMovieWrapper />} />
        <Route path='extras/q-and-a' element={<ProjectDetailsQAndAWrapper en={isEnglish} />} />
        <Route path='extras/updates' element={<ProjectDetailsUpdatesWrapper />} />
        <Route path='extras/investors' element={<ProjectDetailsInvestorWrapper />} />
        <Route path='extras/project-sheet' element={<ProjectSheetPage en={isEnglish} />} />
        <Route path='extras/gallery' element={<ProjectGalleryPage en={isEnglish} />} />
        <Route path='extras/videos' element={<ProjectVideosPage en={isEnglish} />} />
        <Route path='extras/documents' element={<ProjectFilesPage en={isEnglish} />} />
      </Route>
      <Route path='/app/profile/:userId' element={<ProfilePageWrapper en={isEnglish} setEn={changeLan} />}/>
      <Route path='/app/thank-you/:projectName' element={<ThankYouPage en={isEnglish} setEn={changeLan}/>}/>
      <Route path='/app/congratulations' element={<DepositedPage en={isEnglish} setEn={changeLan}/>}/>

      
      {/* Outside of App */}
      <Route path='*' element={<PageNotFound en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>} />
      <Route path='/' element={<Root en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/about-us' element={<AboutUsPage en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/why-movies' element={<WhyMovies en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/how-it-works' element={<HowItWorksPage en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal} />} />
      <Route path='/sign-in' element={<SignInPage en={isEnglish} setEn={changeLan} />} />
      <Route path='/sign-up' element={<SignUpPage en={isEnglish} setEn={changeLan} />} />
      <Route path='/contact' element={<ContactPage en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>} />

      {/*Rights and other juristictional documents */}
      <Route path='/imprint' element={<ImprintPage en={isEnglish} setEn={changeLan} isOpen={isVisible} openModal={openModal} closeModal={closeModal}/>}/>
      <Route path='/terms-and-conditions' element={<TermsAndConditionsPage en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>} >
        <Route index element={isEnglish ? (<TACEnglish/>) : (<MovieTAC />)} />
      </Route>
      <Route path='/privacy-policy' element={isEnglish ? (
      <EnglishPrivacyPolicy en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>) : (
      <GermanPrivacyPolicy en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>) }
      />
      <Route path='/faq' element={<FAQPage en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>}/>
      <Route path="/public-relations" element={isEnglish ? (
        <EnglishRelations en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>) : (
        <GermanRelations en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/> )}
      />
      <Route path="/withdrawal-rights" element={isEnglish ? (
        <EnglishWithdrawalRights en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>
      ) : (
        <GermanWithdrawalRights en={isEnglish} setEn={changeLan} isVisible={isVisible} openModal={openModal} closeModal={closeModal}/>
      )}
      />

      <Route path='/account' element={<AuthRoute link='/sign-in'> <AccountPage /> </AuthRoute>} />
      {/*<Route path='/test' element={<TestPage />} />*/}
    </Routes>
      </ScrollToTop>
    </PayPalScriptProvider>)}
    </>
  )
}

export default App
