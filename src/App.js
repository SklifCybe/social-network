import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Messenger from './components/Messanger/Messenger';


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <SideBar />
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile} />
                    <Route path='/messenger' component={Messenger} />
                    <Route path='/news' />
                    <Route path='music' />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;