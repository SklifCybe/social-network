import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <SideBar />
            <Profile />
        </div>
    );
};

export default App;