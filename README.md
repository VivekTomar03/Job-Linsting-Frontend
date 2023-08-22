import React, { useState, useEffect } from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { AiFillRobot } from 'react-icons/ai'; // Import bot icon
import axios from 'axios';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const handleSubmit = async () => {
    if (input.trim() === '') {
      return;
    }

    setChat([...chat, { text: input, isUser: true }]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:9001/chat', { message: input });

      setChat([...chat, { text: input, isUser: true }, { text: response.data, isUser: false }]);
    } catch (error) {
      console.error(error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chat]);

  return (
    <Box p={4} bg="gray.100" height={"500px"} display="flex" flexDirection="column">
      <Box
        id="chat-container"
        bg="white"
        p={4}
        borderRadius="md"
        flex="1"
        overflowY="auto"
        boxShadow="md"
      >
        {chat.map((message, index) => (
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
              position="relative" // Add position relative for animation
            >
              {message.isUser && <AiFillRobot style={{ position: 'absolute', top: '-25px', left: '-30px' }} />} {/* Bot icon */}
              {message.text}
            </Box>
          </Flex>
        ))}
      </Box>
      <Flex mt={4}>
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
    </Box>
  );
};

export default ChatBot;
