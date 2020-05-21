import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
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