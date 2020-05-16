import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(name => <DialogItem name={name.name} id={name.id}/>);

    let messages = props.messages.map(message => <Message message={message.message} id={message.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className="messages">

                {messages}

            </div>
        </div>
    )
}

export default Dialogs;