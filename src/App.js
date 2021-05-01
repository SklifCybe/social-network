import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import './App.css';


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <SideBar />
            <main className="app-wrapper-content">
                <Route path="/profile" render={() => 
                    <Profile
                        state={props.state.profilePage} 
                        dispatch={props.dispatch}
                        newPostText={props.state.profilePage.newPostText}/>} />
                <Route path="/messages" render={() => 
                    <Dialogs 
                        state={props.state.dialogsPage} 
                        dispatch={props.dispatch}
                        newMessageText={props.state.dialogsPage.newMessageText}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </main>
        </div>
    );
};

export default App;
