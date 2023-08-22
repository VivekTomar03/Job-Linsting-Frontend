export function quiz(){
    var questions = [
        {
          question: 'Which of the following methods is used to add a new element to the end of an array in JavaScript?',
          options: ['A) array.append()', 'B) array.push()', 'C) array.add()', 'D) array.insert()'],
          answer: 'B) array.push()',
        },
        {
          question: 'Which built-in function can be used to convert a JavaScript object into a JSON string?',
          options: ['A) JSON.parse()', 'B) JSON.stringify()', 'C) JSON.convert()', 'D) object.toJSON()'],
          answer: 'B) JSON.stringify()',
        },
        {
          question: 'What is JSX?',
          options: [
            'A) A syntax extension for JavaScript',
            'B) A data structure in React',
            'C) A way to declare variables in JavaScript',
            'D) A form of SQL query language',
          ],
          answer: 'A) A syntax extension for JavaScript',
        },
        {
          question: 'What is the purpose of React Router?',
          options: [
            'A) To manage the application state',
            'B) To create user interfaces in React',
            'C) To manage navigation and routing in React applications',
            'D) To handle API requests in React',
          ],
          answer: 'C) To manage navigation and routing in React applications',
        },
        {
          question: 'What is the virtual DOM in React?',
          options: [
            'A) A concept used to optimize rendering performance',
            'B) A way to create virtual components in React',
            'C) An alternative to HTML in React applications',
            'D) A built-in component in React for creating forms',
          ],
          answer: 'A) A concept used to optimize rendering performance',
        },
        {
          question: 'What is the purpose of the useEffect hook in React?',
          options: [
            'A) To manage state in functional components',
            'B) To handle asynchronous operations in React',
            'C) To create new components in React',
            'D) To update the DOM directly in React',
          ],
          answer: 'B) To handle asynchronous operations in React',
        },
        {
          question: 'What is the key prop used for in React when rendering lists?',
          options: [
            'A) It specifies the position of the element in the list',
            'B) It helps React identify which items have changed, been added, or been removed',
            'C) It sets the style of the element in the list',
            'D) It determines the order of rendering in the list',
          ],
          answer: 'B) It helps React identify which items have changed, been added, or been removed',
        },
        {
          question: 'What is the purpose of the useState hook in React?',
          options: [
            'A) To manage state in functional components',
            'B) To handle asynchronous operations in React',
            'C) To create new components in React',
            'D) To update the DOM directly in React',
          ],
          answer: 'A) To manage state in functional components',
        },
        {
          question: 'What is a prop in React?',
          options: [
            'A) A reserved keyword in React',
            'B) A way to declare variables in functional components',
            'C) A mechanism for passing data from parent to child components',
            'D) A built-in component in React for creating forms',
          ],
          answer: 'C) A mechanism for passing data from parent to child components',
        },
        {
          question: 'Which lifecycle method in React is called after a component has been rendered?',
          options: [
            'A) componentDidMount',
            'B) componentDidUpdate',
            'C) componentWillUnmount',
            'D) componentWillMount',
          ],
          answer: 'A) componentDidMount',
        },
        
      ];
      return questions
}