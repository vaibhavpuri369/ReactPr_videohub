import {Box, Container, Heading, Stack} from "@chakra-ui/react";
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Image } from "@chakra-ui/react";
import img1 from '../assets/8.png';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img6 from '../assets/5.png';
import { Text } from "@chakra-ui/react";
const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTranform:"uppercase",
    p:'4',
    size:'4xl'
}

const Home = () => {
  return <Box> 
   <MyCarousel/>

   <Container maxW={'container.x1'} minH={'100vh'} p = "16">
   <Heading textTranform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">Services</Heading>
   <Stack h="full"
   p={"4"}
   alignItems={'center'}
   direction={['column','rom']}>
    <Image src={img6} h={['40','400']} filter={"hue-rotate(-130deg"}/>
    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
    

Game companies have created memorable franchises in recent years that have delighted players and enriched our culture. Whatever adventures players experience, developers and publishers depend on gaming services platforms to ensure engagement and profitability. This article defines gaming service platforms and explains why they’re an important contributor to an engaging player experience.
What is a gaming services platform?

A gaming services platform allows publishers to offer a curated library of games directly to players.


Gaming services platforms vs. game servers

For players, gaming services platforms perform functions different from game servers. 





    </Text>
   </Stack>
   </Container>
  </Box>;
};

const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w="full" h={'100vh'}>
           <Image src={img1}/>
           <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Watch the future</Heading>
        </Box>

         <Box w="full" h={'100vh'}>
           <Image src={img2}/>
           <Heading bgColor={"whiteAlpha.900"} color={'black'} {...headingOptions}>Future is gameing</Heading>
        </Box>

         <Box w="full" h={'100vh'}>
           <Image src={img3}/>
           <Heading bgColor={"whiteAlpha.900"} color={'black'} {...headingOptions}>Gaming on console</Heading>
        </Box>

         <Box w="full" h={'100vh'}>
           <Image src={img4}/>
           <Heading bgColor={"whiteAlpha.900"} color={'black'} {...headingOptions}>Night life is cool</Heading>
        </Box>

    </Carousel> 
)
export default Home;