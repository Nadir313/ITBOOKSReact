import axios from 'axios';
import React,{useEffect , useState} from 'react'
import { Link, navigate} from "react-router-dom" ;
import SignUp from './SignUp';
import validator from 'validator';

function SignIn() {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('')
  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const [show, setShow] = useState(false) ;
  const showHandler =()=>{
    setShow(!show) ;
  }

  const userHandler = (e)=>{
    setUser({
      ...user, [e.target.name] : e.target.value
    })
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    
    if(validator.isStrongPassword(user.password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    }) && validator.isEmail(user.email)
   
    ) {
      setErrorMessage('Password is correct')
      setEmailError('Email is valid ')
    } else {
      setErrorMessage('Incorrect Password')
      setEmailError('Please Enter valid Email!')
      return ;
    }

    const User = {
      email:user.email,
      password:user.password
    }

      const url = "http://localhost:80/ITbooks/Signin.php" ;
      axios.post(url,User)
      .then(res =>{
          console.log(res.data)
          let userName = res.data.fullName ;
          let useremail = res.data.Email ;
          let userProfile = res.data.Image ;
          let userId = res.data.id ;
          if(user.email === useremail){
            console.log(res.data)
            localStorage.setItem('userName',userName )
            localStorage.setItem('userProfile',userProfile);
            localStorage.setItem('userId', userId)
          }
        })
        .catch(err => console.log(err))
        // window.location.href = "http://localhost:3000/Home"
  }
  

  return (
    <>  
    <div id='signin'>
        <form id='signinform' onSubmit={submitHandler}>
        <h3 style={{textAlign:"center", color:"darkslategray"}}>Sign In</h3>
        <div className="mb-3 w-100">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={userHandler}
            value={user.email}
          />
           <span style={{
             fontSize :'large',
          fontWeight: 'bold',
          color: 'tomato',
        }}>{emailError}</span>
        </div>
        <div className="mb-3 w-100">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            onChange={userHandler}
            value={user.password}
          />
            {errorMessage === '' ? null :
          <span style={{
            fontSize:'large',
          fontWeight: 'bold',
          color: 'Tomato',
         }}>{errorMessage}</span>}
        </div>
        <div className="mb-3">
        </div>
          <button type="submit" className="btn btn-primary"> Submit </button>
          <a  href='#' onClick={showHandler}>Create Account?</a>
      </form>
    </div>
    {show && <SignUp /> }
    </>
    
  )
}

export default SignIn