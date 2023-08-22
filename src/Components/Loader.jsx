import React from 'react';
import { Spinner, Center, Box } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Center h="100vh">
      <Box>
        <Spinner size="xl" color="teal.500" thickness="4px" />
      </Box>
    </Center>
  );
};

export default Loader;
