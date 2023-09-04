import React from 'react'
import Header from '../../component/header/Header'
import Footer from '../about/Footer'
import Hero from "../hero/Hero"
import HeroNav from "../../component/hero/HeroNav"
import { Link } from 'react-router-dom';
import {GrFormNext} from "react-icons/gr";
import Content from './Content'
import { HStack } from '@chakra-ui/react'
import Calculate from '../../component/calculator/Calculate';
import AnalysisForms from './AnalysisForms';
import Faqs from './Faqs'
import Review from "../../component/Reviews/Review"
function BussinessAnalysis() {
  return (
    <div>
      <Header/>
      <Hero title={"Business Analysis Services"} content={"Our professional analyst help businesses, corporate entities, entrepreneurs, and government entities create high-quality research so they can focus on their products and clients."} btn1Content={"order now"} btn2Content={"Get Price Now"}/>
      <HeroNav>
        <Link to="/" className='link'>Home <GrFormNext/></Link>
        <Link to="/Business Analysis Service" className='link'>Business Analysis Services <GrFormNext/></Link>
      </HeroNav>
      <Content/>
      <HStack justifyContent="center" alignItems="center" backgroundColor="blue.700">
       <Calculate/>
      </HStack>
      <AnalysisForms/>
      <HStack justifyContent="center" alignItems="center">
      <Faqs/>
      </HStack>
      <Review/>
      <Footer/>
    </div>
  )
}

export default BussinessAnalysis
