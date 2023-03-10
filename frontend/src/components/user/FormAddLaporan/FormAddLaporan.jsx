import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./FormAddLaporan.scss";
import Swal from 'sweetalert2';

const FormAddLaporan = () => {
    const [type, setType] = useState("Laporan Bulanan");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");
    const [msg, setMsg] =useState("");
    const navigate  =useNavigate();

    const saveLaporan = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/laporan', {
                type: type,
                content: content,
                description: description
            });
            //navigate("/home")
            Swal.fire({  
                position: 'top-end',  
                icon: 'success',  
                title: 'Laporan berhasil dibuat',  
                showConfirmButton: false,  
                timer: 1500    
              });
            navigate("/laporan/add")  
        } catch (err){
            if (err.response) {
                setMsg(err.response.data.msg);
            }
        }
    }
  return (
    <div>
        <div className="content">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
            </a>
        
            <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-end">
                <div className="navbar-item">   
                    <p className="control mt-10">
                        <Link className="button" to="/home">Kembali</Link>
                    </p>
                </div>
                </div>
        
        </nav>
            <div className="card is-shadowless has-background-grey-lighter">
                <div className="card-content">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form onSubmit={saveLaporan} className="box">
                                <h1 className='title has-text-centered mt-10'>Laporan</h1>
                                <h2 className='subtitle has-text-centered'>Ayo Laporan!</h2>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field">
                                    <label className="label">Jenis Laporan</label>
                                    <div className="control">
                                        <select value={type} onChange={(e) => setType(e.target.value)} name="" id="">
                                            <option value="Laporan Bulanan">Bulanan</option>
                                            <option value="Laporan Tahunan">Tahunan</option>
                                            <option value="Laporan Darurat">Darurat</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Isi</label>
                                    <div className="control">
                                        <textarea className="input" value={content} onChange={(e) => setContent(e.target.value)} placeholder='Isi' ></textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Keterangan</label>
                                    <div className="control">
                                        <input type="textarea" className="input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Keterangan'/>
                                    </div>
                                </div>
                            
                                <div className="field">
                                    <div className="control">
                                        <button type='submit' className="button is-success">Kirim</button>
                                    </div>
                                </div>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
                <nav className="footer" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                        {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
                        </a>
                    
                        <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>
                </nav>
        </div>
    </div>
  )
}

export default FormAddLaporan