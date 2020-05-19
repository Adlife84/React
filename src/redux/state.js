/**
 * Created by andrejkomolov on 5/17/20.
 */
import {rerenderEntireTree} from './../render';

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'You bro', likes: 10},
            {id: 2, message: 'Hi! Hi are you?', likes: 15},
            {id: 3, message: 'Awesome! Are you?', likes: 8},
            {id: 4, message: 'Is anybody here?', likes: 25}
        ],
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrei'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Elena'},
            {id: 5, name: 'Valera'},
            {id: 6, name: 'Olga'}
        ],
        messages: [
            {id: 1, message: 'Hi how are you?'},
            {id: 2, message: 'How is going?'},
            {id: 3, message: 'Anydoby here?'},
            {id: 4, message: 'Goodbay forever!'}
        ],
        answers: [
            {id: 1, answer: 'I am fine! Are you?'},
            {id: 2, answer: 'It is going good'}
        ]
    },

    sidebar: {
        friends: [
            {id: 1, name: 'Vania', src: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzkxOTI1MjYy/scarlett-johansson-13671719-1-402.jpg'},
            {id: 2, name: 'Bread', src: 'https://www.kindpng.com/picc/m/28-289524_brad-pitt-png-brad-pitt-transparent-png.png'},
            {id: 3, name: 'Sasha', src: 'https://i.pinimg.com/originals/0a/97/92/0a9792e0e9b396f14b3174d122096a0b.jpg'}
        ]
    }

}


export let addPost = (postMessage) => {

    let newPost = {
        id: 1,
        message: postMessage,
        likes: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;