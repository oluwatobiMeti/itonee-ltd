import { VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import MobileHeaderLink from './MobileHeaderLink';

function MobileHeader() {
  return (
   <VStack justifyContent="space-between" alignItems="flex-start" width="100vw" position="relative" top="0" left="0" >
    <MobileHeaderLink className="dropdown1"/>
   </VStack>
  )
}

export default MobileHeader
