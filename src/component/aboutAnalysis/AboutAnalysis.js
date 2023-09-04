import { VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import Content from './Content'

function AboutAnalysis() {
  return (
    <VStack>
     <Text textAlign={"center"}>How we analysis</Text>
      <HStack>
      <Content src={"https://pstatic.wordvice.com/wv-us/image/service_section6_1.png"} Title="Get an Instant Price Quote" Content="Select the document type, enter your paper's word count, and choose a turnaround time to get an instant quote."/>
      <Content src={"https://pstatic.wordvice.com/wv-us/image/service_section6_1.png"} Title="Get an Instant Price Quote" Content="Select the document type, enter your paper's word count, and choose a turnaround time to get an instant quote."/>
      <Content src={"https://pstatic.wordvice.com/wv-us/image/service_section6_1.png"} Title="Get an Instant Price Quote" Content="Select the document type, enter your paper's word count, and choose a turnaround time to get an instant quote."/>
      </HStack>
    </VStack>
  )
}

export default AboutAnalysis
