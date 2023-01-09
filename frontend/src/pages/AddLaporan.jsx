import React, {useEffect} from 'react'
import Layout from './Layout'
import FormAddLaporan from '../components/FormAddLaporan'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWhoami } from "../features/authSlice";

const AddLaporan = () => {
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
    <Layout>
        <FormAddLaporan />
    </Layout>
  )
}

export default AddLaporan