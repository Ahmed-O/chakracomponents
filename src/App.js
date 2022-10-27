import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Simple from './components/Simple';
import ProdDetails from './components/ProdDetails';
import ShoppingCart from './components/ShoppingCart';
import GithubButton from './components/GithubButton';
import DiscordButton from './components/DiscordButton';

function App() {
  return (
    <>
      {/* <ProdDetails /> */}
      <GithubButton />
      <DiscordButton />
    </>
  );
}

export default App;
