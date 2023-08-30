import React, { useState } from 'react'
import { useEffect } from "react";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
  } from "react-router-dom";
import Login from '../Login/Login_Form/Login';
import Register from '../Login/Register_Form/Register';
import S3 from './S3';
import api from "../api/users";

export default function Start() {
  
  const [users,setUsers]=useState([])
  const [userName,setUserName]=useState("")
  const [userId,setuserId]=useState("")
  const [password,setpassword]=useState("")
  const [name,setName]=useState("gohst")

  useEffect(() => {
    const fetchUsers = async ()=>
    {
      try{
        const response =await api.get("/users")
        setUsers(response.data)
      }catch(err){
        
      }
    }
    fetchUsers()
  }, [])
  const handleRegister=(nameIn)=>
  {
    const existUser=users.filter(
      (user)=>{
        
        return userName===user.userName
      }
    )
    
      if(existUser.length)
      {
        return false
      }
      else{
        if(password.length)
        {
          setUsers(prev=>[...prev,{
          "id": users.length+1,
          "userName": userName,
          "password": password,
          "Name": nameIn
        }])
          return true
        }
        else
        {
          alert("Have u ever seen someone creating Account without password ?!")
          return "pw"
        }
      }
  
  }
  const handleLogin=()=>
  {
    const existUser=users.filter(
      (user)=>{
        return userName===user.userName
      }
    )
    
    if(!existUser.length)
    {
      return false
    }
    if(password===existUser[0].password)
    {
      setName(existUser[0].Name)
      setuserId(existUser[0].id)
      return true
    }
    else 
    {
      return false
    }
  }
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                  <Login
                    userName={userName} 
                    password={password}
                    setUserName={setUserName}
                    setpassword={setpassword}
                    handleLogin={handleLogin}
                  />} 
                />
                <Route path="register" element={
                  <Register
                    users={users}
                    userName={userName}
                    password={password}
                    setUserName={setUserName}
                    setpassword={setpassword}
                    handleRegister={handleRegister}
                  />} 
                />
                <Route path='s3/*' element={<S3 
                users={users}
                id={userId}
                userName={userName}
                name={name}
                />}  />
                <Route path="*" element={<h1 style={{color:"white"}}>missing</h1>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
