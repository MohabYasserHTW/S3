import React from 'react'

import Main from '../Start/Main'
export default function Profile({otherProfile,posts,setPosts,userName}) {
  return (
    <div className='profile'>
      <div className='profile__header'>
        <h1>{otherProfile.name} {otherProfile.id}</h1>
      </div>
      <div>
        <Main posts={posts} setPosts={setPosts} userName={userName} otherProfile={otherProfile}/>
      </div>
    </div>
  )
}
