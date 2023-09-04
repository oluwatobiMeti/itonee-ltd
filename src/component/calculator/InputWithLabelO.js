import { Button, HStack, VStack, Text } from '@chakra-ui/react'
import { Label } from '@mui/icons-material'
import { useState } from 'react'
import { CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

function InputWithLabelO() {
  const [display1, setDisplay1] = useState(false)
  return (
    <VStack position="relative" alignItems={["center", "center", "flex-start", "flex-start"]} width={["100%", "100%", "50%", "50%"]}>
      <VStack justifyContent="space-between">
        <Text fontSize={["12px", "20px", "16px", "18px"]}>Enter your document’s word count.</Text>
        <input type="number" name="word cout" placeholder='Enter the word count' id="" />
      </VStack>
      <div>
      <Text fontSize={["12px", "20px", "16px", "18px"]} onClick={() => {
        setDisplay1(true);
      }}>How can I find the word count?</Text>
      {/* <ChevronDownIcon/> */}
      {display1 &&
      
      <VStack backgroundColor="white" color="black" position="absolute">
        <Button onClick={() => {
        setDisplay1(false);
      }
     } position="absolute" _hover={{backgroundColor:"transparent"}} backgroundColor="transparent" bottom="3rem" left="90%"> 
     {/* <CloseIcon/>  */}
     +
     </Button>
        <Text fontSize="10px">To calculate the total word count in an MS Word document, select [Word Count] in the [Review] menu.</Text>
        <Text fontSize="10px">To calculate the word count of a specific selection of the document, highlight the text and then click [Word Count].</Text>
      </VStack>
}
      </div>
    </VStack>
  )
}
export default InputWithLabelO;
