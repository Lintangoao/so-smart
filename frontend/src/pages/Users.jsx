import React, {useEffect} from 'react'
import Layout from './Layout'
import Userlist from '../components/Userlist'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWhoami } from "../features/authSlice";

const Users = () => {
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const {isError, user} = useSelector((state => state.auth));

    useEffect(()=> {
        dispacth(getWhoami());
    }, [dispacth]);

    useEffect(()=> {
        if (isError) {
            navigate("/")
        }
        if (user &  user.role !== "admin") {
            navigate("/dashboard");
        }
    }, [isError, user, navigate]);
  return (
    <Layout>
        <Userlist />
    </Layout>
  )
}

export default Users