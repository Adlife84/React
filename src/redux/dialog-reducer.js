const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {

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



