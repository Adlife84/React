import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>);

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