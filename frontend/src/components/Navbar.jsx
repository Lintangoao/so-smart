import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import logo from "../logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

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
              <img src={logo} width="112" height="28" alt="logo"/>
            </NavLink>
        
            <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">

          {user && user.role === "user" && (
                <div className="navbar-start">
                <NavLink className="navbar-item">
                  Beranda
                </NavLink>
          
                <NavLink className="navbar-item">
                  Tentang
                </NavLink>
          
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink className="navbar-link">
                    Pelayanan
                  </NavLink>
          
                  <div className="navbar-dropdown">
                    <NavLink to="/laporan/add" className="navbar-item">
                      Laporan
                    </NavLink>
                    <NavLink className="navbar-item">
                      Permohonan
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
        
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={logout} className="button is-light">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>

  )
}

export default Navbar