import React from 'react'
import CopyRight from "./CopyRight"

const Footer = () => {
  return (
    <>
    <footer>
         <div className="footer">
            <div className="container">
               <div className="row border-top">
                  <div className="col-md-6 padding_bottom1   ">
                     <h3>Subscribe Now</h3>
                     <form className="footer_form">
                        <input className="enter" placeholder="Enter your email" type="type" name="Enter your email" />
                        <button className="submit">submit</button>
                     </form>
                  </div>
                  <div className="col-md-6">
                     <div className="row">
                        <div className="col-md-5 offset-md-1 padding_bottom1">
                           <h3>Links</h3>
                           <ul className="cont">
                              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </li>
                           </ul>
                        </div>
                        <div className="col-md-5 offset-md-1">
                           <h3>Contact us</h3>
                           <ul className="cont">
                              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <CopyRight />
         </div>
      </footer>
    </>
  )
}

export default Footer