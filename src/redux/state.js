// let rerenderEntireTree = () => {
//     console.log('State was change!');
// }
//
// let state = {
//
//     profilePage: {
//         posts: [
//             {id: 1, message: 'You bro', likes: 10},
//             {id: 2, message: 'Hi! Hi are you?', likes: 15},
//             {id: 3, message: 'Awesome! Are you?', likes: 8},
//             {id: 4, message: 'Is anybody here?', likes: 25}
//         ],
//         newPostText: ''
//     },
//
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Andrei'},
//             {id: 2, name: 'Sveta'},
//             {id: 3, name: 'Dima'},
//             {id: 4, name: 'Elena'},
//             {id: 5, name: 'Valera'},
//             {id: 6, name: 'Olga'}
//         ],
//         messages: [
//             {id: 1, message: 'Hi how are you?'},
//             {id: 2, message: 'How is going?'},
//             {id: 3, message: 'Anydoby here?'},
//             {id: 4, message: 'Goodbay forever!'}
//         ],
//         answers: [
//             {id: 1, answer: 'I am fine! Are you?'},
//             {id: 2, answer: 'It is going good'}
//         ],
//         newMessageText: 'TestMessage from Stage'
//     },
//
//     sidebar: {
//         friends: [
//             {
//                 id: 1,
//                 name: 'Vania',
//                 src: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzkxOTI1MjYy/scarlett-johansson-13671719-1-402.jpg'
//             },
//             {
//                 id: 2,
//                 name: 'Bread',
//                 src: 'https://www.kindpng.com/picc/m/28-289524_brad-pitt-png-brad-pitt-transparent-png.png'
//             },
//             {id: 3, name: 'Sasha', src: 'https://i.pinimg.com/originals/0a/97/92/0a9792e0e9b396f14b3174d122096a0b.jpg'}
//         ]
//     }
//
// }
//
// window.state = state;
//
// export const addPost = () => {
//
//     let newPost = {
//         id: 1,
//         message: state.profilePage.newPostText,
//         likes: 0
//     };
//
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//
//     rerenderEntireTree(state);
//
// }
//
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }
//
//
// // function that add messages in Dialogs page /dialog
// export const addMessage = () => {
//
//     let newMessage = {
//         id: 1,
//         answer: state.dialogsPage.newMessageText,
//     };
//
//     state.dialogsPage.answers.push(newMessage); //Add new element in array
//
//     state.dialogsPage.newMessageText = ''; //Reset value after add in array
//
//     rerenderEntireTree(state); //rerender all page
//
// }
//
// export const updateNewMessageText = (newMessage) => {
//     state.dialogsPage.newMessageText = newMessage;
//     rerenderEntireTree(state);
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }
//
// export default state;


let store = {

    //Privat use

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
            newMessageText: 'TestMessage from Stage'
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

    // addPost()  {
    //
    //     let newPost = {
    //         id: 1,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     };
    //
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //
    //     this._callSubscriber(this._state);
    //
    // },
    //
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    //
    // addMessage() {
    //
    //     let newMessage = {
    //         id: 1,
    //         answer: this._state.dialogsPage.newMessageText,
    //     };
    //
    //     this._state.dialogsPage.answers.push(newMessage); //Add new element in array
    //
    //     this._state.dialogsPage.newMessageText = ''; //Reset value after add in array
    //
    //     this._callSubscriber(this._state); //rerender all page
    //
    // },
    //
    // updateNewMessageText(newMessage) {
    //     this._state.dialogsPage.newMessageText = newMessage;
    //     this._callSubscriber(this._state);
    // },


    dispatch(action) { // {type: 'ADD-POST' }
        
        if (action.type === "ADD-POST") {

            let newPost = {
                id: 1,
                message: this._state.profilePage.newPostText,
                likes: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';

            this._callSubscriber(this._state); //updateNewPostText

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === "ADD-MESSAGE"){
            let newMessage = {
                id: 1,
                answer: this._state.dialogsPage.newMessageText,
            };

            this._state.dialogsPage.answers.push(newMessage); //Add new element in array

            this._state.dialogsPage.newMessageText = ''; //Reset value after add in array

            this._callSubscriber(this._state); //rerender all page

        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT"){
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);

        } else {
           console.log("I don't understand you request");
        }
    }

}


export default store;

window.state = store._state;
