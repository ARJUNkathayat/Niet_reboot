import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { auth } from '../Utils/fireBase';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid:uid, email:email, displayName:displayName,photoURL:photoURL }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    })
    return ()=> unsubscribe()
  }, []);

  return (
    <Routes>  
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
}

export default Body;
