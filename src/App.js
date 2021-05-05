import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <SideBar />
            <main className="app-wrapper-content">
                <Route path="/profile" render={() =>
                    <Profile
                        store={props.store} />} />
                <Route path="/messages" render={() =>
                    <DialogsContainer
                        store={props.store} />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
                <Route path="/users" render={() => 
                    <UsersContainer
                        store={props.store} />} />
            </main>
        </div>
    );
};

export default App;
