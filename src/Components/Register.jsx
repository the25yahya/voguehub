import React,{useState} from 'react'
import { useStateContext } from '../Contexts/ContextProvider';
import { TiDelete } from "react-icons/ti";
import axios from 'axios';

const Register = () => {
  const {register, setRegister,OpenLogin} = useStateContext();
  const CloseRegister = () =>{
    setRegister(false)
  }
  const LoginFunc = () =>{
    OpenLogin();
    setRegister(false);
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const ClearCredentials = () => {
    setEmail("");
    setUsername("");
    setPassword("");
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const apiCallSignUp = () => {
    axios.post("http://192.168.8.124:3001/signup", {
      username: username,
      email: email,
      password: password
    })
    .then(response => {
      console.log(response.data);
      CloseRegister(); // Logging the response data
    })
    .catch(error => {
      console.error("ERROR:", error); // Logging the error
    });
    ClearCredentials(); // clear input fields after failed register attempt
  };
  
  return (
    <div className={`absolute top-100 w-full justify-center items z-50 shadow-5xl ${register ? 'flex appear-from-top' : 'hidden'}`}>
      <div className='flex flex-col text-center items-center absolute bg-white w-fit p-5 pb-12 pt-8'>
      <div onClick={CloseRegister} className='absolute top-2 right-2 text-2xl cursor-pointer'><TiDelete /></div>
      <h2 className='mb-5 text-2xl font-semibold'>REGISTER</h2>
      <input className='w-200 border border-black text-black text-sm mb-2 p-2 py-3' 
          placeholder='Choose your username'               
          type="text" 
          id="username" 
          value={username} 
          onChange={handleUsernameChange}  /> 
     <input className='border border-black text-black mb-2 p-2' 
          placeholder='Email/User'               
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange}  />
      <input className='border border-black text-black mb-2 p-2'
             placeholder='Password'
             type="password" 
             id="password" 
             value={password} 
             onChange={handlePasswordChange}  />
      <button onClick={apiCallSignUp} className='bg-black px-6 py-2 text-sm text-white mt-2 w-200'>REGISTER</button>
      <p onClick={LoginFunc} className='w-full mt-2 text-sm font-semibold cursor-pointer underline'>Already Has An Account</p>
     </div>
    </div>
  )
}

export default Register