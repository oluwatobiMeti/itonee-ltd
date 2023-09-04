import { Button, Image, VStack, Box, Text } from '@chakra-ui/react'
import React from 'react'

function Card() {
  return (
    <Box position="relative" width={["80vw", "200px", "200px", "200px"]} height={["350px"]}>
        <Image src='' alt='sample report' width={["150px"]} height={["350px"]}/>
        <VStack alignItems="center" justifyContent="center" position="absolute" bottom="0" left="0" width={["200px"]} height={["450px"]}>
            <Text>content</Text>
            <Button>View more</Button>
        </VStack>
    </Box>
    )
}

export default Card
