import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Userlist = () => {
    const [users, setUser] = useState([]);

    useEffect(()=> {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
       setUser(response.data);
    }
    const deleteUser = async(id) => {
        try {
            Swal.fire({  
                title: 'Are you sure?',  
                text: 'User will have Admin Privileges',  
                icon: 'warning',  
                showCancelButton: true,  
                confirmButtonColor: '#3085d6',  
                cancelButtonColor: '#d33',  
                confirmButtonText: 'Yes!'  
              });  
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch(err) {
            console.log(err);
        }
    }
  return (
    <div>
        <h1 className='title'>Users</h1>
        <h2 className='subtitle'>Daftar user</h2>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>NIK</th>
                    <th>Alamat</th>
                    <th>Jenis Kelamin</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.nik}</td>
                    <td>{user.address}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td>
                        <button onClick={()=> deleteUser(user.id)} className="button is-small is-danger">Hapus</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Userlist