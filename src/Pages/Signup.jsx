import { useState } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  RadioGroup,
  Radio,
  Card,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterAccountRequest } from '../Redux/Authentication/action';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userType, setUserType] = useState('candidate');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const dispatch = useDispatch()
  const toast = useToast();
  const store = useSelector((state) => state.userAuthReducer);
  const navigate = useNavigate();


  const handleUserTypeChange = (newValue) => {
    setUserType(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
      
    };
    if (userType === 'employer') {
        userData.companyname = companyName;
      }
    console.log(`Signing up as ${userType}`, userData);
    dispatch(RegisterAccountRequest(userData, userType))
    .then((res)=> {
      if (res.type == "GET_SIGNUP_REQUEST_USER_SUCCESS") {
        toast({
          title: `Account Created`,
          description: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/login");
      } else {
        toast({
          title: `Hey please check your mail or password`,
          description: "Provide correct details or contact admin",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    })
  };
  
  const imageSrc = userType === 'candidate'
    ? 'https://www.globalsign.com/application/files/1016/6783/0114/Multi-factor_Authentication_MFA.png'
    : 'https://okcredit-blog-images-prod.storage.googleapis.com/2021/01/hire1.jpg';

  return (
    <Stack mt={"100px"}  width={"95%"} m={"auto"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Card color={"white"} bgGradient="linear(to-b, blue.600, pink.500)" display={"flex"} p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign up for an account</Heading>
          <RadioGroup value={userType} onChange={handleUserTypeChange} mb={4}>
            <Stack direction="row">
              <Radio value="candidate">Candidate</Radio>
              <Radio value="employer">Employer</Radio>
            </Stack>
          </RadioGroup>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          {userType === 'employer' && (
            <FormControl id="companyName">
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </FormControl>
          )}
          <Stack spacing={6}>
            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'black'}>Forgot password?</Text>
            </Stack>
            <Button
             isLoading={store.isLoading}
            colorScheme={'blue'} variant={'solid'} type="submit" onClick={handleSubmit}>
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Card>
      <Flex flex={1}>
        <Image  alt={'Signup Image'} objectFit={'cover'} src={imageSrc} />
      </Flex>
    </Stack>
  );
};

export default Signup;
