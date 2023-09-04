import { VStack, Text } from '@chakra-ui/react'
import React from 'react'
import Faq from '../businessAnalysis/Faq'

function Faqs() {
  return (
    <VStack>
        <Text textAlign={["center", "center", "start", "start"]} fontSize={["16px", "18px", "22px", "28px"]}>
          Frequently Asked Questions About Our Academic analysis
        </Text>
        <VStack>
            <Faq question="what kind of document do you analyze" Answer="we specializes in analyzing all kind of document. we analyst that specializes in analysis the following: Research Paper - Journal Manuscripts- PhD dissertations - Theses- College & University Assignments "/>
            <Faq question="who will analyze your document?" Answer="Our Analyst are native English speakers with advanced degrees (PhDs and Master’s degrees) and years of professional qualitative analysis experience handling Grounded theory, Case study, Content analysis.Once your document is uploaded, our automated order management system selects the most suitable analyst for your document. Once the documents have been analyzed, our Quality Assurance Team will conduct a final review. You can also communicate directly with your analyst throughout the process. Don’t forget to give your professional editor a review score and add comments about your satisfaction with our service!"/>
            <Faq question="how long does it take to analyze my document"  Answer="it depend on word count of your project, the kind of analysis you want to analyze"/>
            <Faq question="do you accept revision of document" Answer="we will help you analyze your work on till is perfect"/>
        </VStack>

    </VStack>
  )
}

export default Faqs;
