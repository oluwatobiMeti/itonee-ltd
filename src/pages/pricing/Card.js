import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Card(props) {
  return (
    <VStack borderRadius="4px" boxShadow="2px 2px 4px blue">
      <Text fontSize={["12px", "14px", "16px", "18px"]}>{props.type}</Text>
      <Text fontSize={["12px", "14px", "16px", "18px"]}>{props.todo}</Text>
      <Text fontSize={["12px", "14px", "16px", "18px"]}>${props.price} per word</Text>
    </VStack>
  )
}

export default Card
