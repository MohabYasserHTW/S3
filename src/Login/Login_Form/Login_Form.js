import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function LoginForm({userName,password,setUserName,setpassword,handleLogin}) {
  const nav=useNavigate()
  return (
    <form className='Login__Form' onSubmit={(e)=>{
      
      e.preventDefault()
      if(handleLogin())
      {
        nav("s3")
      }
      else{alert("Wrong")}
      }}>
      <div className='Form__Inputs'>
        <input 
          type={"text"}
          placeholder={"UserName"}
          value={userName}
          onChange={(e)=>{setUserName(e.target.value)}}
        />
        <input 
          type={"password"}
          placeholder={"password"}
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
        />
        <button 
          type='submit'
        >
          Login
        </button>
      </div>
      <div className='Form__Img'>
        <Link 
          to={"register"}
        >
          register
        </Link>
      </div>
    </form>
  )
}
