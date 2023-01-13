import React , {useEffect} from 'react'
import Layout from '../../admin/Layout'
import PermohonanList from '../../../components/admin/permohonan/PermohonanList';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWhoami } from "../../../features/authSlice";

const Permohonan = () => {
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
        <PermohonanList/>
    </Layout>
  )
}

export default Permohonan