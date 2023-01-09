import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root/root.js'
import './index.scss'
import './colors-ut.scss'
import './ut.scss'
import "rsuite/dist/rsuite.min.css";
import AboutUsPage from './routes/about-us-and-why/aboutUs.js';
import WhyMovies from './routes/about-us-and-why/whyMovies.js';
import SignInPage from './routes/auth/signIn.js';
import AccountPage from './routes/auth/account.js';
import SignUpPage from './routes/auth/signUp.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },
  {
    path: '/why-movies',
    element: <WhyMovies />
  },
  {
    path: '/sign-in',
    element: <SignInPage />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />
  },
  {
    path: '/account',
    element: <AccountPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
