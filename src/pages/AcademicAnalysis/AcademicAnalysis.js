import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../component/header/Header';
import Footer from '../about/Footer';
import Hero from '../hero/Hero';
import HeroNav from '../../component/hero/HeroNav';
import {GrFormNext} from "react-icons/gr";
import Content from './Content';
import Calculate from '../../component/calculator/Calculate';
import { HStack } from '@chakra-ui/react';
import AnalysisForms from './AnalysisForms';
import Review from '../../component/Reviews/Review';
import Faqs from './Faqs';
function AcademicAnalysis() {
  return (
    <div>
        <Header/>
        <Hero title={"academic Analysis Services"} content="Our analyst will help you analyze your work so you can focus on your academic writing and submit your research with confidence." btn1Content={"order now"} btn2Content={"Get Price Now"}/>
        <HeroNav>
        <Link to="/" className='link'>Home <GrFormNext/></Link>
        <Link to="/Academic Analysis Service" className='link'>Academic Analysis Services <GrFormNext/></Link>
      </HeroNav>
      <Content/>
      <HStack backgroundColor="blue.700">
      <Calculate/>
      </HStack>
      <AnalysisForms/>
      <Faqs/>
      <Review/>
        <Footer/>
      
    </div>
  )
}

export default AcademicAnalysis
