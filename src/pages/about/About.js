import React, { useState } from 'react'
import Header from '../../component/header/Header';
import { Text, Button, Image, Link } from '@chakra-ui/react';
import PageHeader from './PageHeader';
import Card from "./Card"
import PageContents from './PageContents';
import Footer from './Footer';
import Team from "./Team"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function About() {
  const Head="Meet Grad Coach";
  const [display, setDisplay] = useState(false)
  return (
    <div className='About'>
      <Header></Header>
      <main className='aboutMain'>
      <PageHeader Head={Head}>
        <Text fontSize={["10px", "14px", "16px"]}>We’re passionate about helping people who want to learn.</Text>
        <Text fontSize={["10px", "14px", "16px"]}>We believe that by building the people that build tomorrow’s organisations and institutions, we’re doing our bit to help make the world a better place. Simple.</Text>
      </PageHeader>
      <Card/>
      <PageContents title=" What we do">
         <Text fontSize={["10px", "14px", "16px"]}>We do everything we ethically can to help you achieve your academic goals. We take the time to understand your unique situation, objectives and challenges, and provide you with clear, actionable guidance and feedback, every step of the way.</Text>
         <Text fontSize={["10px", "14px", "16px"]}>Where allowed by universities, we also provide time-saving services such as transcription, statistical testing, editing and proofreading. These services enable you to optimise your approach by reducing time spent on low-value, non-core tasks. To view our full-service offering, <Link>please click here.</Link></Text>
         <Image src="https://gradcoach.com/wp-content/uploads/awards-1.png"></Image>
      </PageContents>
      <PageContents title="what we don’t do">
        <Text fontSize={["10px", "14px", "16px"]}>We don’t offer unethical shortcuts. For example, assignment, dissertation or thesis <Link>outsourcing/writing</Link>, ghostwriting, confidential exam papers, etc.</Text>
        <Text fontSize={["10px", "14px", "16px"]}>We operate in line with the respective universities’ codes of conduct, as well as the <Link>Tutors’ Association UK’s</Link> code of ethics. Simply put, we’re here to help you grow. This requires hard work on your part and ours – but it is unquestionably worth it.</Text>
      </PageContents>
      <PageContents title="Who we work with">
        <Text fontSize={["10px", "14px", "16px"]}>We work with undergrad, Master and doctoral-level students across the globe, including the US, UK, Europe, Middle East, Asia and Australia. Many of our clients are adult learners, balancing the demands of a career, family and a demanding academic program.</Text>
        <Image src="https://gradcoach.com/wp-content/uploads/gc-client-map-2021.png"></Image>
        <Text fontSize={["10px", "14px", "16px"]}>While we can assist with research projects across a wide range of specialisms, we most commonly work within the social sciences. This includes students studying:</Text>
        <ul style={{textAlign: "start"}}>
          <li> <Text fontSize={["10px", "14px", "16px"]}>Business, management and economics</Text></li>
          <li> <Text fontSize={["10px", "14px", "16px"]}>Political science and public administration</Text></li>
          <li> <Text fontSize={["10px", "14px", "16px"]}>Communication studies</Text></li>
          <li> <Text fontSize={["10px", "14px", "16px"]}>Education and learning</Text></li>
          <li> <Text fontSize={["10px", "14px", "16px"]}>Anthropology, psychology & sociology</Text></li>
          <li> <Text fontSize={["10px", "14px", "16px"]}>Linguistics</Text></li>
          <li> <Text fontSize={["10px", "14px", "16px"]}>Nursing & health science</Text></li>
          <li> <Text fontSize={["10px", "14px", "16px"]}>Gender studies</Text></li>
        </ul>
        <Text fontSize={["10px", "14px", "16px"]}>If your programme doesn’t fall into one of the categories above, you’re still welcome to contact us and we’ll let you know if we can help. Quite often we are able to assist.</Text>
      </PageContents>
      <PageContents title="What our clients say">
        <Text fontSize={["10px", "14px", "16px"]}>We do absolutely everything we can to keep our clients happy, and it shows in our reviews, our 4.9/5 Trustpilot rating and 4.8/5 Facebook rating. We’ve also won multiple awards for the best dissertation and thesis support service provider (see above).</Text>
      </PageContents>
      <PageContents title="How to work with us">
        <Text fontSize={["10px", "14px", "16px"]}>If you’d like to work with us, you can email us on hello@gradcoach.com or book an introductory consultation using the button below.</Text>
      </PageContents>
      <Button onMouseEnter={() => {
        setDisplay(true);
      }
      } onMouseLeave={() =>  {
        setDisplay(false);
      }}
      backgroundColor={"#f16924"} color="white" maxHeight="50px" border={"2px solid white"} fontSize="1rem" padding={"1rem"}>CHAT WITH A FRIENDLY COACH (ONLINE)
            {display && 
            <ArrowForwardIosIcon/>
          }
        </Button>
      <Team></Team>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default About
