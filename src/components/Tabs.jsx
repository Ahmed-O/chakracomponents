import React, {useState} from 'react'
import {Box, Flex, Center, Heading, HStack, Text, Button, Image} from '@chakra-ui/react'

export default function Tabs() {

    const [currTab, setCurrTab] = useState(0);

    const tabStyles = {
        cursor: "pointer",
        w: "50%",
        p: "10px",
        textAlign: "center",
        //bgColor: "gray.100",
        borderBottom: "1px",
        borderBottomColor: "gray.500"
    };

    const tabContent = [
        <Tab1/>, 
        <Tab2/>, 
        <Tab3/> 
    ]

  return (
    <Center py={6}>
        <Box maxW='500px' w="full" height="300px" borderWidth='1px' borderColor="gray.500">
            <HStack spacing={0} w={"full"}>
                <Box {...tabStyles} borderRight="1px" borderRightColor="gray.500" bgColor={currTab===0?"white": "gray.100"} borderBottomColor={currTab===0?"white": "gray.500"} borderTop={currTab===0?"3px solid #76E4F7": "3px solid #EDF2F7"} onClick={()=>setCurrTab(0)}>Tab 1</Box>
                <Box {...tabStyles} borderRight="1px" bgColor={currTab===1?"white": "gray.100"} borderBottomColor={currTab===1?"white": "gray.500"} borderTop={currTab===1?"3px solid #76E4F7": "3px solid #EDF2F7"} onClick={()=>setCurrTab(1)}>Tab 2</Box>
                <Box {...tabStyles} bgColor={currTab===2?"white": "gray.100"} borderBottomColor={currTab===2?"white": "gray.500"} borderTop={currTab===2?"3px solid #76E4F7": "3px solid #EDF2F7"} onClick={()=>setCurrTab(2)}>Tab 3</Box>
            </HStack>
            {tabContent[currTab]}
        </Box>
    </Center>
  )
}

function Tab1(){
    return (
        <Box p={5}>
            <Heading size="xl">Tab 1</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere atque explicabo quis a exercitationem temporibus? Quidem alias impedit, nihil ipsa voluptatum animi! Voluptate assumenda asperiores qui ratione provident magni itaque. Maxime omnis aut corrupti tenetur eveniet ex, id repellat voluptatem incidunt reprehenderit illo autem temporibus tempore debitis. Sint, cum.</Text>
        </Box>
    )
}
function Tab2(){
    return (
        <Box p={5}>
            <Heading size="xl">Tab 2</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officia asperiores sit facilis at iure adipisci quos praesentium natus voluptatem.</Text>
        </Box>
    )
}
function Tab3(){
    return (
        <Box p={5}>
            <Heading size="xl">Tab 3</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti voluptas sapiente consequatur quod facere, voluptate adipisci saepe aspernatur cumque dolorum nostrum quas non temporibus fugiat nobis. Amet placeat explicabo, repellat doloremque vel eum, eos molestiae ut pariatur laudantium vitae perspiciatis sed quis, dolor optio rem quaerat eaque autem maiores! </Text>
        </Box>
    )
}