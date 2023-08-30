import React from 'react'

export default function Post({post}) {
  return (
    <div className='post'>
        <div className='post__user'>
            <h2>{post.name} </h2>
            <h4>#{post.id}</h4>
        </div>
        <article>
            <p>{post.body}</p>
        </article>
    </div>
  )
}
