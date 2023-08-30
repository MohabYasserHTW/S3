import React from 'react'
import Main from '../Start/Main'
export default function HomePage({id,posts,setPosts,userName}) {
  return (
    <div>
      <div className='home__main'>
          <Main id={id} posts={posts} setPosts={setPosts} userName={userName}/>
      </div>
    </div>
  )
}
