import React, { useContext } from 'react'
import HeroContent from './HeroContent';
import { Box, HStack, Hide } from '@chakra-ui/react';
import Carousel from './HeroImage';


function Hero(props) {
  
  return (
    <HStack backgroundColor="blue.50" flexDir="row">
      <HeroContent title={props.title} content={props.content} btn1Content={props.btn1Content} btn2Content={props.btn2Content}/>
      <Hide below='md'>
      <Carousel/>
      </Hide>
    </HStack>
  )
}

export default Hero
