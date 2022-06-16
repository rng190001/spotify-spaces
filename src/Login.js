import React from 'react';
import TypeAnimation from 'react-type-animation';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className = "login">
      <div className = "shape-blob2"></div>
      <div className = "shape-blob1"></div>
      <div className = "shape-blob"></div>
      <TypeAnimation 
        cursor = {true}
        sequence = {['Spotify Spaces', 3000, ' ']}
        wrapper = "h2"
        repeat ={4}
      />
      <a href ={loginUrl}>LOGIN WITH SPOTIFY</a>
      
    </div>
  );
}

export default Login;
