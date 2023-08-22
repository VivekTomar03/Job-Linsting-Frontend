import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import PostJob from '../Pages/PostJob';
import PrivateRoute from '../Components/PrivateRoute';
import JobPage from '../Pages/JobPage';
import SingalJob from '../Pages/SingalJob';
import UserDashboard from '../Pages/UserDashboard';
import ChatBot from '../Pages/ChatBot';

const Allroutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Homepage/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/postjob' element={<PrivateRoute><PostJob/></PrivateRoute>}></Route>
       <Route path='/job' element={<JobPage/>}></Route>
       <Route path='/job/:id' element={<SingalJob/>}></Route>
       <Route path='/userdashboard' element={<UserDashboard/>}></Route>
       <Route path='/chatbot' element={<ChatBot/>}></Route>
    </Routes>
  );
}

export default Allroutes;
