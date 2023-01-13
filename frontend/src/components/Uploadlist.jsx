import React,{ useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const Uploadlist = () => {
    const [upload, setUpload] = useState([]);
 
    useEffect(() => {
        getUpload();
    }, []);
    
    const getUpload = async () => {
        const response = await axios.get("http://localhost:5000/upload");
        setUpload(response.data);
    };
  return (
    <div className="container mt-5">
      <Link to="/add" className="button is-success">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
        {upload.map((uploads) => (
          <div className="column is-one-quarter" key={uploads.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={uploads.url} alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{uploads.name}</p>
                  </div>
                </div>
              </div>
 
              {/* <footer className="card-footer">
                <Link to={`edit/${uploads.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  // onClick={() => deleteuploads(uploads.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Uploadlist