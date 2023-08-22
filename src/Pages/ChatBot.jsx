import { Box, Flex, Input, Button, Text, VStack, Divider ,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { AiFillRobot } from 'react-icons/ai';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import App from "../App.css"
import Quiz from './Quiz';
const ChatBot = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [quiz, setquiz] = useState(false)
  useEffect(() => {
    const storedHistory = localStorage.getItem('chatHistory');
    if (storedHistory) {
      setChatHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const handleSubmit = async () => {
    if (input.trim() === '') {
      return;
    }

    setChat([...chat, { text: input, isUser: true }]);
    setChatHistory([...chatHistory, { text: input, isUser: true }]);
    setInput('');

    try {
      const response = await axios.post('https://match-yor-role.onrender.com/chat', { message: input });

      setChat([...chat, { text: input, isUser: true }, { text: response.data, isUser: false }]);
      setChatHistory([...chatHistory, { text: input, isUser: true }, { text: response.data, isUser: false }]);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chat]);

  const clearHistory = () => {
    localStorage.removeItem('chatHistory');
    setChatHistory([]);
    setChat([]);
  };

  return (
    <Box   p={4} bg="gray.100" minHeight="70vh" display="flex"
    
    flexDirection={{base:"column", sm:"column",md:"row"}}
    >
     {quiz?<Quiz setquiz={setquiz}/>: <Box className='scrolling' overflowY={"scroll"} h={"500px"} flex="1" bg="white" p={4} borderRadius="md"  boxShadow="md">
        {showHistory
          ? chatHistory.map((message, index) => (
              <Flex
                key={index}
                justifyContent={message.isUser ? 'flex-end' : 'flex-start'}
                mb={2}
                alignItems="flex-end"
              >
                <Box
                  bg={message.isUser ? 'teal.400' : 'gray.300'}
                  color={message.isUser ? 'white' : 'black'}
                  p={2}
                  borderRadius="lg"
                  maxWidth="70%"
                  boxShadow="sm"
                  position="relative"
                >
                  {message.isUser && (
                    <AiFillRobot style={{ position: 'absolute', top: '-25px', left: '-30px' }} />
                  )}
                  {message.text}
                </Box>
              </Flex>
            ))
          : chat.map((message, index) => (
              <Flex
                key={index}
                justifyContent={message.isUser ? 'flex-end' : 'flex-start'}
                mb={2}
                alignItems="flex-end"
              >
                <Box
                  bg={message.isUser ? 'teal.400' : 'gray.300'}
                  color={message.isUser ? 'white' : 'black'}
                  p={2}
                  borderRadius="lg"
                  maxWidth="70%"
                  boxShadow="sm"
                  position="relative"
                >
                  {message.isUser && (
                    <AiFillRobot style={{ position: 'absolute', top: '-25px', left: '-30px' }} />
                  )}
                  {message.text}
                </Box>
              </Flex>
            ))}
      </Box>}
      {/* Input and Send Button */}
      <Box p={4}>
        <Flex alignItems="center">
            <Button ml={2} ref={btnRef} colorScheme='teal' onClick={onOpen} display={{base:"block", sm:"block", md:"none"}}>More Option</Button>
          <Input
            flex={1}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit();
              }
            }}
            variant="filled"
          />
          <Button ml={2} colorScheme="teal" onClick={handleSubmit}>
            Send
          </Button>
          
        </Flex>
        <Box bg="teal.300" p={4} display={{base:"none-", sm:"none", md:"block"}} w="240px" m={"auto"} mt={"30px"} boxShadow="md">
        <VStack align="center" spacing={3}>
          <Button colorScheme="teal" size="sm" onClick={toggleHistory}>
            {showHistory ? 'Show Chat' : 'Show History'}
          </Button>
          <Button colorScheme="teal" size="sm" onClick={clearHistory}>
            Clear History
          </Button>
          <Button onClick={() => setquiz(!quiz)} colorScheme="teal" size="sm">
             {quiz?"Back To Bot":"Play Game and Win Coupon"}
          </Button>
          {/* Add more sidebar options here */}
        </VStack>
      </Box>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
          <VStack align="center" spacing={3}>
          <Button colorScheme="teal" size="sm" onClick={toggleHistory}>
            {showHistory ? 'Show Chat' : 'Show History'}
          </Button>
          <Button colorScheme="teal" size="sm" onClick={clearHistory}>
            Clear History
          </Button>
          <Button colorScheme="teal" size="sm">
            Play Game and Win Coupon
          </Button>
          {/* Add more sidebar options here */}
        </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ChatBot;