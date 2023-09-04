import { HStack } from '@chakra-ui/react'
import React from 'react'

function HeroNav(props) {
  return (
    <HStack height="3rem">
        {props.children}
    </HStack>
  )
}

export default HeroNav
