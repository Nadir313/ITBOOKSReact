import React,{useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import validator from 'validator'
// import bcrypt from 'bcryptjs' ;

import { FaHourglassStart } from "react-icons/fa" ;
import { FiUserPlus } from "react-icons/fi" ;


function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('')
  const [data, setData] = useState({
    fullName:"",
    Profession:"",
    Email:"",
    Image:"",
    Password:""
  }) ;

  const changeHandler = (e)=>{
    setData({
      ...data, [e.target.name] : e.target.value
    })
  }

  const submitHandler = (e)=>{
    e.preventDefault() ;
    if(validator.isStrongPassword(data.Password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    }) && validator.isEmail(data.Email)
   
    ) {
      setErrorMessage('Safe Password ')
      setEmailError('Valid Email ')
    } else {
      setErrorMessage('Password must contains :(length >8, lowercase, uppercase, sybmbole, nubmer ) ')
      setEmailError('Enter valid Email!')
      return
    }
        const newdata = {
      fullName:data.fullName,
      Profession:data.Profession,
      Email:data.Email,
      Image:data.Image,
      Password:data.Password 
    }
    axios.post('http://localhost:80/ITbooks/api.php',newdata).then((response)=>{
      console.log(response.data);
  }).catch(e=>{
      console.log(e) ;
  });
    window.location.href = "http://localhost:3000/SignIn" ;
  }
  return (
    <>
    <div className='p-3' id='formstyle'>
    
    <div id='signupform' className='container w-100 '>
          <form className='w-75' onSubmit={submitHandler}>
         <h3>  <FiUserPlus  className='m-2'/> Sign Up</h3>
        <div className="mb-3">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            name="fullName"
            onChange={changeHandler}
            value={data.fullName}
          />
        </div>

        <div className="mb-3">
          <label>Profession</label>
          <input
          type="text" 
          className="form-control"
          placeholder="Profession" 
          name='Profession'  
          onChange={changeHandler}
          value={data.Profession} />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            name='Email'
            onChange={changeHandler}
            value={data.Email}
          />
          <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
        </div>

        <div className="mb-3">
          <label>Image</label>
          <input 
          type="file" 
          className="form-control" 
          placeholder="image" 
          name='Image'  
          onChange={changeHandler}
          value={data.Image}/>
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='Password'
            onChange={changeHandler}
            value={data.Password}
          />
          {errorMessage === '' ? null :
          <span style={{
          fontWeight: 'bold',
          color: 'red',
         }}>{errorMessage}</span>}

            <button type="submit" className="btn btn-success">Sign Up </button>
        </div>
          Already registered <Link to="/SignIn"> Sign in?</Link>
      </form>
      </div>

      <div className='formimgsignup'>
         <h3> < FaHourglassStart/> Start your journey with us <br /> today </h3>
      </div>
      </div>
    </>
  )
}

export default SignUp ;