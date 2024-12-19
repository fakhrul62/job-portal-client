import React, { useState } from "react";

const DoubleForm = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  return (
    <div className={`container ${isRightPanelActive ? "right-panel-active" : ""} relative w-[768px] max-w-full min-h-[480px] bg-white rounded-lg shadow-xl overflow-hidden`}>
      <div className="form-container sign-up-container absolute top-0 h-full w-1/2 transition-transform duration-600 ease-in-out">
        <form className="bg-white flex flex-col items-center justify-center h-full px-12 text-center">
          <h1 className="font-bold">Create Account</h1>
          <div className="social-container my-4 flex">
            <a href="#" className="social border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 mx-2">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className="text-xs">or use your email for registration</span>
          <input type="text" placeholder="Name" className="bg-gray-200 p-3 my-2 w-full rounded" />
          <input type="email" placeholder="Email" className="bg-gray-200 p-3 my-2 w-full rounded" />
          <input type="password" placeholder="Password" className="bg-gray-200 p-3 my-2 w-full rounded" />
          <button className="bg-red-500 text-white py-2 px-6 rounded-full mt-4">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container absolute top-0 h-full w-1/2 transition-transform duration-600 ease-in-out z-10">
        <form className="bg-white flex flex-col items-center justify-center h-full px-12 text-center">
          <h1 className="font-bold">Sign in</h1>
          <div className="social-container my-4 flex">
            <a href="#" className="social border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 mx-2">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social border border-gray-300 rounded-full flex items-center justify-center h-10 w-10 mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className="text-xs">or use your account</span>
          <input type="email" placeholder="Email" className="bg-gray-200 p-3 my-2 w-full rounded" />
          <input type="password" placeholder="Password" className="bg-gray-200 p-3 my-2 w-full rounded" />
          <a href="#" className="text-sm text-gray-600">Forgot your password?</a>
          <button className="bg-red-500 text-white py-2 px-6 rounded-full mt-4">Sign In</button>
        </form>
      </div>
      <div className="overlay-container absolute top-0 h-full w-1/2 overflow-hidden z-50">
        <div className={`overlay bg-gradient-to-r from-red-500 to-pink-500 text-white h-full w-[200%] flex items-center transition-transform duration-600 ease-in-out ${isRightPanelActive ? "transform translate-x-[50%]" : ""}`}>
          <div className={`overlay-panel overlay-left absolute top-0 h-full w-1/2 flex flex-col items-center justify-center text-center transform transition-transform duration-600 ease-in-out ${isRightPanelActive ? "translate-x-0" : "translate-x-[-20%]"}`}>
            <h1 className="font-bold">Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button
              className="ghost bg-transparent border-white border text-white py-2 px-6 rounded-full mt-4"
              onClick={() => setIsRightPanelActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className={`overlay-panel overlay-right absolute top-0 h-full w-1/2 right-0 flex flex-col items-center justify-center text-center transform transition-transform duration-600 ease-in-out ${isRightPanelActive ? "translate-x-0" : "translate-x-[20%]"}`}>
            <h1 className="font-bold">Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button
              className="ghost bg-transparent border-white border text-white py-2 px-6 rounded-full mt-4"
              onClick={() => setIsRightPanelActive(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleForm;
