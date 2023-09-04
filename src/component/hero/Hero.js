import React, { useContext } from 'react'
import HeroContent from './HeroContent';
import { Box, HStack, Hide } from '@chakra-ui/react';
import Carousel from './HeroImage';


function Hero() {
  
  return (
    <Box backgroundColor="blue.100" display="flex" flexDirection={["row"]} >
      <HeroContent/>
      <Hide below='md'>
      <Carousel/>
      </Hide>
    </Box>
  )
}

export default Hero
