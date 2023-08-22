import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton,
  useDisclosure,
  RadioGroup, Stack, Radio
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";
import _debounce from "lodash/debounce";
import { set } from "lodash";


const Sidebar = () => {
  const [SearchParam , setSearchParam] = useSearchParams()
  const [experienceValue, setExperienceValue] = useState(5);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("")
 const [comapnyname , setcompanyname ] = useState("")
 const [sort , setsort] = useState("")
  const handleExperienceChange = (value) => {
    setExperienceValue(value);
  };

  const debouncedSetTitle = _debounce((value) => {
    setSearchParam({ q: value });
  }, 300); 


  const handleTitleChange = (e) => {
    const newValue = e.target.value;
    setTitle(newValue);
   
  };
 const handleSubmit=()=> {
    debouncedSetTitle(title);
   
 }
 const handleTitleChange1 = (e) => {
  const newValue = e.target.value;
  setcompanyname(newValue);
 
};
const handleSubmit1=()=> {
  debouncedSetTitle(comapnyname);
 
}

const handleChangeSorting= (value)=> {
  setsort(value)
}

// useEffect(()=> {
//    let obj = {
    
//    }
//    sort && (obj.sortBY=sort)
//    setSearchParam(obj)
// },[sort])

  return (
    <Box>
      <Box
        p={5}
        bg="white"
        boxShadow={
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        }
        borderRadius="md"
        display={["none", "none", "none", "block"]}
      >
        <Flex flexDirection="column">
          <Checkbox colorScheme="teal" mb={2}>
            As per my{" "}
            <Box as="span" color="teal.500">
              preferences
            </Box>
          </Checkbox>
          <FormControl>
            <FormLabel>Job Title</FormLabel>
            <Input type="text"  placeholder="title" 
              value={title}
              onChange={handleTitleChange}
              
            />
            <Button color={"white"} _hover={{bgColor:"#0073CC"}} bgColor={"#0073CC"} colorScheme="teal" m={2} onClick={handleSubmit}>Submit</Button>
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Company</FormLabel>
            <Input type="text" 
             value={comapnyname}
             onChange={handleTitleChange1}
             
            />
            <Button color={"white"} _hover={{bgColor:"#0073CC"}} bgColor={"#0073CC"} colorScheme="teal" m={2} onClick={handleSubmit1}>Submit</Button>

          </FormControl>
          <RadioGroup defaultValue="asc" onChange={handleChangeSorting}>
  <Stack direction="column" spacing={2}>
    <Radio value="asc" colorScheme="teal">
      Low to High
    </Radio>
    <Radio value="desc" colorScheme="teal">
      High to Low
    </Radio>
  </Stack>
</RadioGroup>
          <FormControl mt={4}>
            <FormLabel>Year Of Experience</FormLabel>
            <Slider
              aria-label="experience-slider"
              defaultValue={5}
              min={1}
              max={10}
              step={1}
              onChange={handleExperienceChange}
            >
              <SliderTrack bg="gray.100">
                <SliderFilledTrack bg="teal.500" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="teal.500" as="span">
                  {experienceValue === 10 ? "10+" : experienceValue}
                </Box>
              </SliderThumb>
            </Slider>
          </FormControl>
          <Flex justifyContent="space-between" mt={4}>
            {[0, 2, 4, 6, 8, 10].map((value) => (
              <Box as="span" key={value}>
                {value}
              </Box>
            ))}
          </Flex>
          <Button _hover={{bgColor:"#0073CC"}} bgColor={"#0073CC"} colorScheme="teal" mt={4}>
            Clear All
          </Button>
        </Flex>
      </Box>
      <Box>
        <Box>
          <Button
            display={["block", "block", "block", "none"]}
            justifyContent="start"
            variant="ghost"
            onClick={onOpen}
            color={"white"}
            p={4}
            leftIcon={<HamburgerIcon />}
            bgColor={"#0073CC"}
            textAlign={"center"}
          >
            Filter
          </Button>
        </Box>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Filters</DrawerHeader>
            <DrawerBody>
            <Flex flexDirection="column">
          <Checkbox colorScheme="teal" mb={2}>
            As per my{" "}
            <Box as="span" color="teal.500">
              preferences
            </Box>
          </Checkbox>
          <FormControl>
            <FormLabel>Job Title</FormLabel>
            <Input type="text"  placeholder="title" 
              value={title}
              onChange={handleTitleChange}
              
            />
            <Button color={"white"} _hover={{bgColor:"#0073CC"}} bgColor={"#0073CC"} m={2} onClick={handleSubmit}>Submit</Button>
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Location</FormLabel>
            <Input type="text"
             value={comapnyname}
             onChange={handleTitleChange1}
            />
            <Button color={"white"} _hover={{bgColor:"#0073CC"}} bgColor={"#0073CC"} m={2} onClick={handleSubmit1}>Submit</Button>

          </FormControl>
          <Checkbox colorScheme="teal" mt={2}>
            Work From Home
          </Checkbox>
          <Checkbox colorScheme="teal">Part Time</Checkbox>
          <Checkbox colorScheme="teal">Include All Internship</Checkbox>
          <FormControl mt={4}>
            <FormLabel>Year Of Experience</FormLabel>
            <Slider
              aria-label="experience-slider"
              defaultValue={5}
              min={1}
              max={10}
              step={1}
              onChange={handleExperienceChange}
            >
              <SliderTrack bg="gray.100">
                <SliderFilledTrack bg="teal.500" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="#0073CC" as="span">
                  {experienceValue === 10 ? "10+" : experienceValue}
                </Box>
              </SliderThumb>
            </Slider>
          </FormControl>
          <Flex justifyContent="space-between" mt={4}>
            {[0, 2, 4, 6, 8, 10].map((value) => (
              <Box as="span" key={value}>
                {value}
              </Box>
            ))}
          </Flex>
          <Button _hover={{bgColor:"#0073CC"}} bgColor={"#0073CC"} colorScheme="teal" mt={4}>
            Clear All
          </Button>
        </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
