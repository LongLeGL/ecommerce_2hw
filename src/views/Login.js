import './Login.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, seterrMsg] = useState("");

  let states = sessionStorage.getItem('states');
  states = JSON.parse(states)

  function handleSubmit(e) {
    e.preventDefault();
    seterrMsg('');
    if (!email) seterrMsg("Username or Email required !");
    else if (!password) seterrMsg("Password required !");
    else {
      if (email=='admin' && password=='admin'){
        states['loggedIn'] = true;
        sessionStorage.setItem('states', JSON.stringify(states));
        window.location.href = "/2HandWarehouse/Home";
      }
      else seterrMsg("Wrong username or password !");
    }
  }

  return (
    <div className='LoginPage'>
      <div id='loginModal_Logo'>
        <div id='logoRedCircle'>
          <div id='logoNumber'>2</div>
        </div>
        <div id='logoText'>hand</div>
      </div>
      
      <div id='loginModal_title'>
        <h2>Login to your account</h2>
      </div>

      <form className='LoginPageForm'>
        <div className='InputContainer'>
          <div className='accessFormLabel'>Username or Email</div>
          <input type="text" name="name" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='InputContainer'>
          <div className='accessFormLabel'>Password</div>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='InputContainer'>
          <button id='loginSubmitBtn' type='submit' onClick={handleSubmit}> Login </button>
        </div>
      </form>
      <div className={!errMsg ? 'LoginErrMsg.hidden' : 'LoginErrMsg'}>{errMsg}</div>
    </div>
  );
}

export default Login;
