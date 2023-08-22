import { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { LoginRequestUser } from "../Redux/Authentication/action";
const Login = () => {
  const [userType, setUserType] = useState("user");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const store = useSelector((state) => state.userAuthReducer);
  const handleUserTypeChange = (newValue) => {
    setUserType(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    dispatch(LoginRequestUser(obj, userType)).then((res) => {
      localStorage.setItem("companyname", res.payload.name)
      if (res.type == "GET_LOGIN_REQUEST_USER_SUCCESS") {
        localStorage.setItem("useremail", obj.email)
        toast({
          title: `Hey ${res.payload.name} welcome back`,
          description: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/");
      } else {
        toast({
          title: `Hey please check your mail or password`,
          description: "May be try to Signup first",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };
  return (
    <Box
    bgGradient="linear(to-b, blue.600, pink.500)"
      mt={"100px"}
      p={8}
      maxW="450px"
      mx="auto"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      color={"white"}
    >
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Login
      </Heading>
      <Flex justifyContent="center">
        <RadioGroup value={userType} onChange={handleUserTypeChange}>
          <Stack direction="row">
            <Radio value="user">Candidate</Radio>
            <Radio value="company">Employer</Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
        </FormControl>
        <Button
        isLoading={store.isLoading}
          w={"100%"}
          type="submit"
          bg="#00A5EC"
          _hover={{ bg: "#00A5EC" }}
          color={"white"}
          mt={6}
          isFullWidth
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
