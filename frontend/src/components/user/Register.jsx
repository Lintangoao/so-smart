import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nik, setNik] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("Laki-laki");
    const [role] = useState("user");
    const [setMessage] = useState("");
    const navigate = useNavigate();

    const saveUser = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/users/register", {
          name: name,
          email: email,
          password: password,
          nik: nik,
          address: address,
          gender: gender,
          role: role,
        });
        navigate("/");
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message);
        }
      }
    }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
            <form onSubmit={saveUser} className="box">
              <h1 className='title is-4 has-text-centered'>Daftar</h1>
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}  
                      placeholder="Nama"/>
                      <span class="icon is-small is-left">
                        <FontAwesomeIcon icon="user"/>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="email"  
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}  
                      placeholder="Email"/>
                      <span class="icon is-small is-left">
                        <FontAwesomeIcon icon="envelope"/>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="password"   
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}  
                      placeholder="Password"/>
                      <span class="icon is-small is-left">
                        <FontAwesomeIcon icon="lock"/>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <label className="has-text-left">NIK</label>
                    <p class="control">
                      <input class="input" type="text"  
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}  
                      placeholder="Masukan NIK"/>
                    </p>
                  </div>
                  <div class="field">
                    <label className="has-text-left">Alamat</label>
                    <p class="control">
                      <input class="input" type="text"  
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}  
                      placeholder="Masukan alamat tempat tinggal ..."/>
                    </p>
                  </div>
                  <div class="select">
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div className="field mt-5">
                       <button type='submit' className="button is-success is-fullwidth">
                        {"Daftar" }</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register