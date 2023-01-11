import React from 'react'
import {Link} from 'react-router-dom';
import "./Welcome.scss";

const Welcome = () => {
  return (
    <div>
      {/* slider-start */}
      {/* <section className="slider">
        <div className="container">
          <div className="columns is-justify-content-center">
            <div className="column is-9-desktop is-10-tablet">
              <div className="block has-text-centered text-white col-3">
                <p>
                  Selamat Datang di SOSMART Website Informatif Desa Karangsoka
                </p>
                <div className="mulai">
                  <Link className="button is-rounded is-primary">Mulai</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
                <h2 className="mt-4 content-title">Informasi aktual dari Pemerintah desa Karangsooka</h2>
              </div>
            </div>
          </div>

          <div className="columns is-multiline is-justify-content-center">
            <div className="column is-4-desktop is-6-tablet">
              <div className="blog-item">
                {/* <img src="images/blog/blog_1.jpg" alt="" className=""> */}

                <div className="card-body mt-2">
                  <span className="text-sm text-color is-uppercase has-text-weight-bold">January 3, 2019</span>
                  <h3 className="mb-3"><a href="blog-single.html" className="">We can make a difference in families lives</a></h3>
                  <p className="mb-4">Aspernatur obcaecati unde, quasi nihil neque, voluptatem. Consectetur.</p>
                </div>
              </div>
            </div>

            <div className="column is-4-desktop is-6-tablet">
              <div className="blog-item">
                {/* <img src="images/blog/blog_2.jpg" alt="" className=""> */}

                <div className="card-body mt-2">
                  <span className="text-sm text-color is-uppercase has-text-weight-bold">January 3, 2019</span>
                  <h3 className="mb-3"><a href="blog-single.html" className="">A place where start new life with peace</a></h3>
                  <p className="mb-4">Aspernatur obcaecati unde, quasi nihil neque, voluptatem. Consectetur.</p>
                </div>
              </div>
            </div>

            <div className="column is-4-desktop is-6-tablet">
              <div className="blog-item">
                {/* <img src="images/blog/blog_3.jpg" alt="" className=""> */}

                <div className="card-body mt-2">
                  <span className="text-sm text-color is-uppercase has-text-weight-bold">January 3, 2019</span>
                  <h3 className="mb-3"><a href="blog-single.html" className="">Build school for poor childrens</a></h3>
                  <p className="mb-4">Aspernatur obcaecati unde, quasi nihil neque, voluptatem. Consectetur.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, totam?</p>
              </div>
        </section>
      </div>
      
      {/* tentang-end */}
    </div>
    
  )
}

export default Welcome