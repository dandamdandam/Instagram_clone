import React from 'react'
import { useState, useEffect } from 'react'
import './Suggesstions.css'
import Post from './post/Post'


function PostArr() {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch("/jsons/Suggesstions.json")
    .then(res => res.json())
    .then(data => setPost(data));
  }, []);

  // useEffect(() => {
  //   console.log(post);
  // }, [post]);

  return (
    <div>
      {post.map((item) => (
        <Post
          key={item.id}
          authorName={item.author.name}
          authorImage={item.author.image}
          postImage={item.postImage}
          timestamp={item.timestamp}
          likes={item.likes}
          comment={item.comment}
        />
      ))}
    </div>
  )
}

export default PostArr