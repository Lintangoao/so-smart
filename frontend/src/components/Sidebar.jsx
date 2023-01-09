import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import {IoPerson, IoHome, IoLogOut, IoNewspaper} from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
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
            {user && user.role === "admin" && (
                <aside className="menu pl-2 has-shadow">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li><NavLink to={"/dashboard"}><IoHome/>Dashboard</NavLink></li>
                    <li><NavLink to={"/laporan"}><IoNewspaper/>Laporan</NavLink></li>
                </ul>
            
                    <div>
                        <p className="menu-label">
                            Admin
                        </p>
                        <ul className="menu-list">
                            <li><NavLink to={"/users"}><IoPerson/>Users</NavLink></li>
                        </ul>
                    </div>
                
                <p className="menu-label">
                    Settings
                </p>
                <ul className="menu-list">
                    <li>
                        <button onClick={logout} className="buttin is-white"><IoLogOut/>Logout</button>
                    </li>
                    
                </ul>
                </aside>
            )}

        </div>
    )
}

export default Sidebar