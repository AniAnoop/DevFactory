import './App.css';
import React,{useState} from 'react';
import {GoogleLogin,GoogleLogout} from 'react-google-login';

function App() {
  const onLoginSuccess=(data)=>{
    console.log('Login Success==>',data.profileObj);
  }
  const onLoginFailure=(res)=>{
    console.log('Login Failed==>',res);
  }
 
  return (
    <div className="App">
      <GoogleLogin
    clientId="752522948113-80a0nepgi9lao5rsg8ovjmerlig6spkb.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={onLoginSuccess}
    onFailure={onLoginFailure}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;
