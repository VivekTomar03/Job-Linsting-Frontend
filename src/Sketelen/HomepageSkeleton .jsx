import React from "react";
import { Box, Center, Heading, Text, Skeleton, SkeletonCircle, Stack,CardSkeleton, Flex  } from "@chakra-ui/react";

const HomepageSkeleton = () => {
  return (
    <Box mt={51}>
      <Center display="flex" flexDirection="column">
        <Skeleton width="200px" height="24px" mb={2} mt="50px" />
        <Skeleton width="300px" height="16px" />
        <SkeletonCircle size="40px" mt="50px" />
      </Center>

      <Box
        className="trending"
        display="flex"
        justifyContent="space-around"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        gap="20px"
        mt="50px"
        alignItems="center"
      >
        <Skeleton width="400px" height="300px" />
        <Skeleton width="400px" height="300px" />
        <Skeleton width="400px" height="300px" />
      </Box>
      <Box mt="100px">
        <Heading>
          <Skeleton width="200px" height="24px" />
        </Heading>
        <Box>
        <Box p={4}>
      <Stack spacing={4} textAlign={'center'}>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          <Skeleton height="18px" width="70%" />
        </Text>
      </Stack>

      <Box mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
        <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg="gray.100"
        >
          <Skeleton w={10} h={10} />
        </Flex>
        <Box mt={2}>
          <Skeleton height="20px" width="70%" mb={1} />
          <Skeleton height="16px" width="80%" />
        </Box>
        <Skeleton height="32px" width="60%" mt={2} />
      </Stack>
    </Box>
        </Flex>
      </Box>
    </Box>
          <Skeleton width="100%" height="200px" mt="20px" />
        </Box>
      </Box>
      <Box mt="100px">
        <Heading>
          <Skeleton width="200px" height="24px" />
        </Heading>
        {/* Replace this with your actual component */}
        {/* <Certificate /> */}
        <Skeleton width="100%" height="200px" mt="20px" />
      </Box>
      <Box textAlign="center" mt="100px">
        {/* Replace this with your actual component */}
        {/* <Info /> */}
        <Skeleton width="100%" height="300px" />
      </Box>
    </Box>
  );
};

export default HomepageSkeleton;
