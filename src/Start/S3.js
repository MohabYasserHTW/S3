import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Header from "../Components/Header"
import HomePage from '../Components/HomePage'
import Profile from '../Components/Profile'
import api from "../api/users"

export default function S3({users,id,userName,name}) {
const nav=useNavigate()
  const [contacts,setContacts]=useState(
    users
  )
  const [posts,setPosts]=useState([])
  const [otherProfile,setOtherProfile]=useState({})

  useEffect(() => {
    const fetchPosts= async ()=>
    {
        
      try{
        const response =await api.get("/posts")
        setPosts(response.data)
      }catch(err){
        
      }
    }
    fetchPosts()
  }, [])
  const [isFriendsAwake,setIsFriendsAwake]=useState(false)
  return (
    <div>
        {userName?(<>
        <Header 
            id={id}
            name={name}
            setOtherProfile={setOtherProfile}
            contacts={contacts} 
            setContacts={setContacts}
            isFriendsAwake={isFriendsAwake}
            userName={name}
            setIsFriendsAwake={setIsFriendsAwake}
        />
        <Routes>
            <Route path='/' 
                element=
                {
                    <HomePage
                        id={id}
                        posts={posts}
                        setPosts={setPosts}
                        contacts={contacts} 
                        setContacts={setContacts}
                        isFriendsAwake={isFriendsAwake}
                        userName={name}
                    />
                } 
            />
            <Route path="profile"
                element=
                {
                    <Profile 
                        id={id}
                        otherProfile={otherProfile}
                        posts={posts}
                        setPosts={setPosts}
                        userName={userName}
                    />
                }
            /> 
            <Route path='*' element={<h1>missing</h1>}/>
        </Routes>
        </>):(nav("/"))}
    </div>
  )
}
