import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './auth/login'
import { Signup } from './auth/Signup'
import { NotFound } from './auth/NotFound'
import { useRef } from 'react'
import Auth from './auth/Auth'
import { useSelector } from 'react-redux'

function App() {

const authRef = useRef(new Auth())
const loginStatus = useSelector(state => state.auth.isLoggedIn)
  if(!loginStatus){ 
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="login"
              element={
                <Login auth={authRef.current}  />
              }
            />
            <Route
              path='signup'
              element={
                <Signup auth={authRef.current} />
              }
            />
  
            <Route path='*'  Component={NotFound}/>
  
          </Routes>
        </BrowserRouter>
      </>
    )
  }

  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<div>Inside the home <Route></Route></div>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
