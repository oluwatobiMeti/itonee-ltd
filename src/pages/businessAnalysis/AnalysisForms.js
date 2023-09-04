import { Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import AnalysisForm from './AnalysisForm'

function AnalysisForms() {
  return (
    <VStack>
        <Text fontSize={["16px", "18px", "22px", "26px"]} fontWeight={["700"]}>Kind Of Business Analysis service we offer</Text>
        <Box display="grid" padding="1rem 10%" gap="1.2rem" gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]} gridTemplateRows={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}>
           <AnalysisForm>
            <Text fontSize={["12px", "14px", "16px", "18px"]} fontWeight={["700"]}>Market research</Text>
            <Text fontSize={["10px", "12px", "14px", "16px"]}>we will help gain an understanding of consumer preferences, opinions, and behaviors.</Text>
           </AnalysisForm>
           <AnalysisForm>
           <Text fontSize={["12px", "14px", "16px", "18px"]} fontWeight={["700"]}>
           Customer experience analysis
           </Text>
           <Text fontSize={["10px", "12px", "14px", "16px"]}>
            we help to identify pain points, areas for improvement, and opportunities to enhance the customer experience.
           </Text>
           </AnalysisForm>
           <AnalysisForm>
           <Text fontSize={["12px", "14px", "16px", "18px"]} fontWeight={["700"]}>
           Employee feedback analysis
            </Text>
            <Text fontSize={["12px", "14px", "16px", "18px"]}>
                we help to gain insights into employee attitudes, perceptions, and needs.
            </Text>
            </AnalysisForm>
            <AnalysisForm>
           <Text fontSize={["12px", "14px", "16px", "18px"]} fontWeight={["700"]}>Competitor analysis</Text>
           <Text fontSize={["12px", "14px", "16px", "18px"]}>to gain an understanding of competitor strategies, strengths, and weaknesses.</Text>
           </AnalysisForm>
           <AnalysisForm>
           <Text fontSize={["12px", "14px", "16px", "18px"]} fontWeight={["700"]}>
           Brand analysis
            </Text>
            <Text fontSize={["12px", "14px", "16px", "18px"]}>
              we help to gain insights into brand perceptions and associations.
            </Text>
            </AnalysisForm>
            <AnalysisForm>
           <Text fontSize={["12px", "14px", "16px", "18px"]} fontWeight={["700"]}>Product development analysis</Text>
           <Text fontSize={["12px", "14px", "16px", "18px"]}>
            we help  to gain insights into customer needs and preferences in order to inform product development. 
           </Text>
           </AnalysisForm>
           <AnalysisForm>
           <Text fontSize={["12px", "14px", "16px", "18px"]} fontWeight={["700"]}>Business model analysis</Text>
           <Text fontSize={["12px", "14px", "16px", "18px"]}>we help to gain insights into the strengths and weaknesses of a company's business model</Text>
           </AnalysisForm>
        </Box>
    </VStack>
  )
}

export default AnalysisForms
