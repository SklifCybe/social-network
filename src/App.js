import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Messenger from './components/Messanger/Messenger';


const App = props => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <SideBar />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.state.posts}/>} />
                    <Route path='/messenger' render={() => <Messenger dialogs={props.state.dialogs} messages={props.state.messages}/>} />
                    <Route path='/news' />
                    <Route path='music' />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;