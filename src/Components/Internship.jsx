'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'


const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
     
       
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Apply Now
        </Button>
      </Stack>
    </Box>
  )
}

export default function Internship() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
        
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Empower your career with Match Your Role today and pick most trending intership and start you career with us
        </Text>
      </Stack>

      <Container maxW={'9xl'} mt={12}>
        <Flex  flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Frontend Developer'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'Zedex Info. Pvt. Limited.'}
            href={'#'}
          />
          <Card
            heading={'Backend Developer'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Aplo Info. Tech Limited'}
            href={'#'}
          />
          <Card
            heading={'Full Stack Developer'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Amazon Srvices Limited.'}
            href={'#'}
          />
          <Card
            heading={'Python Developer'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Mackren Edu Tech.'}
            href={'#'}
          />
          <Card
            heading={'Mean Developer'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Zocata Info. Tech Ltd.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}