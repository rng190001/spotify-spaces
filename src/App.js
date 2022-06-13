import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  //Runs code based on a given condition
  useEffect(() =>{
    const hash = getTokenFromUrl();
    //hides the access token from public
    window.location.hash = "";

    const _token = hash.access_token;

    //check to see if there is a token
    if (_token){
      setToken(_token)
    }
    console.log("I HAVE A TOKEN!!!!", token);
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <div className = "appLogin">
            <Login/>
          </div>
        )
      }
    </div>
  );
}

export default App;
