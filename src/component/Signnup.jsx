import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../helper/axioinstance';

const Signup = () => {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      name,
      email,
      password,
      mobile
    };

    try {
      await axiosInstance.post("/posts", payload);
      toast.success("Account Created");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating account");
    }
  };

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Signup Details:</legend><br /><br />
          Name : &nbsp;&nbsp;
          <input type="text" onChange={(e) => { setName(e.target.value) }} />
          <br /><br />
          Email : &nbsp;&nbsp;
          <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
          <br /><br />
          Password : &nbsp;&nbsp;
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
          <br /><br />
          Mobile : &nbsp;&nbsp;
          <input type="text" onChange={(e) => { setMobile(e.target.value) }} />
          <br /><br />
          <div className="btn-block">
          <button type="submit">Signup</button>
          <button onClick={() => navigate("/login")}>Login</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
