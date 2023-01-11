import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset} from "../../features/authSlice";
import "bulma/css/bulma.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role] = useState("admin");
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            try {
                if (role === "admin") {
                    navigate("/dashboard")
                } 
            } catch (err) {
            
            }
        }
        dispacth(reset());
    }, [role, user, isSuccess, dispacth, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispacth(LoginUser({email, password}));
    }
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
                <form onSubmit={Auth}  className='box' >
                <h1 className='title is-4 has-text-centered'>Masuk</h1>
                {isError && <p className="has-text-centered mb-2">{message}</p>}
                    <div className="field">
                        <div className="control has-icons-left">
                            <input type="text" className="input" 
                            value={email} onChange={(e)=>setEmail(e.target.value)} 
                            placeholder='Email'/> 
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon="envelope" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control has-icons-left">
                            <input type="password" className="input"  
                            value={password} onChange={(e)=>setPassword(e.target.value)} 
                            placeholder='******'/>
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon="key" />
                            </span>
                        </div>
                    </div>
                    <div className="field mt-5">
                       <button type='submit' className="button is-success is-fullwidth">
                        {isLoading ? "Loading...": "Login" }</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginAdmin