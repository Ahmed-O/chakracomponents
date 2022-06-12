import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Simple from './components/Simple';
import ProdDetails from './components/ProdDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <>
      <ColorModeSwitcher />
      <Simple />;
      <ProdDetails />
      <ShoppingCart />
    </>
  );
}

export default App;
