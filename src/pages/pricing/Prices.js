import { Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../analysisTypes/Card'

function Prices() {
  return (
    <div>
     <Text textAlign="center" fontSize={["16px", "18px", "22px", "26px"]} fontWeight={["700"]}>Our Prices</Text> 
     <Text textAlign="center" padding={["1rem 10%"]} fontSize={["12px", "14px", "16px", "18px"]}> Our analysis and report costs are calculated based on your document’s word count and the turnaround time you choose. Enter your document details into the price calculator at the top of the page to get an accurate quote based on your specific order details. </Text>
    </div>
  )
}

export default Prices
