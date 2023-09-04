import { Text } from '@chakra-ui/react'
import React from 'react'

function PageContents(props) {
  return (
    <div>
        <Text as="h2" fontWeight="700">{props.title}</Text>
      {props.children}
    </div>
  )
}

export default PageContents
