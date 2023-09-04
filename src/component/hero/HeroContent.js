import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
function HeroContent() {
  return (
    <Box paddingBottom={["0", "2rem"]} width={["100%", "100%", "100%", "50%"]} className=''>
      <Text margin={["0", "1rem 0 2rem 0"]} textAlign={["center", "start", "start", "start"]} fontSize={["20px", "22px", "24px", "26px"]}>{"Qualitative Analysis Service"}</Text>
      <Text textAlign={["center", "start", "start", "start"]} fontSize={["14px", "16px", "18px", "20px"]}>{"Our expert qualitative analyst, analyze and report your academic work with the highest quality standards. Get professional for your business and academic work at affordable price"}</Text>
      <HStack alignItems="center" justifyContent={["start"]} marginTop="2rem">
        <Button fontSize={["14px", "16px", "18px", "20px"]} backgroundColor="blue.600" color="white">{"Analyze your document"}</Button>
        <Button fontSize={["14px", "16px", "18px", "20px"]}>{"Get Price now"}</Button>
      </HStack>
    </Box>
  ) 
}

export default HeroContent
