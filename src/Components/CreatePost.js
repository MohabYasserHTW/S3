import React, { useState } from 'react'
import api from "../api/users"
export default function CreatePost({id,posts,setPosts,userName}) {
  const handleSubmit = ()=>{
    const idd=posts.length+1
    setPosts([{body:newPost,id:idd,name:userName,userId:id},...posts])
    api.post("/posts",{body:newPost,id:idd,name:userName,userId:id})
    setNewPost("")
  }
  const [newPost,setNewPost]=useState("")
  return (
    <div className='createPost'>
        <form onSubmit={(e)=>{
          e.preventDefault()
          } }>
        <textarea  
          placeholder={"What you think about ?!"}
          value={newPost}
          onChange={(e)=>setNewPost(e.target.value)}
        />
            <button 
              type='submit'
              onClick={handleSubmit}
            >Post</button>
        </form>
    </div>
  )
}
