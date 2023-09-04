import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Review() {
  return (
    <VStack padding="0 10%">
      <Text textAlign={["center", "center", "center", "start"]} fontSize={["18px", "20px", "24px", "2rem"]}>Clients Love Our Services!</Text>
      <Text fontSize={["14px", "16px", "18px", "20px"]}>Our analysts have a 4.9/5 client review rating from thousands of happy customers. Join the ranks of students, researchers, and professionals who have used our service to achieve success.</Text>
      <VStack>these are the reviews</VStack>
    </VStack>
  )
}

export default Review
