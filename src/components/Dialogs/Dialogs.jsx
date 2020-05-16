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

    let dialogsData = [
        {id: 1, name: 'Andrei'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Elena'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Olga'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi how are you?'},
        {id: 2, message: 'How is going?'},
        {id: 3, message: 'Anydoby here?'},
        {id: 4, message: 'Goodbay forever!'}
    ]



    let dialogsElements = dialogsData.map(name => <DialogItem name={name.name} id={name.id}/>);

    let messages = messagesData.map(message => <Message message={message.message} id={message.id}/>);


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