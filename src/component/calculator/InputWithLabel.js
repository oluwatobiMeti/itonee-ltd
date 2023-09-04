import { VStack, Text } from '@chakra-ui/react'
import React from 'react'

function InputWithLabel() {
  return (
    <VStack alignItems={["center", "center", "flex-start", "flex-start"]} width={["100%", "100%", "50%", "50%"]}>
      <Text fontSize={["12px", "20px", "16px", "18px"]}>Choose your analysis type.</Text >
      <select name="type">
        <option value="Academic analysis">Academic analysis</option>
        <option value="Business analysis">Business analysis</option>
        <option value="User Research">User Research</option>
     </select>
    </VStack>
  )
}

export default InputWithLabel
