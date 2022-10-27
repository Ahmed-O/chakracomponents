import { SiGithub } from 'react-icons/si';
import { Button, Center, Text } from '@chakra-ui/react';

export default function GithubButton() {
  return (
    <Center p={8}>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<SiGithub />}>
        <Center>
          <Text>Sign up with Github</Text>
        </Center>
      </Button>
    </Center>
  );
}