import React from 'react';
import s from './Friends.module.css'
import {NavLink} from 'react-router-dom';


const FriendsItem = (props) => {
    return <div className={s.item + ' ' + s.active}>
        <img src={props.src}/>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Friends = (props) => {


    let friendsElements = props.state.map(friend => <FriendsItem name={friend.name} id={friend.id} src={friend.src}/>);


    return (
        <div className={s.friendItem}>

            {friendsElements}

        </div>
    )
}

export default Friends;