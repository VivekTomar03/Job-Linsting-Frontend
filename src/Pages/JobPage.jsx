import React, { useEffect, useState } from "react";
import { Box, Button, Center, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { ApplyForJobUser, GetJobForUser } from "../Redux/GetJob/action";
import { BiTrendingUp } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import SkeletonJobPage from "../Sketelen/SkeletonJobPage SkeletonJobPage";
import { Link, useSearchParams } from "react-router-dom";
import App from "../App.css";

const JobPage = () => {
  const [SearchParam] = useSearchParams()
  const dispatch = useDispatch();
  const { isloading, iserror, jobdata, aplyLoading } = useSelector(
    (state) => state.GetJobReducer
  );
  const store= useSelector((state) => state.userAuthReducer)
  const toast = useToast()
//  let obj = {
//   params:{
   
//     sortBy:
//   }
//  }

  useEffect(() => {
  
    dispatch(GetJobForUser(SearchParam.get("q")||""));
 
  }, [SearchParam]);


  if (isloading) {
    return <SkeletonJobPage />;
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
  };

 

  return (
    <Box mt={20} p={5}>
      <Center>
        <Box
          w={"full"}
          className="banner"
          bgColor={"#0073CC"}
          p={5}
          borderRadius="lg"
          boxShadow="md"
          color="white"
        >
          <Heading>
            Ab naukree ki tension ko bolo bye!
            <Text fontSize="xl" mt={2}>
              with Match Your Role Jobs
            </Text>
          </Heading>
        </Box>
      </Center>

      <Flex
        mt={10}
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
      >
        <Box w={["100%", "100%", "20%"]}>
          <Sidebar />
        </Box>
        <Box
        className="scrolling"
          overflowX="auto"
          overflowY="scroll"
          w={["100%", "100%", "78%"]}
          style={{
            overflowY: "scroll",
            
          }}
          h={"600px"}
        >
          {jobdata?.data?.map((el) => (
            <Box
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              key={el._id}
              borderRadius="lg"
              p={5}
              mb={6}
              bg="white"
            >
              <Button
                justifyContent={"left"}
                leftIcon={<BiTrendingUp />}
                colorScheme="blue"
                variant="outline"
                size="sm"
              >
                Actively hiring
              </Button>
              <Heading fontSize="2xl" mt={2}>
                {el.title?.toUpperCase()}
              </Heading>
              <Text color="gray.500" mt={1}>
                {el.companyName}
              </Text>
              <Flex mt={2} alignItems="center">
                <CiLocationOn color="gray.400" />
                <Text color="gray.500" ml={1}>
                  {el.location}
                </Text>
              </Flex>
              <Flex mt={3} fontSize="sm">
                <Text>Start Date: Immediately</Text>
                <Text ml={6}>CTC ANNUAL: {el.ctc}</Text>
                <Text ml={6}>EXPERIENCE: 0-5 years</Text>
              </Flex>
              <Flex
                justifyContent={["center", "center", "center", "flex-end"]}
                mt={4}
              >
                <Button _hover={{bgColor:"#0073CC"}} bgColor={"#0073CC"} colorScheme="teal" size="sm" mr={2}>
                  <Link to={`/job/${el._id}`}> View Details</Link>
                </Button>
                <Button  _hover={{bgColor:"#0073CC"}} onClick={() => handlejobApply(el._id)} bgColor={"#0073CC"} colorScheme="teal" size="sm">
                  Apply Now
                </Button>
              </Flex>
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default JobPage;
