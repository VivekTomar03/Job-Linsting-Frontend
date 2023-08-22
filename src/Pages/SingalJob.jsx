import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ApplyForJobUser, SingalPostRequestUser } from "../Redux/GetJob/action";
import {
  Box,
  Text,
  Heading,
  Badge,
  Divider,
  VStack,
  HStack,
  Icon,
  Button,
  Skeleton,
  useToast,
  Grid,
} from "@chakra-ui/react";
import {
  FiBriefcase,
  FiMapPin,
  FiDollarSign,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import SingalS from "../Sketelen/SingalS";

let keyResponsibilities = [
  "Take charge of the full-stack development process, leading a team of frontend and backend developers",
  "Work and provide guidance, mentorship, and technical leadership to the development team",
  "Assign tasks, set expectations, and monitor performance",
  "Develop high-performance Node.js applications leveraging the Express.js framework",
  "Analyze and optimize database queries in PostgreSQL and MySQL",
  "Integrate with AWS services to create a secure and stable backend",
  "Build pixel-perfect, smooth UIs for mobile applications using React Native",
  "Work on API integration by utilizing native APIs to facilitate deep integrations with both iOS and Android platforms",
  "Manage project planning by collaborating with leaders & cross-functional teams to plan and execute development",
  "Maintain code quality standards and conduct regular code reviews to ensure the delivery of high-quality",
  "Identify and troubleshoot performance bottlenecks to ensure a seamless and lightning-fast platform experience",
  "Utilize your expertise in AWS cloud services for hosting, managing, and scaling our platform",
  "Monitor platform performance and proactively address any issues or bugs to keep the platform running flawlessly",
  "Stay at the forefront of technology trends and propose innovative solutions to enhance our platform's capabilities",
];

const SingalJob = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { sLoading, sError, singaljobdata,aplyLoading } = useSelector(
    (state) => state.GetJobReducer
  );
  const store= useSelector((state) => state.userAuthReducer)
  const toast = useToast()
  useEffect(() => {
    dispatch(SingalPostRequestUser(id));
  }, []);

  if (sLoading) {
    return (
      <SingalS/>
    );
  }

  if (sError) {
    return <p>Error fetching data</p>;
  }

  const handlejobApply = (id) => {
    if (store.typeofuser === "user") {
      dispatch(ApplyForJobUser(id, store.usertoken))
        .then(() => {
          
          toast({
            title: 'Application Successful!',
            description: 'Your application has been submitted successfully.',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position:"top"
          })
         dispatch(SingalPostRequestUser(id));

        })
        .catch((err) => {
          console.log(err);
          toast({
            title: 'Application Submitted Already!',
            description: 'You Already Applied for this job',
            status: 'info',
            duration: 2000,
            isClosable: true,
            position:"top"
          })
        });
    } else {
     
      toast({
        title: 'Login First',
        description:  (
          <Link to="/login" style={{ textDecoration: 'underline' }}>
            Click here to login
          </Link>
        ),
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:"top",
      })
    }
  }
//div -> box 
//div -> display:flex -> flex -> all property -> one dimensinal layout
// div-> dislpay:grid -> grid-> all protery -> two dimensinal layout -> griditem
// data.map -> div-> title   // grid -> griditem-> title
// V
// I
// V
// E
//  K 
 return (
    <VStack align="stretch" spacing={6} p={6} maxW="800px" mx="auto" boxShadow={"4xl"}>
      <Heading as="h1" size="lg">
        {singaljobdata.title}
      </Heading>
      <HStack spacing={2} align="center">
        <Icon as={FiBriefcase} boxSize={4} color="gray.600" />
        <Text fontSize="md" color="gray.600">
          {singaljobdata.companyName}
        </Text>
      </HStack>
      <HStack spacing={2} align="center">
        <Icon as={FiMapPin} boxSize={4} color="gray.600" />
        <Text fontSize="md" color="gray.600">
          {singaljobdata.location}
        </Text>
      </HStack>
      <HStack spacing={2} align="center">
        <Icon as={FiUsers} boxSize={4} color="gray.600" />
        <Text fontSize="sm" color="gray.600">
          Applicants: {singaljobdata.applications?.length}
        </Text>
      </HStack>
      <Divider />
      <HStack spacing={4}>
        <VStack align="start">
          <Heading as="h2" size="md">
            
START DATE
          </Heading>
          <HStack  spacing={2} wrap="wrap">
            
              <Badge  colorScheme="teal" variant="outline">
                {"Immediately"}
              </Badge>
          
          </HStack>
        </VStack>
        <VStack align="start">
          <Heading as="h2" size="md">
            Salary Annual
          </Heading>
          <HStack spacing={2} align="center">
            <Icon as={FiDollarSign} boxSize={4} color="gray.600" />
            <Text fontSize="md" color="gray.600">
               CTC: {singaljobdata.ctc}
            </Text>
          </HStack>
        </VStack>
        <VStack align="start">
          <Heading as="h2" size="md">
            Opening
          </Heading>
          <HStack spacing={2} align="center">
            <Icon as={FiClock} boxSize={4} color="gray.600" />
            <Text fontSize="md" color="gray.600">
              Post: {singaljobdata.opening}
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <VStack align="start">
          <Heading as="h2" size="md">
            Skills Required
          </Heading>
          <Grid gap={1} gridTemplateColumns={"repeat(5,1fr)"} spacing={2} wrap="wrap">
            {singaljobdata?.skill?.map((skill, index) => (
              <Badge key={index} colorScheme="blue" variant="outline">
                {skill}
              </Badge>
            ))}
          </Grid>
        </VStack>
      <Text fontSize="md" color="gray.700">
        {singaljobdata.description}
        As a fast-growing company, we are committed to driving a positive impact
        in the Bharat market and revolutionizing the way small businesses thrive
        in the digital age.
      </Text>
      <VStack align="start" spacing={2}>
        <VStack align="start" spacing={2}>
          <Heading as="h2" size="md">
            Key Responsibilities
          </Heading>
          <VStack align="start" spacing={1}>
            {keyResponsibilities.map((responsibility, index) => (
              <Text key={index} fontSize="sm">
                {index + 1}: {responsibility}
              </Text>
            ))}
          </VStack>
        </VStack>
      </VStack>
      <Button _hover={{bgColor:"#0073CC"}} bgColor={"#0073CC"}  onClick={() => handlejobApply(id)} colorScheme="teal">Apply Now</Button>
    </VStack>
  );
};

export default SingalJob;
