import { Button, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

function Card(props) {
  return (
    <VStack>
        <Text>
            {props.title}
        </Text>
        <HStack>
        <Text>{props.content}</Text>
        <Button>Order Now</Button>
        </HStack>
    </VStack>
  )
}

export default Card
