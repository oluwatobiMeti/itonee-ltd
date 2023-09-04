import React from 'react'
import Card from './Card'
function Order(props) {
  return (
    <div>
        <Text>Choose an analysis type</Text>
      <Card title="Academic analysis" content="Political science research, Organizational research, Health research, Educational research"/>
      <Card title="Business analysis" content="Business model analysis, Product development analysis, Brand analysis, Competitor analysis, Employee feedback analysis, Customer experience analysis, Market research"/>
      <Card title="User Research" content="A/B testing, Card sorting, Survey analysis, Persona development, Journey mapping, Usability testing, Interview analysis"/>
    </div>
  )
}

export default order
