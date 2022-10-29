import React, {useState} from 'react'
import {Box, Flex, HStack, Image} from '@chakra-ui/react'

export default function MultiImageCarousel() {

    const cards = [
        'https://images.unsplash.com/photo-1666845267403-191d298cf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
        'https://images.unsplash.com/photo-1666756201003-b46eaf2d5cf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80',
        'https://images.unsplash.com/photo-1666904428342-6975acc1735d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80'
    ]
  return (
    <Flex w={"100vw"} alignItems={"center"} justifyContent={"center"}>
      <Image src={cards[0]}/>
      <Image src={cards[1]}/>
      <Image src={cards[2]}/>
    </Flex>
  )
}

