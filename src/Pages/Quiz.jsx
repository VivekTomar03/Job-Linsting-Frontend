import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { quiz } from './db';



const Quiz = ({ setquiz }) => {
  const [questionsToShow, setQuestionsToShow] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const toast = useToast();

  useEffect(() => {
    let questions = quiz()
    // Shuffle the questions array and select the first two questions
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    setQuestionsToShow(shuffledQuestions.slice(0, 2));
  }, []);

  const handleSubmit = () => {
    if (selectedOption === questionsToShow[currentQuestionIndex].answer) {
      setIsCorrect(true);
      if (currentQuestionIndex === 1) {
        toast({
          title: 'Congratulations!',
          description: 'You win a coupon! Coupon code: qwert5431plmxdft789',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      }
    } else {
      setIsCorrect(false);
      toast({
        title: 'Better Luck Next Time',
        description: 'Try again to win a coupon!',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      setquiz(false);
    }
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption('');
    setIsCorrect(false);
    setIsSubmitted(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = questionsToShow[currentQuestionIndex];

  return (
    <VStack p={4} spacing={4} align="stretch">
      <Text fontSize="xl" fontWeight="bold">
        Quiz
      </Text>
      {currentQuestion && (
        <>
          <Text>{currentQuestion.question}</Text>
          <FormControl>
            <RadioGroup onChange={(e) => setSelectedOption(e)}>
              <Stack>
                {currentQuestion.options.map((option) => (
                  <Radio
                    key={option}
                    value={option}
                    isChecked={selectedOption === option}
                    isDisabled={isSubmitted}
                  >
                    {option}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </FormControl>
          {!isSubmitted && (
            <Button colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
          )}
          {isSubmitted && (
            <>
              <Text>
                {isCorrect ? 'Congratulations! You answered correctly.' : 'Oops! Your answer is incorrect.'}
              </Text>
              <Button colorScheme="teal" onClick={handleNextQuestion} mt={2}>
                Next Question
              </Button>
            </>
          )}
        </>
      )}
      {currentQuestionIndex === 2 && (
        <Text fontSize="xl" fontWeight="bold">
          Quiz Completed!
          You win a coupon! Coupon code: qwert5431plmxdft789
        </Text>
      )}
    </VStack>
  );
};

export default Quiz;
