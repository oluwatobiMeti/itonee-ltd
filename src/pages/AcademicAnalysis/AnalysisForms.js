import React from 'react'
import AnalysisForm from '../businessAnalysis/AnalysisForm'
import { Text, VStack, Box } from '@chakra-ui/react'
function AnalysisForms() {
  return (
    <VStack>
        <Text fontSize={["20px", "22px", "24px","2rem"]} fontWeight={["700"]}>Kind Of Academic Analysis service we offer</Text>
        <Box display="grid" padding="1rem 10%" gap="1.2rem" gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]} gridTemplateRows={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]}>
        <AnalysisForm>
            <Text fontSize={["16px", "18px", "20px", "22px"]} fontWeight={["700"]}>Thematic Analysis</Text>
            <Text fontSize={["12px", "14px", "16px", "18px"]}>This involves identifying and analyzing patterns or themes within qualitative data. Researchers systematically categorize data into themes and explore the connections and meanings that emerge from the data.</Text>
        </AnalysisForm>
        <AnalysisForm>
            <Text fontSize={["16px", "18px", "20px", "22px"]} fontWeight={["700"]}>Grounded Theory</Text>
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Grounded theory is an inductive approach where theories and concepts are developed based on the data itself. Researchers immerse themselves in the data, continuously analyzing and comparing it to generate theoretical insights.</Text>
        </AnalysisForm>
        <AnalysisForm>
            <Text fontSize={["16px", "18px", "20px", "22px"]} fontWeight={["700"]}>Phenomenological Analysis</Text>
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Phenomenological analysis aims to understand the lived experiences of individuals. Researchers delve into the essence of participants' experiences, seeking to capture the meanings and structures that underlie their perceptions and actions.</Text>
        </AnalysisForm>
        <AnalysisForm>
            <Text fontSize={["16px", "18px", "20px", "22px"]} fontWeight={["700"]}>Discourse Analysis</Text>
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Discourse analysis examines language and communication to understand how social realities and power relations are constructed and maintained. Researchers analyze conversations, texts, or media to uncover the underlying discourses and ideologies.</Text>
        </AnalysisForm>
        <AnalysisForm>
            <Text fontSize={["16px", "18px", "20px", "22px"]} fontWeight={["700"]}>Narrative Analysis</Text>
            <Text fontSize={["12px", "14px", "16px", "18px"]}> Narrative analysis focuses on the stories and narratives shared by individuals. Researchers examine the structure, content, and meaning of narratives to gain insights into personal experiences, identity formation, or cultural representation.</Text>
        </AnalysisForm>
        <AnalysisForm>
            <Text fontSize={["16px", "18px", "20px", "22px"]} fontWeight={["700"]}>Ethnographic Analysis</Text>
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Ethnographic analysis involves in-depth immersion in a particular social group or culture. Researchers observe and engage with participants in their natural settings to understand their behaviors, practices, and cultural norms.</Text>
        </AnalysisForm>
        <AnalysisForm>
        <Text fontSize={["16px", "18px", "20px", "22px"]} fontWeight={["700"]}>Content Analysis</Text>
        <Text fontSize={["12px", "14px", "16px", "18px"]}>Content analysis is used to analyze textual or visual data. Researchers identify and analyze patterns, themes, or messages within the content to gain insights into social, cultural, or historical phenomena.</Text>
        </AnalysisForm>
        <AnalysisForm>
        <Text fontSize={["16px", "18px", "20px", "22px"]} fontWeight={["700"]}>Case Study Analysis</Text>
        <Text fontSize={["12px", "14px", "16px", "18px"]}>Case study analysis involves the in-depth examination of a specific case or a small number of cases. Researchers explore the unique characteristics, contexts, and dynamics of the case(s) to gain rich insights and make detailed interpretations.</Text>
        </AnalysisForm>
        </Box>
   </VStack>
  )
}

export default AnalysisForms
