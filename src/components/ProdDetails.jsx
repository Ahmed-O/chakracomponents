
import {Box, Flex, VStack, HStack, Text, Spacer, Container, Image, useColorModeValue, Heading, Button, Select} from '@chakra-ui/react'
import React, {useState} from 'react'

function ProdDetails() {

  // Array for quantity dropdown
  // let qtyOptions = []
  // for(let i=0; i<=10; i++){
  //   qtyOptions.push(`<option value='1'>${i}</option>`)
  // }

  let imgSrcs = ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-mens-shoes-5QFp5Z.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-mens-shoes-5QFp5Z.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/120a31b0-efa7-41c7-9a84-87b1e56ab9c3/air-force-1-07-mens-shoes-5QFp5Z.png' ]

   let[mainImg, setMainImg] = useState(imgSrcs[0])

   let changeImage = (e)=>{
    console.log(e)
    console.log(e.target)
    console.log(e.current)
   }


  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Flex direction={{base: 'column', md: 'row'}}>


        <VStack w={{base:'100%', sm:'100%', md:'60%'}} overflow='hidden' p={5}>
          <Image src={imgSrcs[0]} w={{ base: '280px', sm: '280px', lg: '500px' }} h={{ base: '280px', sm: '280px', lg: '500px' }}/>
          <HStack p={5}>
            <Image w={{ base: '70px', sm: '70px', lg: '125px' }} h={{ base: '70px', sm: '70px', lg: '125px' }} src={imgSrcs[0]} border='solid 1px black'/>
            <Image w={{ base: '70px', sm: '70px', lg: '125px' }} h={{ base: '70px', sm: '70px', lg: '125px' }} src={imgSrcs[1]} onClick={changeImage}/>
            <Image w={{ base: '70px', sm: '70px', lg: '125px' }} h={{ base: '70px', sm: '70px', lg: '125px' }} src={imgSrcs[2]}/>
            <Image w={{ base: '70px', sm: '70px', lg: '125px' }} h={{ base: '70px', sm: '70px', lg: '125px' }} src={imgSrcs[3]}/>
          </HStack>
        </VStack>



        <VStack maxW={{base:'100%', sm:'100%', md:'40%'}} overflow='hidden' align={'flex-start'} justify={'center'} gap={5} pl={10} pr={10}>
          <Heading>Nike Air Force 1</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel consequatur sequi dolorem rem dolor mollitia molestiae. Quos, illum ea?</Text>
          <Text fontWeight={'bold'} fontSize={{ base: '20px', lg: '24px' }}>$100.00</Text>
          <Text>⭐⭐⭐⭐⭐ (368)</Text>
          <HStack gap={5}>
            <Select placeholder='QTY' size='md' w='80px' focusBorderColor={useColorModeValue('black','white')}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            {/* ${qtyOptions.map(option=>{
              console.log(option)
              return option;
            })} */}
          </Select>
          <Button
            // w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.100')}
            color={useColorModeValue('gray.100', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              // transform: 'translateY(2px)',
              // boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
          </HStack>
         


        </VStack>
      </Flex>

    </Box>
  )
}

export default ProdDetails
