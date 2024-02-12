import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../helper/axioinstance';

const Login = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiosInstance.get("/posts");

      if (data.email === email && data.password === password) {
        toast.success("Login Success");
        navigate("/cart");
      } else {
        toast.error('Invalid Credentials');
        navigate("/signup");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login Details:</legend>
          <br /><br />
          Email : &nbsp;&nbsp;
          <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
          <br /><br />
          Password : &nbsp;&nbsp;
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
          <br /><br />
          <div className="btn-block">
          <button type="submit">Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
