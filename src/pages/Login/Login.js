import { Button, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

function Login() {
  return (
    <div>
      <HStack>
       <Text> sigin in to logo</Text>
       <Button>can</Button>
       <VStack>
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Username'/>
        <input type="checkbox" id="terms" name="terms" value="terms"/>
        <label for="terms">I agree to all terms</label><br></br>
       </VStack>
      </HStack>
    </div>
  )
}

export default Login
