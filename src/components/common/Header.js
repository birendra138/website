import React from 'react'
import { Link ,NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header>
     <div className="header">
       <div className="container-fluid">
          <div className="row">
             <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                   <div className="center-desk">
                      <div className="logo">
                         <Link to="/"><img src="images/logo.png" alt="#" /></Link>
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div className="header_information">
                   <nav className="navigation navbar navbar-expand-md navbar-dark ">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarsExample04">
                         <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                               <NavLink className="nav-link" to="/about"> About Us  </NavLink>
                            </li> 
                            <li className="nav-item">
                               <NavLink className="nav-link" to="/our-client">Our Clients</NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink className="nav-link" to="/our-work">Our Work</NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                         </ul>
                         <div className="sign_btn"><a href="#">Get A Quote</a></div>
                      </div>
                   </nav>
                </div>
             </div>
          </div>
       </div>
    </div>
 </header> 
  )
}

export default Header