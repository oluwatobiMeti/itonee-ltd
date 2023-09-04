import { VStack, Text } from '@chakra-ui/react'
import React from 'react'

function Content(props) {
  return (
    <VStack>
      <img src={props.src} alt="" srcset="" />
      <Text textAlign="center" fontSize={["20px"]}>{props.Title}</Text>
      <Text textAlign="center" fontSize={["12px"]}>{props.Content}</Text>
    </VStack>
  )
}

export default Content
