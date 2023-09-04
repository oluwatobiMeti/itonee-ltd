import { Box, Hide, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {IoIosCheckmark} from "react-icons/io";
function Content() {
  return (
    <HStack>

    <VStack paddingLeft="2rem" alignItems="flex-start">
    <Text textAlign="center" fontSize={["16px", "18px", "22px", "26px"]} fontWeight={["700"]}>What is Academic Analysis</Text>
        <Text fontSize={["12px", "14px", "16px", "18px"]}>academic analysis  involves the systematic study and analysis of qualitative data to generate knowledge and insights in various academic disciplines</Text>
        <VStack>
            <Text fontSize={["12px", "14px", "16px", "18px"]}>How Our academic Analysis Service Help Business</Text>
            <VStack alignItems="flex-start">
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Community engagement and empowerment</Text>
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Advancing academic knowledge</Text>
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Enhancing service provision</Text>
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Humanizing social issues</Text>
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Informed policy-making</Text>
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Managing risk</Text>
            </VStack>
        </VStack>
    </VStack>
    <Hide below='md'>
      <img width="50%" src='https://th.bing.com/th/id/R.5c88edda117b0d463d677323d33ebf70?rik=FEM6E8doDMeDnA&pid=ImgRaw&r=0' alt='business analysis'/>
    </Hide>
    </HStack>
  )
}

export default Content
