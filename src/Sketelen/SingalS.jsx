import { Skeleton, VStack } from '@chakra-ui/react';
import React from 'react';

const SingalS = () => {
  return (
    <VStack align="stretch" spacing={6} p={6} maxW="800px" mx="auto">
        <Skeleton height="20px" width="70%" />
        <Skeleton height="16px" width="50%" />
        <Skeleton height="16px" width="40%" />
        <Skeleton height="16px" width="30%" />
        <Skeleton height="16px" width="70%" />
        <Skeleton height="16px" width="80%" />
        <Skeleton height="16px" width="60%" />
        <Skeleton height="16px" width="40%" />
        <Skeleton height="16px" width="60%" />
        <Skeleton height="16px" width="40%" />
        <Skeleton height="16px" width="60%" />
        <Skeleton height="16px" width="40%" />
      </VStack>
  );
}

export default SingalS;
