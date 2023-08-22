import './App.css';
import Allroutes from './AllRoutes/Allroutes';
import { Box, Center, Divider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Footer1 from './Components/Footer1';

function App() {
  return (
    <Box className="App">
      <Navbar/>
         <Box marginTop={"50px"}>
         <Allroutes/>
         </Box>
         <Box  ml={"50px"}>
         <Footer/>
        
         <Footer1/>

         </Box>
    </Box>
  );
}

export default App;
