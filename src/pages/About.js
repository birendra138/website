import React from 'react'
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import Wrapper from "../components/common/Wrapper"

const About = () => {
  return (
    <>
      <Wrapper className="main-layout">
       <Header />
       <div id="about"  className="about">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>About Us</h2>
                     <span></span>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                     <a className="read_more">Read More <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                  </div>
               </div>
               <div className="col-md-5">
                  <div className="about_img">
                     <figure><img src="images/about_img.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <Footer />
     </Wrapper>
    </>
  )
}

export default About