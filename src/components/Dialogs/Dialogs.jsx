import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <img
            src='https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzkxOTI1MjYy/scarlett-johansson-13671719-1-402.jpg'/>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Answer = (props) => {
    return <div className={s.answer}>{props.answer}</div>
}

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(name => <DialogItem name={name.name} id={name.id}/>);

    let messages = props.state.messages.map(message => <Message message={message.message} id={message.id}/>);

    let answers = props.state.answers.map(answer => <Answer answer={answer.answer} id={answer.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messages}


            </div>
            <div className={s.answers}>

                {answers}

                <div className={s.addPost}>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addPost}>Add Post</button>
                </div>

            </div>


        </div>
    )
}

export default Dialogs;