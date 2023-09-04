import React from 'react';
import { Text } from '@chakra-ui/react';
function PageHeader(props) {
  return (
    <div className={props.className}>
      <Text textAlign="center" fontWeight={["600"]} fontSize={["20px", "22px", "28px"]} as="h2">{props.Head}</Text>
        <hr/>
      {props.children}
    </div>
  )
}

export default PageHeader;
