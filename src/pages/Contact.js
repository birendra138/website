import React from 'react'
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import RequestContact from "../components/common/RequestContact"
import Wrapper from "../components/common/Wrapper"

const Contact = () => {
  return (
    <>
     <Wrapper className="main-layout">
        <Header />
        <RequestContact />
        <Footer />
     </Wrapper>
    </>
  )
}

export default Contact