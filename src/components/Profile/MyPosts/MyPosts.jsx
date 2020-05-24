import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {addPostActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (event) => {
        let text = event.target.value; //take value from textarea
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} />
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;