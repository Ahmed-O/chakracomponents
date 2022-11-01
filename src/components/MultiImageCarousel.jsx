import React, {useState, useEffect, useRef} from 'react'
import {Box, Flex, HStack, Image, IconButton, Text, useColorModeValue} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export default function MultiImageCarousel() {
  
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    //w: "auto",
    p: "15px",
    color: "white",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const cards = [
      'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
      'https://images.unsplash.com/photo-1666756201003-b46eaf2d5cf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80',
      'https://images.unsplash.com/photo-1666904428342-6975acc1735d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80',
      'https://images.unsplash.com/photo-1667296940025-3550476fc2fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1667208886200-80ce25e80c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
      'https://images.unsplash.com/photo-1666860157040-61004ad58d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  ]

  const [currIndex, setCurrIndex] = useState(0);
  const maxCarouselWidth = useRef(0);
  const carouselElement = useRef(null);

  const movePrev = () => {
    if(currIndex > 0){
      setCurrIndex((prevState) => prevState-1);
    }
  };

  const moveNext = () => {
    if(carouselElement.current !== null && carouselElement.current.offsetWidth * currIndex <= maxCarouselWidth.current){
      setCurrIndex((prevState)=>prevState+1);
    }
  };

  const isDisabled = (direction) =>{
    if (direction === 'prev') {
      return currIndex <= 0;
    }
    if (direction === 'next' && carouselElement.current !== null) {
      return (
        carouselElement.current.offsetWidth * currIndex >= maxCarouselWidth.current
      );
    }
    return false;
  };

  useEffect(() => {
    if (carouselElement !== null && carouselElement.current !== null) {
      carouselElement.current.scrollLeft = carouselElement.current.offsetWidth * currIndex;
    }
  }, [currIndex]);

  useEffect(() => {
    maxCarouselWidth.current = carouselElement.current
      ? carouselElement.current.scrollWidth - carouselElement.current.offsetWidth
      : 0;
  }, []);

 
  return (
    <Flex w="full" bg={useColorModeValue('gray.100', 'gray.900')} p={10}
      alignItems="center"
      justifyContent="center"
      pos="relative">
      <Flex w={"full"} pos={"relative"} overflow={"hidden"} ref={carouselElement} scrollBehavior={"smooth"}>
        <Flex h="400px" w="full" gap={5}>
          {cards.map((card)=>{
            return <Image src={card}/>
          })}
        </Flex>   
      </Flex>
       <IconButton {...arrowStyles} aria-label="left-arrow" variant={"ghost"} left="10" isDisabled={isDisabled("prev")} onClick={movePrev}>
          <BiLeftArrowAlt size="40px"/>
        </IconButton>
        <IconButton {...arrowStyles} aria-label="left-arrow" variant={"ghost"} right="10" isDisabled={isDisabled("next")} onClick={moveNext}>
          <BiRightArrowAlt size="40px"/>
        </IconButton>
    </Flex>
  )
}


