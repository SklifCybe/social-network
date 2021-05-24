import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import SideBar from './components/SideBar/SideBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';


const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <SideBar />
            <main className="app-wrapper-content">
                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer
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
