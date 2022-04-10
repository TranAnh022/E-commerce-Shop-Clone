import React from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import {useState} from 'react'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
          navigate('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
      <img
        className='login__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
        alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value = {email} onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value = {password} onChange={e => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='login__signInButton'>Sign In</button>
        </form>

        <p>
            By continuing, you agree to Amazon_Clone's <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088'>
            Conditions of Use</a> of Use and <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496'>
            Privacy Notice</a>.
        </p>

        <button
          type='submit'
          onClick={register}
          className='login__registerButton'>Create your Amazon account</button>

      </div>

    </div>
  )
}

export default Login