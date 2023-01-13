import React from 'react'
import {NavLink} from 'react-router-dom'
import {IoLogoInstagram} from "react-icons/io5";
import "./Footer.scss"

const Footer = () => {
  return (
    <nav className="footer has-text-centered is-fixed-bottom has-shadow" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink className="navbar-item">
              <div className="logo has-text-white">
                <h1>COPYRIGHT SOSMART 2022</h1>
              </div>
            </NavLink>
        
            <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
              
            <div className="navbar-end">
              <div className="navbar-item has-item-white">
                <a href="https://google.com"><IoLogoInstagram/></a>
              </div>
            </div>
        </nav>
  )
}

export default Footer