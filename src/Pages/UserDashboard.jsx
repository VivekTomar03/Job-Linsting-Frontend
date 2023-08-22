import { Box, Text, VStack, Divider, Heading, Badge, Grid, GridItem, Icon, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaCheckCircle, FaRegEnvelope, FaUser } from 'react-icons/fa';

const UserDashboard = () => {
  const [email] = useState(localStorage.getItem('useremail') || '');
  const store = useSelector((state) => state.userAuthReducer);

  const userSkills = [
    'React.js', 'JavaScript', 'HTML', 'CSS', 'Redux', 'React Router', 'JSX',
    'ES6+', 'RESTful APIs', 'Git', 'Frontend build tools',
    'Component-based architecture', 'State management', 'UI/UX design principles',
    'Responsive design', 'CSS preprocessors',
  ];

  const userApplications = [
    { id: 1, jobTitle: 'Frontend Developer', company: 'ABC Tech', status: 'Pending' },
    { id: 2, jobTitle: 'React Developer', company: 'XYZ Solutions', status: 'Accepted' },
    { id: 3, jobTitle: 'UI/UX Designer', company: 'DesignCo', status: 'Rejected' },
    // Add more application data here
  ];

  return (
    <Box p={6} boxShadow="md" bg="white" borderRadius="lg">
      <VStack spacing={4} align="start">
        <Box display="flex" alignItems="center">
          <Icon as={FaUser} boxSize={8} color="teal.500" />
          <Text ml={2} fontSize="xl" fontWeight="semibold">Hi, {store.name}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon as={FaRegEnvelope} boxSize={6} color="gray.600" />
          <Text ml={2} fontSize="md" color="gray.600">Email: {email}</Text>
        </Box>
      </VStack>
      <Divider my={6} />
      <Box>
        <Heading as="h2" size="lg" color="teal.500">Skills</Heading>
        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)',md: 'repeat(4, 1fr)' }} gap={4} mt={4}>
          {userSkills.map((skill, index) => (
            <GridItem key={index} display="flex" alignItems="center">
              <FaCheckCircle color={index % 5 === 0 ? 'red' : 'green.500'} />
              <Text ml={2} fontSize="md" fontWeight="medium">{skill}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Divider my={6} />
      <Box>
        <Heading as="h2" size="lg" color="teal.500">My Applications</Heading>
        {userApplications.map((application) => (
          <Box key={application.id} mt={4} bg="gray.50" p={4} borderRadius="md">
            <Text fontSize="md" fontWeight="bold">{application.jobTitle} at {application.company}</Text>
            <Badge colorScheme={application.status === 'Accepted' ? 'green' : 'red'} mt={1}>
              {application.status}
            </Badge>
          </Box>
        ))}
      </Box>
      
    </Box>
  );
};

export default UserDashboard;
