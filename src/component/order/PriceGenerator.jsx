import { HStack, Link, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'

function PriceGenerator(props) {
  const [isautheticated, setIsAutheticated] = useState(false)
  return (
    <div>
      <Text>{props.title}</Text>
      <VStack>
        <Text>{props.title}</Text>
        <HStack>
            <Form>
               <HStack>
                <label>Upload document</label>
                <div>{(isautheticated)? <input type="file" name="document" id="document"/>: <Text>You must <Link href=''>login</Link> to upload a document</Text> }</div>
               </HStack>
            </Form>
        </HStack>
      </VStack>
    </div>
  )
}

export default PriceGenerator
