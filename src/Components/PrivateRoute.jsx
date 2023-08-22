import React from 'react';
import { useSelector }from "react-redux"
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const store = useSelector((state) => state.userAuthReducer)
  return store.typeofuser=="company"?children:<Navigate to={"/login"}/>
}

export default PrivateRoute;
