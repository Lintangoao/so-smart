import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { LogOut, reset } from "../../features/authSlice";

const Navbar = () => {
    const dispacth = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispacth(LogOut());
        dispacth(reset());
        navigate("/");
    };
  return (
    <div>
        <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to="/dashboard" className="navbar-item">
              <div className="logo has-text-white">
                <h1>ADMIN</h1>
              </div>
            </NavLink>
        
            <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
              
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={logout} className="button is-light">
                    Logout
                  </button>
                </div>
              </div>
            </div>
        </nav>
    </div>

  )
}

export default Navbar