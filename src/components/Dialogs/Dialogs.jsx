import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {addMessageActionCreator} from "../../redux/state";
import {updateNewMessageTextActionCreator} from "../../redux/state";


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


    let dialogsElements = props.dialogsPage.dialogs.map(name => <DialogItem name={name.name} id={name.id}/>);

    let messages = props.dialogsPage.messages.map(message => <Message message={message.message} id={message.id}/>);

    let answers = props.dialogsPage.answers.map(answer => <Answer answer={answer.answer} id={answer.id}/>);

    let newPostElement = React.createRef();

    console.log(props.dialogsPage);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }


    let onMessageChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
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

                    <textarea onChange={onMessageChange} ref={newPostElement} value={props.dialogsPage.newMessageText}/>

                    <button onClick={addMessage}>Add Message</button>

                </div>

            </div>


        </div>
    )
}

export default Dialogs;