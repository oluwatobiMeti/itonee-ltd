import React from 'react'
import Footer from '../about/Footer'
import Header from '../../component/header/Header'
import Hero from '../hero/Hero'
import HeroNav from '../../component/hero/HeroNav'
import { Link } from 'react-router-dom'
import {GrFormNext} from "react-icons/gr";

function ReportAnalysis() {
  return (
    <div>
      <Header/>
      <Hero title="Report analyzed Data" content="we will help to present the findings in a clear, organized, and concise manner. " btn1Content={"order now"} btn2Content={"Get Price Now"}/>
      <HeroNav>
      <Link to="/" className='link'>Home <GrFormNext/></Link>
        <Link to="/Report your Analysis" className='link'>Report analyzed Data <GrFormNext/></Link>
      </HeroNav>
      
      <Footer/>
    </div>
  )
}

export default ReportAnalysis
