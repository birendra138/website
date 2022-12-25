import React from 'react'

const RequestContact = () => {
  return (
    <>
     <div id="contact" className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Request A call back</h2>
                  </div>
               </div>
               <div className="col-md-6 offset-md-3">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Full Name" type="type" name="Full Name" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email" />                          
                        </div>
                        <div className="col-md-12">
                           <textarea className="contactus" placeholder="Message" type="type" Message="Name">Message </textarea>
                        </div>
                        <div className="col-sm-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default RequestContact