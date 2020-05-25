import {createStore} from "../../node_modules/redux/es/redux";
import {combineReducers} from "../../node_modules/redux/es/redux";

import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;
