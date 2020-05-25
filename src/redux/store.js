import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {

    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'You bro', likes: 10},
                {id: 2, message: 'Hi! Hi are you?', likes: 15},
                {id: 3, message: 'Awesome! Are you?', likes: 8},
                {id: 4, message: 'Is anybody here?', likes: 25}
            ],
            newPostText: ''
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
            ],
            newMessageText: ''
        },

        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Vania',
                    src: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzkxOTI1MjYy/scarlett-johansson-13671719-1-402.jpg'
                },
                {
                    id: 2,
                    name: 'Bread',
                    src: 'https://www.kindpng.com/picc/m/28-289524_brad-pitt-png-brad-pitt-transparent-png.png'
                },
                {
                    id: 3,
                    name: 'Sasha',
                    src: 'https://i.pinimg.com/originals/0a/97/92/0a9792e0e9b396f14b3174d122096a0b.jpg'
                }
            ]
        }

    },

    _callSubscriber() {
        console.log('State was change!');
    },

    //Our interface metods
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}




export default store;

window.store = store;
