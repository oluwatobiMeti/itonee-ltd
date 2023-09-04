import React from 'react'
import Header from '../component/header/Header';
import Hero from '../component/hero/Hero';
import HeroNav from '../component/hero/HeroNav';
import Calculate from '../component/calculator/Calculate';
import AnalysisType from './analysisTypes/AnalysisType';
//import Pricing from './pricing/Pricing';
import { Link } from 'react-router-dom';
import {GrFormNext} from "react-icons/gr";
import Footer from './about/Footer';
import Card from '../component/Sample/Card';
import { HStack } from '@chakra-ui/react';
import Faqs from "./Faqs"
import Review from '../component/Reviews/Review';
import { Show, Box } from '@chakra-ui/react';
function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <HeroNav><Link to="/" className='link'>Home <GrFormNext/></Link></HeroNav>
      <HStack backgroundColor="blue.700" width="100%" alignItems="center" justifyContent="center">
      <Calculate/>
      </HStack>
      <AnalysisType/>
      <Box padding="0 10%" display={["grid", "grid", "grid", "grid"]} gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]} gridTemplateRows={["1fr", "1fr 1fr", "1fr 1fr", "1fr"]} >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Box>
      <HStack alignItems="center" justifyContent="center">
      <Faqs/>
      </HStack>
      <Review/>
      <Footer/>

    </div>
  )
}

export default Home;
