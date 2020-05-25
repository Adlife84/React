const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initailState = {
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
    }
};


const dialogReducer = (state = initailState, action) => {

    if (action.type === ADD_MESSAGE) {
        let newMessage = {
                id: 1, ADD_MESSAGE,
                answer: state.newMessageText
            }
            ;

        state.answers.push(newMessage); //Add new element in array

        state.newMessageText = ''; //Reset value after add in array


    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessage;
    }

    return state;

}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogReducer;



