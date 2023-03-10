import React , {useEffect} from "react"
import Layout from "./Layout";
import Welcome from "../../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWhoami } from "../../features/authSlice";

const Dashboard = () => {
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
    <div>
     <Layout><Welcome/></Layout>
    </div>
  )
}

export default Dashboard