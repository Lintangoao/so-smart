import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getWhoami, reset} from "../features/authSlice"
import "bulma/css/bulma.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RoleAcces = () => {
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

        if (user || isSuccess) {
            if (user && user.role === "admin") {
                navigate("/dasboard")
            }
        }

}

export default RoleAcces