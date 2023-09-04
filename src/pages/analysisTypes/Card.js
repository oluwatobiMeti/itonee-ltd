import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <VStack backgroundColor="white" padding="2rem" borderRadius="1rem">
        <Text fontSize={["20px", "16px"]} fontWeight={["700"]}>
        
        {props.title}
        </Text>
        <Text fontSize={["16px", "12px", "16px"]}>
            {props.content}
        </Text>
        <Button fontSize={["16px", "12px", "16px"]}><Link>{props.title }</Link></Button>
    </VStack>
  )
}

export default Card
