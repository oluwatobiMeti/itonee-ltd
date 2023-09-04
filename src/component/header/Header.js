import { Button, HStack, Show, Hide } from '@chakra-ui/react'
import React from 'react'
import HeaderLink from './HeaderLink';
import TopNav from './TopNav';
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from 'react';
import MobileHeader from "./MobileHeader"


function Header() {
  const [isclicked, setIsclicked] = useState(false)
  return (
  <>
   <TopNav/>
   <HStack backgroundColor="white" color="blue.700" className='header' position="static" width="100%" top="0" left="0">
    <span>logo</span>
    <Show above='md'>
    <HeaderLink dir="row" className="dropdown"/>
    <Button>Order Now</Button>
    </Show>
      <Show below='md'>
        <GiHamburgerMenu onClick={() => setIsclicked(!isclicked)} color='#2c5282' fontSize="1.5rem"/>
      </Show>
   </HStack>
   {(isclicked)?
   <MobileHeader/>:""
   }
   </>
  )
}

export default Header;
