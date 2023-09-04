import { HStack, Link } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

function TopNav() {
  return (
    <HStack height="2rem" color="white" justifyContent="space-between" alignItems="center" backgroundColor="blue.700">
      <Link display="flex" justifyContent="space-between" alignItems="center" href="mailto:meti@example.com">Email <AiOutlineMail/></Link>
      <HStack justifyContent="space-between" alignItems="center">
          <Link>Contact Us</Link>
          <Link>About us</Link>
          <Link>Sigin In</Link>
      </HStack>
    </HStack>
  )
}

export default TopNav
