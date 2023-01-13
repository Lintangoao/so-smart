import React, {useEffect} from 'react'
import Layout from '../../admin/Layout'
import Laporanlist from '../../../components/laporan/Laporanlist'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWhoami } from "../../../features/authSlice";

const Laporan = () => {
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
        <Laporanlist />
    </Layout>
  )
}

export default Laporan