import React from 'react'
import {useState} from "react"

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import api from "../../api/users";
export default function RegisterForm({userName,password,setUserName,setpassword,handleRegister,users}) {
const nav=useNavigate()
const[name,setName]=useState("")
  return (
    <div>
    <form className='Login__Form' onSubmit={(e)=>{
    e.preventDefault()
    e.preventDefault()
      if(handleRegister(name)===true)
      {
        api.post("/users",
        {
          "id":users.length+1,
          "userName": userName,
          "password": password,
          "Name": name
        })
        setUserName("")
        setpassword("")
        nav("/")
        alert("Ur Account has been registered")
      }
      else if(handleRegister()===false){alert("UserName already exist")}
      
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
        <input 
        type={"text"}
        placeholder={"Your Name "}
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />
        <button 
        type='submit'
        >
        Register    
        </button>
    </div>
    <div className='Form__Img'>
        <Link 
            to={"/"}
        >
            Login
        </Link>
    </div>
    </form>
    </div>
  )
}
