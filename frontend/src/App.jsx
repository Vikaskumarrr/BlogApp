
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";


const App = () => {





  return (
    <div className="px-4 md:px-8" >
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/posts" />
        <Route path="/:" element={<PostList />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} /> 


      </Routes>
    </div>
  )
}

export default App