import React from 'react'
import Navbar from '../../components/user/Navbar/Navbar'
import Footer from '../../components/user/Footer/Footer'

const LayoutUser = ({ children }) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="columns mt-4">
              <div className="column has-background-light">
                  <main>{children}</main>
              </div>
          </div>
          <Footer/>
    </React.Fragment>
  )
}

export default LayoutUser