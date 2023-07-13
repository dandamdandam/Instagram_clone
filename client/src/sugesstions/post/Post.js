import React from 'react'
import './Post.css' 

import { Avatar } from '@mui/material'
import { MoreHoriz, FavoriteBorder, ChatBubbleOutlineRounded, Telegram, BookmarkAddTwoTone } from '@mui/icons-material'
// import { get_random_profiles } from '../../javascripts/get_random_profiles.js'

function Post(props) {
  return ( 
    <div className='post'>
      <div className='post__header'>
        <div className='post__headerLeft'>
          <Avatar className='post__avatar' alt={props.authorName} src={props.authorImage} />
          {props.authorName} • <span>{props.timestamp}</span>
        </div>
        <MoreHoriz className='post__headerRightButton' />
      </div>
      <div className='post__body'>
        <img src={props.postImage} alt='' />
      </div>
      <div className='post__footer'>
        <div className='post__footerLeft'>
          <FavoriteBorder className='postIcon' />
          <ChatBubbleOutlineRounded className='postIcon' />
          <Telegram className='postIcon' />
        </div>
        <div className='post__footerCenter'>
          {/* to-do 이미지 수에 따라 동적으로 렌더링 •••••• 넘기는 기능 */}
        </div>
        <div className='post__footerRight'>
          <BookmarkAddTwoTone className='postIcon' />
        </div>
      </div>
      <div className='post__comment'>
        {props.likes} likes<br/>
        {props.comment}
      </div>
    </div>
  )
}

export default Post