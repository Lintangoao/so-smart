import React, {useEffect} from 'react'
import LayoutUser from './LayoutUser';
import Welcome from './Welcome';
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';
import { getWhoami} from "../../features/authSlice";

const Home = () => {
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state => state.auth));

    useEffect(()=> {
        dispacth(getWhoami());
    }, [dispacth]);

    useEffect(()=> {
        if (isError) {
            navigate("/")
        }
    }, [isError, navigate]);

  return (
    <LayoutUser><Welcome/></LayoutUser>
  )
}

export default Home