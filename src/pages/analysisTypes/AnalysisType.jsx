import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

function AnalysisType() {
  return (
    <Box backgroundColor="blue.50" color="blue.700">
      <Text textAlign="center" fontSize={["20px", "22px", "26px", "2rem"]} fontWeight="700">
        Qualitative Analysis and Reporting Service
      </Text>
      <Text textAlign="center" fontSize={["14px","15px","16px","20px"]}>Our expert are proficient in qualitative analysis methods that exist, such as grounded theory, case study, ethnography, and content analysis. the tools and software used in qualitative analysis, such as NVivo, Atlas.ti, and MAXQDA.</Text>
      <Box padding="2rem 7%" display={["grid"]} gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]} gridTemplateRows={["1fr", "1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]} gap="2rem">
        <Card title="Grounded theory" content="This is a method for developing theories based on qualitative data. The goal is to create a theory that is grounded in the data, rather than relying on pre-existing theories."/>
        <Card title="Case study" content="This involves in-depth analysis of a single case or a small number of cases. The goal is to gain a deep understanding of a particular phenomenon or situation."/>
        <Card title="Ethnography" content="This is a method of studying a group or culture by immersing oneself in their daily life and observing and interacting with them. The goal is to gain an understanding of the group's beliefs, values, and behaviors."/>
        <Card title="Phenomenology" content="This is a method of studying people's experiences of a particular phenomenon. The goal is to understand the meaning that people attach to their experiences"/>
        <Card title="Content analysis" content="This involves analyzing written or visual content to identify patterns and themes. The goal is to gain a deeper understanding of the messages being conveyed in the content."/>
        <Card title="Narrative analysis" content="This involves analyzing stories and narratives to identify themes and patterns. The goal is to understand how people construct and share their personal stories."/>
      </Box>
    </Box>
  )
}

export default AnalysisType
