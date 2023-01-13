import React, {useEffect} from 'react'
import FormAddPermohonan from '../../../components/user/FormAddPermohonan/FormAddPermohonan';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWhoami } from "../../../features/authSlice";

const AddPermohonan = () => {
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
    <FormAddPermohonan/>
  )
}

export default AddPermohonan