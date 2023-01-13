import React , {useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const FormAddPermohonan = () => {
    const [type, setType] = useState("Surat Pengantar");
    const [necassity, setNecassity] = useState("");
    const [msg, setMsg] =useState("");
    //const navigate  = useNavigate();

    const saveLaporan = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/permohonan', {
                type: type,
                necassity: necassity
            });
            // navigate("/home")
            Swal.fire({  
                position: 'top-end',  
                icon: 'success',  
                title: 'Sudah Berhasil Melakukan pengajuan',  
                showConfirmButton: false,  
                timer: 1500    
              });
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
                                <h1 className='title has-text-centered mt-10'>Pengajuan</h1>
                                <h2 className='subtitle has-text-centered'>Buatlah pengajuan!</h2>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field">
                                    <label className="label">Apa yang ingin anda ajukan</label>
                                    <div className="control">
                                        <select value={type} onChange={(e) => setType(e.target.value)} name="" id="">
                                            <option value="Surat Pengantar">Surat Pengantar</option>
                                            <option value="Surat Keteranga">Surat Keterangan</option>
                                            <option value="Surat Kematian">Surat Kematian</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Keperluan</label>
                                    <div className="control">
                                        <textarea className="input" value={necassity} onChange={(e) => setNecassity(e.target.value)} placeholder='Untuk keperluan apa anda melakukan pengajuan ..' ></textarea>
                                    </div>
                                </div>
                            
                                <div className="field">
                                    <div className="control">
                                        <button type='submit' className="button is-success">Ajukan</button>
                                    </div>
                                </div>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
                <nav className="footer is-fixed-bottom" role="navigation" aria-label="main navigation">
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

export default FormAddPermohonan