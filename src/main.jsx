import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import Authcontext from './router/Authcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontext> 
           <RouterProvider router={router} />
    </Authcontext>
  </StrictMode>,
)
