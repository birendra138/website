import React from 'react'
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import Wrapper from "../components/common/Wrapper"
import { OUR_WORK } from "../constants/constants"

const OurWork = () => {
  return (
    <>
      <Wrapper className="main-layout">
      <Header />
       <div className="ourwork">
          <div className="container">
             <div className="row">
                <div className="col-md-12">
                   <div className="titlepage">
                      <h2>Our Work</h2>
                   </div>
                </div>
             </div>
             <div className="row">
               {OUR_WORK.map((work,index)=>(
                <div className="col-md-4" key={index}>
                  <div className="our_box">
                    <figure><img src={work} alt="#"/></figure>
                  </div>
                </div>
               ))}
             </div>
          </div>
       </div>
      <Footer />
     </Wrapper>
    </>
  )
}

export default OurWork