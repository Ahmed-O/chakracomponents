import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Simple from './components/Simple';
import ProdDetails from './components/ProdDetails';

function App() {
  return (
    <>
      <ColorModeSwitcher />
      <Simple />;
      <ProdDetails />
    </>
  );
}

export default App;
