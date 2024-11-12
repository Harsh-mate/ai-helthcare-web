import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../features/authSlice";

const Header = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { isAuthenticated, user } = useSelector((state) => state.auth || {}); // Add a fallback to avoid undefined

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login'); 
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                                        <img src={props.Logo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav ml-12 mb-2 mb-lg-0">
                                        <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    {isAuthenticated ? (
                                        <div className="relative">
                                            <img
                                                src={user?.profilePicture || "/default-profile.png"}
                                                alt="Profile"
                                                className="w-8 h-8 rounded-full cursor-pointer"
                                                onClick={toggleDropdown}
                                            />
                                            {dropdownOpen && (
                                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                                                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My Profile</Link>
                                                    <Link to="/history" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My History</Link>
                                                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link onClick={ClickHandler} to="/login" className="text-gray-800">Login</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
