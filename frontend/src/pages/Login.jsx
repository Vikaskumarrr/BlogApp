import { SignIn } from "@clerk/clerk-react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white rounded-2xl">
      {/* Left Side - Image Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-purple-900 to-gray-900 relative items-center justify-center p-10">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-3xl font-semibold text-center z-10">
          Capturing Moments, <br /> Creating Memories
        </h1>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-8 ">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-3xl font-bold">Already <span className="text-purple-400">have</span> an account</h2>
          <p className="text-gray-400">
            Dont have an account? <Link to="/signup" className="text-purple-400">Register</Link>
          </p>
          {/* <form className="space-y-4">
            {/* <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 bg-gray-800 p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 bg-gray-800 p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div> }
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-gray-800 p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-gray-400">
                I agree to the <a href="#" className="text-purple-400">Terms & Conditions</a>
              </label>
            </div>
            <button className="w-full bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition">
              Login 
            </button>
          </form> */}
          <div className="flex items-center gap-2 text-gray-400 my-4">
            <hr className="flex-grow border-gray-600" />
            <span>Or Login with</span>
            <hr className="flex-grow border-gray-600" />
          </div>
         
        <SignIn  signUpUrl="/signup" />
        </div>
      </div>
    </div>
  );
};

export default Login;