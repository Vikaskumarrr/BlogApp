import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react';

// importing the clerk from env
const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ; 

if(!CLERK_KEY){ 
  throw new Error("Missing Publisable key");
}


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ClerkProvider publishableKey={CLERK_KEY} afterSignOutUrl={"/"}>
    <App />
  </ClerkProvider>
  </BrowserRouter>

)
