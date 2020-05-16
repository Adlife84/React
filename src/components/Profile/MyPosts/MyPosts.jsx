import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi! Hi are you?', likes: 15},
        {id: 2, message: 'Is anybody here?', likes: 25}
    ]

    let postsElements = postData.map( p => <Post message={p.message} likes={p.likes}/>);

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;