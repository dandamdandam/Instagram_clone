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

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <div>
      <Post />
      {post.photo}
      <Post />
      <Post />
    </div>
  )
}

export default PostArr