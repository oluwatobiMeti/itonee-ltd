import { VStack, Text } from '@chakra-ui/react'
import React from 'react'

function AnalysisForm(props) {
  return (
    <VStack padding="1rem" alignItems="flex-start" borderRadius="1rem">
        {
            props.children
        }
    </VStack>
  )
}

export default AnalysisForm
