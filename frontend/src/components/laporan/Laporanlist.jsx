import React ,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

const Laporanlist = () => {
    const [laporan, setLaporan] = useState([]);

    useEffect(() => {
        getLaporan();
    }, []);

    const getLaporan = async() => {
        const response = await axios.get('http://localhost:5000/laporan');
        setLaporan(response.data);
    }

    const deleteLaporan = async (laporanId) => {
        Swal.fire({  
            title: 'Are you sure?',  
            text: 'User will have Admin Privileges',  
            icon: 'warning',  
            showCancelButton: true,  
            confirmButtonColor: '#3085d6',  
            cancelButtonColor: '#d33',  
            confirmButtonText: 'Yes!'  
          });
          // navigate(/ada) 
        await axios.delete(`http://localhost:5000/laporan/${laporanId}`);
        getLaporan();
        Swal.fire({  
            position: 'top-end',  
            icon: 'success',  
            title: 'Laporan berhasil dihapus',  
            showConfirmButton: false,  
            timer: 1500    
          });
    }
    
  return (
    <div>
        <h1 className="title">Laporan</h1>
        <h2 className="subtitle">Daftar Laporan</h2>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <td>No</td>
                    <td>Nama Pelapor</td>
                    <td>Jenis</td>
                    <td>Isi</td>
                    <td>Keterangan</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {laporan.map((laporan, index)=>(
                <tr key={laporan.id}>
                    <td>{index + 1}</td>
                    <td>{laporan.User.name}</td>
                    <td>{laporan.type}</td>
                    <td>{laporan.content}</td>
                    <td>{laporan.description}</td>
                    <td>
                        <Link to={`/laporan/edit/${laporan.id}`}></Link>
                        <button onClick={()=> deleteLaporan(laporan.id)} className="button is-small is-danger">Hapus</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Laporanlist