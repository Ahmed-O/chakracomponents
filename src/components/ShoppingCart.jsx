import React from 'react'
import {Box, Flex, VStack, HStack, Text, Spacer, Container, Image, useColorModeValue, Heading, Button, Select} from '@chakra-ui/react'

function ShoppingCart() {
  return (
    <CartItem/>
  )
}



function CartItem(){
    return (
        <HStack>
            
            <Image src='https://www.motortrend.com/uploads/sites/5/2020/01/Lamborghini-Huracan-Evo-RWD-front-three-quarters.jpg' w='150px' />
            <VStack>
                <Text>Lamborghini Huracan</Text>
                <HStack>
                 <Select placeholder='1' size='md' w='80px' focusBorderColor={useColorModeValue('black','white')}>
                    <option value='1'>QTY</option>
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
            
        </HStack>
    )
}

export default ShoppingCart
