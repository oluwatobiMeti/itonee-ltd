import React from 'react'
import { Text } from '@chakra-ui/react';
function Card() {
  return (
    <div className='card'>
      <Text as="h2">Quickfire facts</Text>
      <ul className='cardList'>
      <li><Text textAlign="start" fontSize={["10px", "14px", "16px"]} >Winner: Most Trusted Dissertation Coaching Service 2022 (Business Excellence Awards)</Text></li>
      <li><Text textAlign="start" fontSize={["10px", "14px", "16px"]}>Winner: Best Dissertation Coaching Service 2021 (AI International)</Text></li>
      <li><Text textAlign="start" fontSize={["10px", "14px", "16px"]}>Winner: Best Dissertation & Thesis Support Service 2021 (MEA)</Text></li>
      <li><Text textAlign="start" fontSize={["10px", "14px", "16px"]}>Winner: Best Dissertation & Thesis Coaching Specialists 2020 (MEA)</Text></li>
      <li><Text textAlign="start" fontSize={["10px", "14px", "16px"]}>Winner: Feedspot Top 50 Student Blog</Text></li>
      <li><Text textAlign="start" fontSize={["10px", "14px", "16px"]}>Accredited Member of The Tutor’s Association UK</Text></li>
      <li><Text textAlign="start" fontSize={["10px", "14px", "16px"]}>100+ years combined academic experience within the team</Text></li>
      <li><Text textAlign="start" fontSize={["10px", "14px", "16px"]}>1,500+ Students supported on a 1-on-1 basis (private coaching)</Text></li>
      <li><Text textAlign="start" fontSize={["10px", "14px", "16px"]}>5.5 million+ students supported via online content</Text></li>
      </ul>
    </div>
  )
}

export default Card;
