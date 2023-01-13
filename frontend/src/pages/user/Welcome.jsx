import React from 'react'
import {Link} from 'react-router-dom';
import "./Welcome.scss";
//import image from "../../assets/image/informasi/banner-2.jpg"

const Welcome = () => {
  return (
    <div>
      <section className="hero is-fullheight is-fullwidth">
        <div className="slider">
          <div className="container">
            <h1 className="title has-text-centered has-text-white">
                Selamat Datang Di SOSMART
              </h1>
              <h3 className="subtitle has-text-centered has-text-white">
                Website Informatif Desa Karangsoka
              </h3>
            <div className="columns is-centered">
            
              <Link className="button is-primary is-rounded">Mulai</Link>
            </div>
          </div>
        </div>
      </section>
      {/* slider-end */}

     

      {/* informasi-start */}
      <section className="section latest-blog">
        <div className="container">
          <div className="columns is-justify-content-center is-desktop">
            <div className="column is-7-desktop has-text-centered">
              <div className="section-title">
                <span className="h4 has-text-primary">Berita terbaru</span>
                <h2 className="mt-4 content-title">Informasi aktual dari Pemerintah desa Karangsoka</h2>
              </div>
            </div>
          </div>

          <div className="columns is-multiline is-justify-content-center">
            <div className="column is-4-desktop is-6-tablet">
              <div className="blog-item">
                <img src="../../assets/image/informasi/banner-2.jpg" alt="" className=""/>

                <div className="card-body mt-2">
                  <span className="text-sm text-color is-uppercase has-text-weight-bold">January 8, 2023</span>
                  <h3 className="mb-3"><a href="blog-single.html" className="">Informasi 1</a></h3>
                  <p className="mb-4">ini adalah informasi 1</p>
                </div>
              </div>
            </div>

            <div className="column is-4-desktop is-6-tablet">
              <div className="blog-item">
                {/* <img src="images/blog/blog_2.jpg" alt="" className=""> */}

                <div className="card-body mt-2">
                  <span className="text-sm text-color is-uppercase has-text-weight-bold">January 9, 2023</span>
                  <h3 className="mb-3"><a href="blog-single.html" className="">Informasi 2</a></h3>
                  <p className="mb-4">ini adalah informasi 2</p>
                </div>
              </div>
            </div>

            <div className="column is-4-desktop is-6-tablet">
              <div className="blog-item">
                {/* <img src="images/blog/blog_3.jpg" alt="" className=""> */}

                <div className="card-body mt-2">
                  <span className="text-sm text-color is-uppercase has-text-weight-bold">January 10, 2023</span>
                  <h3 className="mb-3"><a href="blog-single.html" className="">Informasi 3</a></h3>
                  <p className="mb-4">ini adalah informasi 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* informasi-end */}

       {/* tentang-start */}
       <div className="about">
        <section className="content has-background-light">
          <div className="block has-text-centered">
                <h6>Tentang SOSMART</h6>
                <p>Karangsoka adalah desa di kecamatan Kembaran, Banyumas, Jawa Tengah, Indonesia.<br/> sebelah utara berbatasan dengan desa bantarwuni, sebelah selatan berbatasan dengan desa bojongsari, sebelah barat berbatasan dengan desa dukuhwaluh dan sebelah timur berbatasan dengan desa karangsari. </p>
                <p>SOSMART merupakan website informatif desa Karangsoka. Nama SOSMART diambil dari 2 kata yaitu SO(KarangSOka) dan SMART yang artinya cerdas dalam bahasa Inggris</p>
              </div>
        </section>
      </div>
      
      {/* tentang-end */}
    </div>
    
  )
}

export default Welcome