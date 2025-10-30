import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiHome, FiPlus, FiUser, FiLogOut, FiBook } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <FiBook size={28} />
          <span> EduSlides </span>
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="nav-link">
            <FiHome size={20} />
            <span>Explore</span>
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/create" className="nav-link">
                <FiPlus size={20} />
                <span>Create</span>
              </Link>
              <Link to="/profile" className="nav-link">
                <FiUser size={20} />
                <span>Profile</span>
              </Link>
              <button onClick={handleLogout} className="nav-link logout-btn">
                <FiLogOut size={20} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link btn-register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
