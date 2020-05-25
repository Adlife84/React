const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    profilePage: {
        posts: [
            {id: 1, message: 'You bro', likes: 10},
            {id: 2, message: 'Hi! Hi are you?', likes: 15},
            {id: 3, message: 'Awesome! Are you?', likes: 8},
            {id: 4, message: 'Is anybody here?', likes: 25}
        ],
        newPostText: 'it-kamasutra.com'
    },
};

const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {

        let newPost = {
            id: 1,
            message: state.newPostText,
            likes: 0
        };

        state.posts.push(newPost);
        state.newPostText = '';


    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;

