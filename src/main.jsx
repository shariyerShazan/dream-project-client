import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './routes/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={Router}/>
  </StrictMode>,
)
