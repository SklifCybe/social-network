import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import './App.css';


const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <SideBar />
            <main className="app-wrapper-content">
                <Route path="/profile" component={Profile}/>
                <Route path="/messages" component={Dialogs}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </main>
        </div>
        </BrowserRouter>
    );
};

export default App;
