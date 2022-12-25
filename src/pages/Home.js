import React from 'react'
import Carousel from "../components/Carousel"
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import RequestContact from "../components/common/RequestContact"
import Wrapper from "../components/common/Wrapper"

const Home = () => {
  return (
    <>
      <Wrapper className="main-layout">
      <Header />
      <Carousel />
      <div id="about"  className="about">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>Web Development</h2>
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
      <div id="mobile"  className="mobile">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-5">
                  <div className="mobile_img">
                     <figure><img src="images/mobile.png" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>Mobile App Development</h2>
                     <span></span>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                     <a className="read_more">Read More <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="clients">
         <div className="container">
            <div className="row">
               <div className="col-md-6 offset-md-3">
                  <div className="titlepage">
                     <h2>What is Say clients</h2>
                     <span></span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="clients_box">
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                  </div>
                  <div className="jonu">
                     <img src="images/cross_img.png" alt="#"/>
                     <h3>Jone due</h3>
                     <strong>(sure there isn't)</strong>
                     <a className="read_more" href="#">Get A Quote</a>
                  </div>
               </div>
            </div>
          </div>
         </div>
       <RequestContact />
       <Footer />
      </Wrapper>
    </>
  )
}

export default Home