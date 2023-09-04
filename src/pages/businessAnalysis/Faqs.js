import { Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Faq from './Faq'
function Faqs() {
  return (
    <VStack width="80%" >
        <Text fontSize={["14px", "16px", "18px", "20px"]}>
        Frequently Asked Questions About Our Business analysis service
        </Text>
        <VStack>
          <Faq question="who will analyze your document?" Answer="Our Analyst are native English speakers with advanced degrees (PhDs and Master’s degrees) and years of professional qualitative analysis experience handling Grounded theory, Case study, Content analysis.Once your document is uploaded, our automated order management system selects the most suitable analyst for your document. Once the documents have been analyzed, our Quality Assurance Team will conduct a final review. You can also communicate directly with your analyst throughout the process. Don’t forget to give your professional editor a review score and add comments about your satisfaction with our service!"/>
          <Faq question="What are your business analysis price?" Answer="Our prices are provided on per-word rates that are based on word count, service level (e.g., Standard, Premium, or Two-Editor), and required delivery time. Enter your word count into our pricing calculator on our Pricing page and receive an instant quote and delivery deadline for your document."/>
          <Faq question="are my document safe and secure" Answer="We guarantee 100% privacy and confidentiality. Your uploaded documents are guaranteed to be secure and will never be presented to or shared with third parties without your express written consent. Our analyst also sign non-disclosure agreements and delete your document from their computer within 14 days of completing revision on your document."/>
        </VStack>
    </VStack>
  )
}

export default Faqs
