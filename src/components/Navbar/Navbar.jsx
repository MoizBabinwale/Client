import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { NavLink } from 'react-router-dom'

import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
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
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="flex flex-row gap-6 ">
          <Link to="/" className="nav-item nav-logo cursor-pointer mt-2">
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
          <form className="flex relative w-[500px] border-none">
            <input type="text" placeholder="Search..." className="w-[100%] pl-2  border-none" />
            <img src={search} alt="search" width="18" className="absolute top-3 end-2 cursor-pointer" />
          </form>
        </div>
        <div className="navbar-2">
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
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
              <button className="nav-item nav-links" onClick={handleLogout}>
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
