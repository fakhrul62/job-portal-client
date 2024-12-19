import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import loginLottie from "../assets/lottie/login.json";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        //navigate after login
        navigate(location?.state ? location.state : "/");
        //update last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };
        form.reset();
      })
      .catch((error) => {
        console.log(error.message, "Wrong Credentials!");
        
      });
  };
  return (
    <div className="grid grid-cols-2 w-10/12 mx-auto">
      <div className="mt-5">
        <h2 className="text-center font-bold text-4xl my-5 font-logo">
          Sign In
        </h2>
        <div className="mt-5 mb-20">
          <form className="card-body font-body" onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn   hover:bg-fireb bg-white text-black border-black">
                Log In
              </button>
            </div>
          </form>
          <div className="my-4 text-center">
            <button
              onClick={googleSignIn}
              className="btn  bg-white text-black hover:bg-fireb font-body tracking-wide uppercase border-black"
            >
              Sign in with Google
            </button>
          </div>
          <h3 className="font-body text-center text-xl">
            New to this site?{" "}
            <Link to="/register" className="text-fireb">
              Register Now
            </Link>
          </h3>
        </div>
      </div>
      <div className="w-80 mx-auto flex items-center justify-center">
        <Lottie animationData={loginLottie}></Lottie>
      </div>
    </div>
  );
};

export default Login;
