import React from 'react'
import './Post.css' 

import { Avatar } from '@mui/material'
import { MoreHoriz, FavoriteBorder, ChatBubbleOutlineRounded, Telegram, BookmarkAddTwoTone } from '@mui/icons-material'

function Post() {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__headerLeft'>
          <Avatar className='post__avatar' alt='username' src='' />
          foo • <span>a year ago</span>
          {/*https://open.spotify.com/track/6fIoibjLOuU8I3NJbF1UOi?si=8c6d7b883a294932*/}
        </div>
        <MoreHoriz className='post__headerRightButton' />
      </div>
      <div className='post__body'>
        {/* to-do 이미지 링크 받기*/}
        <img src='https://source.unsplash.com/category/insta' alt='' />
      </div>
      <div className='post__footer'>
        <div className='post__footerLeft'>
          <FavoriteBorder className='postIcon' />
          <ChatBubbleOutlineRounded className='postIcon' />
          <Telegram className='postIcon' />
        </div>
        <div className='post__footerCenter'>
          {/* to-do 이미지 수에 따라 동적으로 렌더링*/}
        </div>
        <div className='post__footerRight'>
          <BookmarkAddTwoTone className='postIcon' />
        </div>
      </div>
      <div className='post__comment'>
        {/* to-do 댓글 렌더링*/}
        28 likes<br/>
        comments...
      </div>
    </div>
  )
}

export default Post