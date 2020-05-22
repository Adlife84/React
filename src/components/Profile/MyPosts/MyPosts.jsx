import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator} from "../../../redux/state";
import {addPostActionCreator} from "../../../redux/state";



const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newMessageText} />
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;