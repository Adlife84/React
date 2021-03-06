import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';


const App = (props) => {
    console.log(props.state);
    return (

        <div className='app-wrapper'>
            <Header />
            <Navbar state={props.store}/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs'
                       render={ () => <Dialogs dialogsPage={props.state.dialogsPage}
                                               dispatch={props.dispatch} /> }/>

                <Route path='/profile'
                       render={ () => <Profile profilePage={props.state.profilePage}
                                               dispatch={props.dispatch} /> }/>

                <Route path='/news' render={ () => <News /> }/>

                <Route path='/music' render={ () => <Music /> }/>

                <Route path='/settings' render={ () => <Settings /> }/>

                <Route path='/friends' render={ () => <Friends state={props.state.sidebar.friends}/> }/>
            </div>
        </div>


    )
}

export default App;

