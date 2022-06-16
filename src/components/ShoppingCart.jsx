import React, {useState} from 'react'
import {Box, Flex, VStack, HStack, Text, Spacer, Container, Image, useColorModeValue, Heading, Button, Select, RadioGroup, Radio} from '@chakra-ui/react'

function ShoppingCart() {
  return (
    <CartItem/>
  )
}



function CartItem(){
    const [value, setValue] = useState('1')
    return (
        <HStack alignItems={'center'}>
            
            <Image src='https://www.motortrend.com/uploads/sites/5/2020/01/Lamborghini-Huracan-Evo-RWD-front-three-quarters.jpg' w='150px' />
            <VStack>
                <Text>Lamborghini Huracan</Text>
                <HStack>
                 <Select placeholder='1' size='md' w='80px' focusBorderColor={useColorModeValue('black','white')}>
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
                </Select>
                <Button>Save for Later</Button>
                
            </HStack>
               

            </VStack>

            <RadioGroup onChange={setValue} value={value}>
                <VStack alignItems='flex-start'>
                    <Radio value='1'>Standard Shipping</Radio>
                    <Radio value='2'>Two Day Delivery</Radio>
                    <Radio value='3'>Order Pickup</Radio>
                </VStack>
            </RadioGroup>
            
        </HStack>
    )
}

export default ShoppingCart
