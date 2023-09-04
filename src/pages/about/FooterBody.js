import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function FooterBody() {
  return (
    <Box color="white" backgroundColor="blue.700" padding={["1rem", "1rem", "1rem 10rem" ]} className='footerBody'>
      <Text textAlign="center">All Content Copyright © 2022</Text>
      <Text textAlign="center" margin="1rem">Join us On: Facebook | Twitter | YouTube | LinkedIn</Text>
    </Box>
  )
}

export default FooterBody
