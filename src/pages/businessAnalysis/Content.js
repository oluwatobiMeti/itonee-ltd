import { Box, HStack, Hide, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {IoIosCheckmark} from "react-icons/io";

function Content() {
  return (
    <HStack>

    <VStack paddingLeft="2rem" alignItems="flex-start">
    <Text textAlign="center" fontSize={["16px", "18px", "22px", "26px"]} fontWeight={["700"]}>What is Business Analysis</Text>
        <Text fontSize={["12px", "14px", "16px", "18px"]}>Business analysis is a process of examining and understanding a business in order to identify problems, opportunities, and solutions. The goal of business analysis is to improve the performance of a business by making informed decisions based on data and analysis.</Text>
        <VStack>
            <Text fontSize={["12px", "14px", "16px", "18px"]}>How Our Business Analysis Service Help Business</Text>
            <VStack alignItems="flex-start">
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Identifying opportunities</Text>
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Improving efficiency</Text>
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Enhancing customer experience</Text>
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Making informed decisions</Text>
                <Text fontSize={["10px", "12px", "14px", "16px"]} display="flex" alignItems="center"><IoIosCheckmark/> Optimizing resources</Text>
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
