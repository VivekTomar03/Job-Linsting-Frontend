import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Card,
  Grid,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  CardBody,
  Flex,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteJobApplication,
  GetAllJob,
  PostJobApplication,
  UpdateJobApplication,
  viewApplicationforjob,
} from "../Redux/JobListing/action";
import Loader from "../Components/Loader";
import { useRef } from "react";
let initState = {
  title: "",
  description: "",
  opening: "",
  ctc: "",
  skill: "",
  location: "",
};

const PostJob = () => {
  const store = useSelector((state) => state.userAuthReducer);
  const { jobarray, isLoading, isError, viewuserapplication } = useSelector(
    (state) => state.JobReducer
  );
  const [job, setjob] = useState(jobarray);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [formdata, setformdata] = useState(initState);
  const dispatch = useDispatch();
  const [updatejob, setupdatejob] = useState({});
  const [bool, setbool] = useState(false);
  const form = useRef();
  const currentDate = new Date();
  const hoursToAdd = 5;
  currentDate.setHours(currentDate.getHours() + hoursToAdd);
  useEffect(() => {
    dispatch(GetAllJob);
    setjob(jobarray);
    console.log(bool, "boolen am i");
  }, [bool]);
  function showdata() {
    setTimeout(() => {
      setbool(true);
    }, 1100);
  }
  showdata();
  const viewapplications = (id) => {
    dispatch(viewApplicationforjob(id, store.token));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeModal1 = () => {
    setIsModalOpen1(false);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    let val;

    if (type === "number") {
      val = +value;
    } else if (name === "skill") {
      val = value.split(",").map((skill) => skill.trim());
    } else {
      val = value;
    }

    setformdata({ ...formdata, [name]: val });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostJobApplication(formdata, store.token)).then(() => {
      dispatch(GetAllJob);
      setjob([...job, formdata]);
      setIsModalOpen1(false);
    });
  };

  const handleDeleteJob = (id) => {
    dispatch(DeleteJobApplication(id, store.token)).then(() => {
      dispatch(GetAllJob);
      let newjob = job.filter((el) => el._id !== id);
      setjob(newjob);
    });
  };

  const handleuPDATE = (el) => {
    setIsModalOpen2(true);
    setupdatejob(el);
  };
  const handlechangeUpdate = (e) => {
    const { name, type, value } = e.target;
    let val;

    if (type === "number") {
      val = +value;
    } else if (name === "skill") {
      val = value.split(",").map((skill) => skill.trim());
    } else {
      val = value;
    }

    setupdatejob({ ...updatejob, [name]: val });
  };
  const handleSubmitupdate = (e) => {
    e.preventDefault();
    dispatch(UpdateJobApplication(updatejob._id, updatejob, store.token)).then(
      () => {
        dispatch(GetAllJob);
        let newjob = job.filter((el) => el._id !== updatejob._id);
        // console.log(newjob);
        setjob([...newjob, updatejob]);
        setIsModalOpen2(false);
      }
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s8yvrsi",
        "template_v6x9ypi",
        form.current,
        "E761B7dU8HM7hlRiy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box p={4}>
      <Box
        shadow={"6xl"}
        color={"white"}
        backgroundImage={
          "https://i.pinimg.com/564x/d1/6f/7b/d16f7bd62fbfb34c480319361d7e8fb7.jpg"
        }
        w={"80%"}
        m={"auto"}
        mt={5}
        p={5}
      >
        <Heading>Hello {store.name} 👋</Heading>
        <Text fontSize={"medium"} mt={5} as={"h1"}>
          You can Post Job Now For Condidates
        </Text>
      </Box>
      <Flex mt={5} justifyContent={"flex-start"}>
        <Button
          m={5}
          onClick={() => setIsModalOpen1(true)}
          borderRadius="full"
          bgGradient="linear(to-l, #00A5EC, pink.500)"
          _hover={{ bgGradient: "linear(to-l, #00A5EC, #00A5EC)" }}
          _active={{ bgGradient: "linear(to-l, #FFD3D3, #FCE2E2)" }}
          fontWeight="bold"
          boxShadow="md"
          fontSize={{ base: "md", md: "lg" }}
          py={3}
          px={6}
          transition="background 0.3s"
          color={"white"}
        >
          Post Job Now
        </Button>
      </Flex>
      <Box>
        {isLoading ? (
          <Loader />
        ) : (
          <Grid
            w={"80%"}
            justifyContent={"space-around"}
            mt={10}
            gap={5}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            }}
          >
            {job &&
              job?.map((el) => (
                <Card
                  border="1px solid gray"
                  shadow="4xl"
                  margin="auto"
                  p={5}
                  key={el._id}
                  borderRadius="lg"
                  bgColor="white"
                  transition="transform 0.2s, box-shadow 0.2s"
                  _hover={{
                    transform: "translateY(5px)",
                    boxShadow: "xl",
                  }}
                >
                  <Heading fontSize="lg" mb={2}>
                    Company Name: {el.companyName}
                  </Heading>
                  <Text fontSize="md" fontWeight="semibold" color="gray.600">
                    Job Title: {el.title}
                  </Text>
                  <Text fontSize="md" fontWeight="semibold" color="gray.600">
                    Location: {el.location}
                  </Text>
                  <Text fontSize="md" fontWeight="semibold" color="gray.600">
                    CTC: {el.ctc}
                  </Text>
                  <Text fontSize="md" fontWeight="semibold" color="gray.600">
                    Opening: {el.opening}
                  </Text>
                  <Button
                    mt={4}
                    size="sm"
                    variant="solid"
                    bgColor="teal.500"
                    color="white"
                    _hover={{ bgColor: "teal.600" }}
                    onClick={() => viewapplications(el._id)}
                  >
                    View Application
                  </Button>
                  <Button
                    mt={2}
                    size="sm"
                    variant="solid"
                    bgColor="red.500"
                    color="white"
                    _hover={{ bgColor: "red.600" }}
                    onClick={() => handleDeleteJob(el._id)}
                  >
                    Discard Job
                  </Button>
                  <Button
                    mt={2}
                    size="sm"
                    variant="solid"
                    bgColor="blue.500"
                    color="white"
                    _hover={{ bgColor: "blue.600" }}
                    onClick={() => handleuPDATE(el)}
                  >
                    Update Job
                  </Button>
                  {
                    <Text
                      mt={3}
                      fontWeight="bold"
                      color="red.500"
                      display={
                        el.opening === el?.applications?.length
                          ? "block"
                          : "none"
                      }
                    >
                      Opening Are Full. Please Discard Job From Portal.
                    </Text>
                  }
                </Card>
              ))}
          </Grid>
        )}
      </Box>

      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent bgGradient="linear(to-r, teal.200, yellow.300)">
          <ModalHeader textAlign="center" fontSize="2xl">
            Application Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" align="center" margin="auto" p={5}>
              {/* <Text display={viewuserapplication.length==0?"block":"none"}>{"No One Applied For This Job Yet"}</Text> */}
              {viewuserapplication.map((el) => (
               <Card
               boxSizing="auto"
               boxShadow="lg"
               bgGradient="linear(to-r, pink.200, purple.300)"
               p={5}
               m={2}
               key={el.id}
             >
               <form ref={form} onSubmit={sendEmail}>
                 <FormControl mb={3}>
                   <FormLabel>Name</FormLabel>
                   <Input
                     type="text"
                     name="to_name"
                     value={el.username}
                     readOnly
                     borderRadius="md"
                   />
                 </FormControl>
                 <FormControl mb={3}>
                   <FormLabel>Email</FormLabel>
                   <Input
                     type="email"
                     name="from_name"
                     value={localStorage.getItem("useremail")}
                     readOnly
                     borderRadius="md"
                   />
                 </FormControl>
                 <FormControl mb={3}>
                   <FormLabel>Message</FormLabel>
                   <Textarea
                     name="message"
                     value={`You have Applied For ${localStorage.getItem(
                       'companyname'
                     )}, Company Selected You For Interview. Best Of Luck, Match Your Role! This is the link that you have to join at ${currentDate} 
                        https://meet.google.com/jqn-sbhj-dnf
                     `}
                     readOnly
                     borderRadius="md"
                     resize="vertical"
                   />
                 </FormControl>
                 <Button
                   type="submit"
                   colorScheme="teal"
                   size="sm"
                   fontWeight="bold"
                   borderRadius="md"
                   onClick={closeModal}
                 >
                   Send
                 </Button>
               </form>
             </Card>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="pink" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isModalOpen1} onClose={closeModal1} size="xl">
        <ModalOverlay />
        <ModalContent bgGradient="linear(to-r, teal.200, cyan.500)">
          <ModalHeader textAlign="center" fontSize="2xl">
            Post A New Job
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    value={formdata.title}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter location"
                    name="location"
                    value={formdata.location}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    placeholder="Enter description"
                    name="description"
                    value={formdata.description}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>CTC</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter CTC min to max"
                    name="ctc"
                    value={formdata.ctc}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Openings</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter opening"
                    name="opening"
                    value={formdata.opening}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Skills</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter skills separated by commas"
                    name="skill"
                    value={formdata.skill}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </VStack>
            </form>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="teal" type="submit" onClick={handleSubmit}>
              Post Job
            </Button>
            <Button onClick={closeModal1} ml={4}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isModalOpen2} onClose={closeModal2} size="xl">
        <ModalOverlay />
        <ModalContent bgGradient="linear(to-r, pink.200, purple.500)">
          <ModalHeader textAlign="center" fontSize="2xl">
            Update Job
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmitupdate}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    value={updatejob.title}
                    onChange={(e) => handlechangeUpdate(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter location"
                    name="location"
                    value={updatejob.location}
                    onChange={(e) => handlechangeUpdate(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    placeholder="Enter description"
                    name="description"
                    value={updatejob.description}
                    onChange={(e) => handlechangeUpdate(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>CTC</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter CTC min to max"
                    name="ctc"
                    value={updatejob.ctc}
                    onChange={(e) => handlechangeUpdate(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Openings</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter opening"
                    name="opening"
                    value={updatejob.opening}
                    onChange={(e) => handlechangeUpdate(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Skills</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter skills separated by commas"
                    name="skill"
                    value={updatejob.skill}
                    onChange={(e) => handlechangeUpdate(e)}
                  />
                </FormControl>
              </VStack>
            </form>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              colorScheme="purple"
              type="submit"
              onClick={handleSubmitupdate}
            >
              Update Job
            </Button>
            <Button onClick={closeModal2} ml={4}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PostJob;
