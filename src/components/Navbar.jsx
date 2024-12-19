import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const li = (
    <>
      <Link to="/">Home</Link>
      <Link to="/latest-jobs">Latest Jobs</Link>
      <Link to="/my-applications">My Applications</Link>
      <Link to="/add-job">Add Job</Link>
      <Link to="/my-jobs">My Jobs</Link>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => {
        const errorCode = error.message;
        console.log(errorCode);
      });
  };
  return (
    <div className="shadow-xl">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {li}
            </ul>
          </div>
          <a className="text-xl">Job Portal</a>
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
              >
                
              </div>
              <Link>
                <button
                  onClick={handleLogOut}
                  className="bg-transparent border-2 border-fireb px-5 py-2 text-fireb font-body font-semibold rounded"
                  type="button"
                >
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <div className="tooltip tooltip-bottom">
              </div>
              <Link to="/login">
                <button
                  className="bg-transparent border-2 border-mongo px-5 py-2 text-mongo font-body font-semibold rounded"
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
