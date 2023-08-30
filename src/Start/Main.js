import React from 'react'
import CreatePost from '../Components/CreatePost'
import Post from '../Components/Post'
export default function Main({id,posts,setPosts,userName,otherProfile}) {
  //test
  return (
    <main>
        {!otherProfile&&<CreatePost id={id} posts={posts} setPosts={setPosts} userName={userName}/>}
        {
            posts.map(
                (p)=>
                  (
                    !otherProfile?(<Post key={p.id} post={p}/>)
                    :(otherProfile.id===p.userId)?(<Post key={p.id} post={p}/>)
                    :(console.log("hh"))
                  )
            )
        }
    </main>
  )
}
