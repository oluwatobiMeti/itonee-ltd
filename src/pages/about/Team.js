import { Text, VStack, SimpleGrid, Image, Box } from '@chakra-ui/react'
import React from 'react'

function Team(props) {
  return (
    <div className='Team'>
        <VStack>
          <Text fontSize={["20px", "24px", "30px"]} as="h1">Meet the team</Text>
          <Text fontSize={["10px", "14px", "16px"]}>Grad Coach consists of a passionate team of educators and academics. We’re not rocket scientists or high-strung know-it-alls – we’re normal, down-to-earth people who happen to understand academic research and want to help you achieve your goals.</Text>
       </VStack>
        <SimpleGrid margin="2rem" column={4} minChildWidth="150px" gap="4rem">
            <Box position="relative">
            <Text position="absolute" backgroundColor="#f16924" width="100%" textAlign="center" top="100%">{props.name} CSFABFJKAJBKJBK</Text>
            <Image w='200px' _after={{bg: "#f16924", height:"2rem"}} src='https://bit.ly/dan-abramov'/>
             </Box>
            <Box position="relative">
            <Text position="absolute" backgroundColor="#f16924" width="100%" textAlign="center" top="100%">{props.name} CSFABFJKAJBKJBK</Text>
            <Image w='200px' _after={{bg: "#f16924", height:"2rem"}} src='https://bit.ly/dan-abramov'/>
             </Box>
            <Box position="relative">
            <Text position="absolute" backgroundColor="#f16924" width="100%" textAlign="center" top="100%">{props.name} CSFABFJKAJBKJBK</Text>
            <Image w='200px' _after={{bg: "#f16924", height:"2rem"}} src='https://bit.ly/dan-abramov'/>
             </Box>
            <Box position="relative">
            <Text position="absolute" backgroundColor="#f16924" width="100%" textAlign="center" top="100%">{props.name} CSFABFJKAJBKJBK</Text>
            <Image w='200px' _after={{bg: "#f16924", height:"2rem"}} src='https://bit.ly/dan-abramov' />
             </Box>
            <Box position="relative">
            <Text position="absolute" backgroundColor="#f16924" width="100%" textAlign="center" top="100%">{props.name} CSFABFJKAJBKJBK</Text>
            <Image w='200px' _after={{bg: "#f16924", height:"2rem"}} src='https://bit.ly/dan-abramov'/>
             </Box>
            <Box position="relative">
            <Text position="absolute" backgroundColor="#f16924" width="100%" textAlign="center" top="100%">{props.name} CSFABFJKAJBKJBK</Text>
            <Image w='200px' _after={{bg: "#f16924", height:"2rem"}} src='https://bit.ly/dan-abramov'/>
            </Box>
        </SimpleGrid>
    </div>
  )
}

export default Team
