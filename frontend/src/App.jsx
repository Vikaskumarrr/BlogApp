
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const App = () => {





  return (
    <div >
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} /> 


      </Routes>
    </div>
  )
}

export default App