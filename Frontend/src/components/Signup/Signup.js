/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logoImage from './../../logo copy.svg';
import './Signup.css'


function Signup() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');

  return (
    <div>
    <div className="signupParentDiv">
    <img width='200px' height='200px' src={logoImage} alt="Logo"/>
      <form >
        <label htmlFor="fname">Username</label>
        <br />
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e)=> setname(e.target.value)}
          id="fname"
          name="name"
          defaultValue="John"
        />
        <br />
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e)=> setemail(e.target.value)}
          id="fname"
          name="email"
          defaultValue="John"
        />
        <br />
        <label htmlFor="lname">Phone</label>
        <br />
        <input
          className="input"
          type="number"
          value={phone}
          onChange={(e)=> setphone(e.target.value)}
          id="lname"
          name="phone"
          defaultValue="Doe"
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e)=> setpassword(e.target.value)}
          id="lname"
          name="password"
          defaultValue="Doe"
        />
        <br/>
        <br/>
        <button>Signup</button>
      </form>
      <a style={{color: "#fff"}}>Login</a>
    </div>
  </div>
  )
}

export default Signup;