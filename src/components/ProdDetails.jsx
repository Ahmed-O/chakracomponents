import React from 'react'
import {Box, Flex, VStack, HStack, Text, Spacer, Container, Image, useColorModeValue, Heading, Button} from '@chakra-ui/react'

function ProdDetails() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Flex direction={{base: 'column', md: 'row'}}>


        <VStack w={{base:'100%', sm:'100%', lg:'50%'}} overflow='hidden' p={5}>
          <Image src='https://bit.ly/dan-abramov'/>
          <HStack p={5}>
            <Image h={'100%'} w={{ base: '75px', sm: '70px', lg: '200px' }} src='https://bit.ly/dan-abramov'/>
            <Image h={'100%'} w={{ base: '75px', sm: '70px', lg: '200px' }} src='https://bit.ly/dan-abramov'/>
            <Image h={'100%'} w={{ base: '75px', sm: '70px', lg: '200px' }} src='https://bit.ly/dan-abramov'/>
            <Image h={'100%'} w={{ base: '75px', sm: '70px', lg: '200px' }} src='https://bit.ly/dan-abramov'/>
          </HStack>
        </VStack>



        <VStack maxW={{base:'100%', sm:'100%', lg:'50%'}} overflow='hidden' p ={5} align={'flex-start'} justify={'center'} gap={5}>
          <Heading>Product Name</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel consequatur sequi dolorem rem dolor mollitia molestiae. Quos, illum ea?</Text>
          <Text fontWeight={'bold'} fontSize={{ base: '20px', lg: '24px' }}>$499.99</Text>
          <Text>⭐⭐⭐⭐⭐ 38 Ratings</Text>
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


        </VStack>
      </Flex>

    </Box>
  )
}

export default ProdDetails
