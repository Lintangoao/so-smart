import React ,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

const PermohonanList = () => {
    const [permohonan, setPermohonan] = useState([]);

    useEffect(() => {
        getPermohonan();
    }, []);

    const getPermohonan = async() => {
        const response = await axios.get('http://localhost:5000/permohonan');
        setPermohonan(response.data);
    }

    const deletePermohonan = async (permohonanId) => {
        Swal.fire({  
            title: 'Apakah anda yakin ingin menghapus pengajuan?',  
            text: 'Pengajuan akan dihapus',  
            icon: 'warning',  
            showCancelButton: true,  
            confirmButtonColor: '#3085d6',  
            cancelButtonColor: '#d33',  
            confirmButtonText: 'Yes!'  
          });  
        await axios.delete(`http://localhost:5000/permohonan/${permohonanId}`);
        getPermohonan();
    }
    
  return (
    <div>
        <h1 className="title">Pengajuan</h1>
        <h2 className="subtitle">Daftar Pengajuan</h2>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <td>No</td>
                    <td>Nama Pengaju</td>
                    <td>Jenis</td>
                    <td>Keperluan</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {permohonan.map((Permohonan, index)=>(
                <tr key={Permohonan.id}>
                    <td>{index + 1}</td>
                    <td>{Permohonan.User.name}</td>
                    <td>{Permohonan.type}</td>
                    <td>{Permohonan.necassity}</td>
                    <td>
                        <Link to={`/Permohonan/edit/${Permohonan.id}`}></Link>
                        <button onClick={()=> deletePermohonan(Permohonan.id)} className="button is-small is-danger">Hapus</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default PermohonanList