import React from 'react'
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import Wrapper from "../components/common/Wrapper"

const Client = () => {
  return (
    <>
      <Wrapper className="main-layout margin_to90">
       <Header />
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
       <Footer /> 
      </Wrapper>
    </>
  )
}

export default Client