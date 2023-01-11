import React from 'react'
import { NavLink , useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LogOut, reset } from "../../../features/authSlice"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import logo from "../../../SO-SMART.png";
import "./Navbar.scss";


const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    };
  return (
    <div>
         <nav className="navbar is-fixed-top">
            <div className="navbar-brand">
                <NavLink className="navbar-item" to="/home">
                    <h2>SOSMART</h2>
                </NavLink>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                </div>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start"> 
                <NavLink className="navbar-item">
                    Beranda
                </NavLink>
                <NavLink className="navbar-item">
                    Tentang
                </NavLink>
                <div className="navbar-item has-dropdown is-hoverable">
                    <NavLink className="navbar-item">
                        Pelayanan
                    </NavLink>
                    <div className="navbar-dropdown is-boxed">
                    <NavLink to="/laporan/add" className="navbar-item">
                        Laporan
                    </NavLink>
                    <NavLink to="/permohonan/create" className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                        Permohonan
                    </NavLink>
                </div>
            </div>
            </div>
                <div className="navbar-end">
                <div className="navbar-item">
                        <div className="media-content mr-5">
                            {/* <p className='control mr-5'>
                                <button className="button is-centered is-small is-rounded ">
                                    <span className="is-centered">
                                        <FontAwesomeIcon icon="user" />
                                    </span>
                                </button>
                            </p> */}
                            <p className="control is-text-centered">
                                <strong> 
                                    <NavLink className="control is-black" to="/users/profile">Hi</NavLink> , 
                                    {user && user.name}
                                </strong> 
                            </p>
                        </div>
                    
                    <p className="control mt-10">
                        <button onClick={ logout } className="button is-danger">
                            <span>Logout</span>
                        </button>
                    </p>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar