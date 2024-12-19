import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import registerLottie from "../assets/lottie/register.json";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
      .then((result) => {
        console.log("user created to FB", result.user);
        const newUser = { email, password };
        //save new user to the DB
        //using AXIOS
        
        form.reset();
      })
      .catch((error) => {
        console.log("you got error bro:", error.message);
      });
  };
  return (
    <div className="grid grid-cols-2 gap-5 w-10/12 mx-auto">
      <div className="mt-10">
        <h2 className="text-center font-bold text-4xl font-logo">
          Register now!
        </h2>
        <div className=" mb-20">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">Register</button>
            </div>
          </form>
          <h3 className="font-body text-center text-xl">
            Already have an account?{" "}
            <Link to="/login" className="text-mongo">
              Log in Now
            </Link>
          </h3>
        </div>
      </div>
      <div className="w-80 mx-auto flex items-center justify-center">
        <Lottie animationData={registerLottie}></Lottie>
      </div>
    </div>
  );
};

export default Register;
