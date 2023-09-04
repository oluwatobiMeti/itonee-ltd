import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
function HeroContent(props) {
  return (
    <Box width={["100%", "100%", "100%", "50%"]} paddingBottom="2rem" className=''>
      <Text textAlign={["center", "center", "start", "start"]} padding={["1rem 0 2rem 0"]} fontSize={["20px", "18px", "22px", "24px"]}>{props.title}</Text>
      <Text textAlign={["center", "center", "start", "start"]} fontSize={["14px", "16px", "18px", "20px"]}>{props.content}</Text>
      <HStack alignItems={["center", "center", "start", "start"]} justifyContent={["center"]}  marginTop="2rem">
        <Button  fontSize={["14px", "16px", "18px", "20px"]} backgroundColor="blue.600" color="white">{props.btn1Content}</Button>
        <Button fontSize={["14px", "16px", "18px", "20px"]}>{ props.btn2Content }</Button>
      </HStack>
    </Box>
  ) 
}

export default HeroContent
