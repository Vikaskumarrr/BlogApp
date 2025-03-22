import { useState } from "react"
import Password from "antd/es/input/Password";
import { Link } from "react-router-dom";
import { Mail, User } from "lucide-react";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });


  return (
    // <div className="main">
    //   <div className="main-outer">
    //     <div className="left-container">
    //       <div className="container-one">
    //         <h3>BLOG</h3>
    //         <Link to="/"><button>Back to Website</button></Link>
    //       </div>
    //       <div className="container-two">
    //         <h2>Capturing Moments <br></br>
    //           Creating Memories
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="relative right-container">
    //       <div>
    //         <h2>Create an account</h2>
    //         <p className="text-gray-400">
    //         Already have an account? <Link to="/login" className="text-purple-400">Login</Link>
    //       </p>
    //       </div>

    //       {/* {Form start here} */}

    //       {/* <form className="space-y-6">
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text font-medium ">Full Name</span>
    //           </label>

    //           <div className="relative">
    //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //               <User className="size-5 text-base-content/40" />
    //             </div>
    //             <input 
    //             type="text"
    //             className={`input input-bordered w-full pl-10`}
    //             placeholder="Enter Your Full Name"
    //             value={formData.name}
    //             onChange={(e)=> setFormData({...formData, name: e.target.value})}
    //             />
    //           </div>
    //         </div>

    //         <div className="email-form">
    //           <label>
    //             Email
    //           </label>
    //            <div className="flex">
    //             <Mail className="size-5"/>
    //             <input 
    //             type="email"
    //             placeholder="Email"
    //             value={formData.email}
    //             onChange={(e)=> formData({...formData, email: e.target.value})}
    //             />
    //            </div>
    //         </div>

    //       </form> */}
    
    //     </div>
    //   </div>
    // </div>
        <div className="flex justify-center items-center mt-21 h-[calc(100vh -80px)]">
          <SignUp  signInUrl="/login" />
        </div>
  
  )
}

export default Signup