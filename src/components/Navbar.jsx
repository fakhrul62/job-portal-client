import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const li = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/latest-jobs">Latest Jobs</NavLink>
      {user && (
        <>
          <NavLink to="/my-applications">My Applications</NavLink>
          <NavLink to="/add-job">Add Job</NavLink>
          <NavLink to="/my-jobs">My Jobs</NavLink>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        const errorCode = error.message;
        console.log(errorCode);
      });
  };
  return (
    <div className="shadow-xl">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 shadow bg-zinc-100 p-5 border border-zinc-300 gap-5 hover:*:bg-blue-500 *:rounded-lg *:p-3 hover:*:text-white"
            >
              {li}
            </ul>
          </div>
          <Link to="/" className="text-xl flex items-center gap-2 font-bold">
            <span>
              <img src={logo} className="h-10" />
            </span>{" "}
            Job Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">{li}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <div className="flex gap-3 items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              ></div>
              <Link>
                <button
                  onClick={handleLogOut}
                  className="bg-transparent border-2 border-red-500 px-5 py-2 text-red-500 font-body font-semibold rounded"
                  type="button"
                >
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <div className="tooltip tooltip-bottom"></div>
              <Link to="/login">
                <button
                  className="bg-transparent border-2 border-green-600 px-5 py-2 text-green-600 font-body font-semibold rounded"
                  type="button"
                >
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
