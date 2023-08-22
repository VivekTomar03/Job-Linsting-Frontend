'use client'

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Text,
} from '@chakra-ui/react'


const Feature = ({ heading, text }) => {
  return (
    <GridItem  shadow={'xl'} p={5} border={"1px solid gray"}>
      
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
      <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Apply Now
        </Button>
    </GridItem>
  )
}

export default function Certificate() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Apply For Certificates
            </chakra.h2>
            <Button colorScheme="green" bg={"#00A5EC"} size="md" _hover={{bg:"#00A5EC"}}>
             See More
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
            Industry Recognized & government approved Web Development Certification, it is one of the hottest career options with an average fresher salary of 6 LPA for full stack developers according to Glassdoor.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
      
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'Web Development'}
          text={'Rating  ⭐⭐⭐⭐'}
        />
        <Feature
          heading={'Python Programing'}
          text={'Rating  ⭐⭐⭐⭐⭐'}
        />
        <Feature
          heading={'Digital Marketing'}
          text={'Rating  ⭐⭐⭐⭐⭐'}

        />
        <Feature
          heading={'C Programing'}
          text={'Rating  ⭐⭐⭐'}

        />
      </Grid>
    </Box>
  )
}