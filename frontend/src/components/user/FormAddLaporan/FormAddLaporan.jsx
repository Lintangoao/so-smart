import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddLaporan = () => {
    const [type, setType] = useState("");
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
            navigate("/laporan")
        } catch (err){
            if (err.response) {
                setMsg(err.response.data.msg);
            }
        }
    }
  return (
    <div>
        <div className="content">
        <h1 className='title has-text-centered mt-10'>Laporan</h1>
        <h2 className='subtitle has-text-centered'>Ayo Laporan!</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="colummn is-4">
                <form onSubmit={saveLaporan} className="box">
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
                            <input type="text" className="input" value={content} onChange={(e) => setContent(e.target.value)} placeholder='Isi'/>
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
    </div>
  )
}

export default FormAddLaporan