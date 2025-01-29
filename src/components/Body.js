import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { auth } from '../Utils/fireBase';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <Routes>  
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
}

export default Body;
