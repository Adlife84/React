
import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (

    <div className={s.item}>
      <img src='https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg'></img>
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>

  )
}

export default Post;