import React, {useEffect} from 'react'
import FormAddLaporan from '../../../components/user/FormAddLaporan/FormAddLaporan';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWhoami } from "../../../features/authSlice";

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
    <FormAddLaporan/>
  )
}

export default AddLaporan