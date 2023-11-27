import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { NavLink } from 'react-router-dom'

import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
// import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
import bars from "../../assets/bars-solid.svg";

const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <nav className="w-full lg:w-[1220px] pb-4">
      <div className="h-10 flex items-center justify-between ">
        <button className="ml-3  lg:hidden" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="flex flex-row lg:gap-7 lg:items-center lg:justify-center">
          <Link to="/" className="nav-item nav-logo cursor-pointer mt-2 hidden md:block">
            <img className="w-[150px] cursor-pointer" src={logo} alt="logo" />
          </Link>
          <Link to="/" className=" cursor-pointer mt-2 pl-2 pr-2 pt-1 items-center hover:bg-[#d3d2d2] rounded-md">
            <p> About</p>
          </Link>
          <Link to="/" className="cursor-pointer mt-2 pl-2 pr-2 pt-1 items-center hover:bg-[#d3d2d2] rounded-md">
            Products
          </Link>
          <Link to="/" className="cursor-pointer mt-2 pl-2 pr-2 pt-1 items-center hover:bg-[#d3d2d2] rounded-md">
            For Teams
          </Link>
          <form className="relative w-[500px]  hidden md:block mt-2  ">
            <input type="text" placeholder="Search..." className="w-[100%] pl-2 h-8 rounded-md border-0 bg-slate-200 " />
            <img src={search} alt="search" width="18" className="absolute top-2 end-2 cursor-pointer" />
          </form>
        </div>
        <div className="mt-4 mr-1">
          {User === null ? (
            <Link to="/Auth" className="p-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="15px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="p-2 bg-blue-500 hover:bg-blue-400 text-white  rounded-md" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
