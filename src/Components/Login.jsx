import React,{useState} from 'react'
import { TiDelete } from "react-icons/ti";
import { useStateContext } from '../Contexts/ContextProvider';
import axios from "axios"
const Login = () => {
  const {login,CloseLogin,setRegister,token,setToken,userInfo, setUserInfo} = useStateContext();
  const RegisterFunc = () =>{
    CloseLogin();
    setRegister(true);
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ClearCredentials = () => {
    setEmail("");
    setPassword("");
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLoginToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  const apiCallLogin = () => {
    axios.post("http://localhost:3001/login", {
      email: email,
      password: password
    })
      .then(response => {
        console.log("Response:", response.data); // Log the response data
        handleLoginToken(response.data.token);
        setUserInfo(response.data.result);
        ClearCredentials();
        CloseLogin();
      })
      .catch(error => {
        console.error("Error:", error); // Log any errors that occur during the request
      });
  };
  return (
    <div className={`absolute top-100 w-full justify-center z-50 shadow-5xl ${login ? 'flex appear-from-top' : 'hidden'}`}>
      <div className='flex flex-col text-center items-start absolute bg-white w-fit p-5 pb-12 pt-8'>
      <div onClick={CloseLogin} className='absolute top-2 right-2 text-2xl cursor-pointer'><TiDelete /></div>
      <h2 className='mb-3 text-2xl font-semibold'>Log in</h2>
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
      <div className='flex items-center my-2 text-sm'>
       <div className='flex items-center'>
        <input type='chekbox' className='border border-black bg-white mr-2 w-4 h-4' />
        <p>Rememer me</p>
       </div>
       <p className='ml-4 underline'>FORGOT PASSWORD</p>
      </div>
      <button onClick={apiCallLogin} className='bg-black px-6 py-2 text-sm text-white mt-2 ml-5 w-200'>LOGIN</button>
      <p onClick={RegisterFunc} className='w-full mt-2 text-sm font-semibold cursor-pointer'>REGISTER</p>
     </div>
    </div>
  )
}

export default Login