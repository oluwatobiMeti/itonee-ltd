import { Box, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import InputWithLabel from './InputWithLabel'
import InputWithLabelO from './InputWithLabelO'

function Calculate() {
  return (
    <VStack margin="2rem 0" height="300px" borderRadius="1rem" width="95vw" backgroundColor="gray.100" color="black" padding="2rem">
      <Text textAlign={["center", "start", "start", "start"]} fontSize={["16px", "18px", "22px", "26px"]} marginBottom="2rem">Calculate Your Price</Text>
      <Box display="flex" flexDirection={["column", "column", "row", "row"]} width="100%" alignItems="baseline" justifyContent="space-between">
       <InputWithLabel/>
       <InputWithLabelO/>
      </Box>
    </VStack>
  )
}

export default Calculate;
