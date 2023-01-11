import React ,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

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
        await axios.delete(`http://localhost:5000/laporan/${laporanId}`);
        getLaporan();
    }
  return (
    <div>
        <h1 className="title">Laporan</h1>
        <h2 className="subtitle">Daftar Laporan</h2>
        <Link to="/laporan/add" className="button is-primary mb-2">Buat Laporan</Link>
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