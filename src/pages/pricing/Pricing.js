import { Text, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import Calculate from '../../component/calculator/Calculate'
import Prices from './Prices'
import Card from './Card'
import Header from '../../component/header/Header';
import Footer from '../about/Footer'
import Faqs from './Faqs';
import Review from '../../component/Reviews/Review';
function Pricing() {
  return (
    <div>
      <Header/>
      <Text fontWeight="700" fontSize={["16px", "18px", "22px", "26px"]} textAlign="center">
        Analysis and Report Prices
      </Text>
      <Text textAlign="center" fontSize={["14px", "16px", "20px", "22px"]} padding={["2rem 10%"]}>
      Instantly calculate the Analysis and Report service cost for your Business, academic or User Research analysis.  analysis and report prices are based on analysis service type, word count, turnaround time, and selection of additional services.
      </Text>
      <Calculate/>
      <Prices/>
      <Box margin="2rem 2rem" display="grid" gridTemplateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]} gridTemplateRows= {["1fr 1fr 1fr 1fr"]} gap="2rem">
      <Card type="Business" todo="Analysis and report" price="50"/>
      <Card type="Business premium" todo="Analysis and report" price="65"/>
      <Card type="Business premium" todo="Analysis" price="40"/>
      <Card type="Business premium" todo="Report" price="65"/>
      <Card type="Business" todo="Analysis" price="40"/>
      <Card type="Business" todo="Report" price="65"/>
      <Card type="Academic" todo="Analysis and report" price="50"/>
      <Card type="Academic premium" todo="Analysis and report" price="65"/>
      <Card type="Academic premium" todo="Analysis" price="40"/>
      <Card type="Academic premium" todo="Report" price="65"/>
      <Card type="Academic" todo="Analysis" price="40"/>
      <Card type="Academic" todo="Report" price="65"/>
      </Box>
      <HStack justifyContent="center" alignItems="center">
      <Faqs/>
      </HStack>
      <Review/>
      <Footer/>
    </div>
  )
}

export default Pricing
