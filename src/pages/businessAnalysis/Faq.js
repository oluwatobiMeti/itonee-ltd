import { Button, VStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import {IoIosArrowDown} from "react-icons/io"
import {MdKeyboardArrowUp} from "react-icons/md"

function Faq({question, Answer}) {
    const [isActive, SetIsActive] = useState(false)
  return (
    <VStack width="80vw" onMouseOver={() => SetIsActive(true)}  onMouseOut={() => SetIsActive(false)}>
        <Button fontSize={["12px", "14px", "16px", "18px"]} backgroundColor="blue.700" color="white" display="flex" justifyContent="space-between" width="100%"><span>{question}</span>{(isActive === true)? <MdKeyboardArrowUp/>:<IoIosArrowDown/>}</Button>
        {isActive && <Text fontSize={["12px", "14px", "16px", "18px"]}>{Answer}</Text>}
    </VStack>
  )
}
export default Faq;
