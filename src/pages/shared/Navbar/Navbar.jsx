import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // localStorage.removeItem("car-doctor-token");
      })
      .catch((error) => console.log(error));
  };

  const navItem = (
    <>
      <li>
        <Link
          className="text-amber-900 font-serif text-xl hover:bg-sky-700 hover:text-amber-400	"
          to="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className="text-amber-900 font-serif text-xl  hover:bg-sky-700 hover:text-amber-400"
          to="/about"
        >
          About
        </Link>
      </li>

      {!user?.email ? (
        <li>
          <Link
            className="text-amber-900 font-serif text-xl  hover:bg-sky-700 hover:text-amber-400"
            to="/login"
          >
            Login
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar  h-8 mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          {
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
          }
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-accent">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
