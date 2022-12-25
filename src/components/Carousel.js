import React from 'react'

const Carousel = () => {
  return (
    <>
       <div id="myCarousel" className="carousel slide banner_main" data-ride="carousel">
         <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
         </ol>
         <div className="carousel-inner">
            <div className="carousel-item active">
               <img className="first-slide" src="images/banner.jpg" alt="First slide" />
               <div className="container">
                  <div className="carousel-caption relative">
                     <h1> <span>We Provide</span> Web Services</h1>
                     <a href="#contact">Contact Us</a>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <img className="second-slide" src="images/banner.jpg" alt="Second slide" />
               <div className="container">
                  <div className="carousel-caption relative">
                     <h1> <span>We Provide</span> Web Services</h1>
                     <a href="#contact">Contact Us</a>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <img className="third-slide" src="images/banner.jpg" alt="Third slide" />
               <div className="container">
                  <div className="carousel-caption relative">
                     <h1> <span>We Provide</span> Web Services</h1>
                     <a href="#contact">Contact Us</a>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <img className="third-slide" src="images/banner.jpg" alt="four slide" />
               <div className="container">
                  <div className="carousel-caption relative">
                     <h1> <span>We Provide</span> Web Services</h1>
                     <a href="#contact">Contact Us</a>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <img className="third-slide" src="images/banner.jpg" alt="five slide" />
               <div className="container">
                  <div className="carousel-caption relative">
                     <h1> <span>We Provide</span> Web Services</h1>
                     <a href="#contact">Contact Us</a>
                  </div>
               </div>
            </div>
         </div>
         <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="sr-only">Next</span>
         </a>
      </div>
    </>
  )
}

export default Carousel