import { HStack, Link } from '@chakra-ui/react'
import React from 'react'

function FooterNav() {
  return (
    <HStack color="white" backgroundColor="blue.700" borderBottom="1px solid white" justifyContent="center" alignItems="center" flexWrap={"wrap"} className='footerNav' >
      <Link fontSize={["16px", "20px", "20px"]}>Home</Link>
      <Link fontSize={["16px", "20px", "20px"]} >About</Link>
      <Link fontSize={["16px", "20px", "20px"]} >pricing</Link>
      <Link fontSize={["16px", "20px", "20px"]} >Analysis and Report</Link>
    </HStack>
  )
}

export default FooterNav
