import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LogProvider } from './context/logincontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LogProvider>
        <App />
    </LogProvider>
    </BrowserRouter>
  </StrictMode>,
)
