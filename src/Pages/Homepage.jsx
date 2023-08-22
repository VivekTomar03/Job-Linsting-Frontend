import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Internship from "../Components/Internship";
import Certificate from "../Components/Certificate";
import Info from "../Components/Info";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import HomepageSkeleton from "../Sketelen/HomepageSkeleton ";

const Homepage = () => {
  const store = useSelector((state) => state.userAuthReducer)
 const [loading, setloading] = useState(true)
  useEffect(()=> {
      setTimeout(() => {
         setloading(false)
      }, 2000);
  },[])
  if(loading){
    return <HomepageSkeleton/>
  }
  return (
    <Box>
      <Center display={"flex"} flexDirection={"column"}>
        <Heading mb={2} mt={"50px"}>{store.name?`     Hi ${store.name} 👋 `:"Make your dream career a reality"}</Heading>
        <Text>{store.typeofuser==="company"?"Now you can hire candidate on our platform":"Let’s help you land your dream career"}</Text>
        <Text mt={"50px"} fontWeight={"bold"} fontSize={"2xl"}>
          Trending on Match Your Role 🔥
          
        </Text>
        
      </Center>

      <Box
        className="trending"
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        gap={"20px"}
        mt={"50px"}
        alignItems={"center"}
      >
        <Image
          width={"400px"}
          height={"300px"}
          borderRadius={"30px"}
          src="https://i.pinimg.com/750x/8c/71/f5/8c71f584636890d47a6856f13aee6502.jpg"
          alt="image 1"
        />
        <Image
          width={"400px"}
          height={"300px"}
           borderRadius={"30px"}
          src="https://i.pinimg.com/750x/cb/e4/df/cbe4df2fa3e43db19bf9d6b69dec2e26.jpg"
          alt="image 1"
        />

        <Image
          width={"400px"}
          height={"300px"}
           borderRadius={"30px"}
          src="https://i.pinimg.com/750x/0b/cb/49/0bcb499c63262766084e7621af8f6301.jpg"
          alt="image 1"
        />
      </Box>
      <Box mt={"100px"}>
           <Heading>Latest internships on Match My Role</Heading>
           <Box>
               <Internship/>
           </Box>
      </Box>
      <Box mt={"100px"}>
      <Heading>Latest Certification courses</Heading>

          <Certificate/>
      </Box>
      <Box textAlign={"center"} mt={"100px"}>
        <Info/>
      </Box>
    
    </Box>
  );
};

export default Homepage;
