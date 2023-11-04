import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
} from "react-router-dom";
import './index.scss'
import './colors-ut.scss'
import './ut.scss'
import './responsive.scss'
import "rsuite/dist/rsuite.min.css";

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter> 
      <App />
    </BrowserRouter>
)
