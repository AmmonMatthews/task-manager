import React, { useState } from "react";
import { connect } from "react-redux";
import { getRegistered } from "../actions/index.js";
// import loginImg from "";

const initialState = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: ""

}


 function Register(props) {

  const [state, setState] = useState(initialState)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
   const handelSubmit = (e) => {
     e.preventDefault()
     props.getRegistered(state)
     setState(initialState)
     props.history.push("/login")
     

  }
  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">{/* <img src={loginImg}/> */}</div>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="first_name"
            name="first_name"
            placeholder="first_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="last_name"
            name="last_name"
            placeholder="last_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="footer">
        <button onClick={handelSubmit} type="button" className="btn">
          Register
        </button>
      </div>
    </div>
  );
 }

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {getRegistered})(Register);