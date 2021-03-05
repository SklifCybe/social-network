import {rerender} from '../render';

let state = {
    posts: [
        { id: '0', message: 'Hi, how are you?', likesCount: '20' },
        { id: '1', message: 'It\'s my second post', likesCount: '15' }
    ],
    dialogs: [
        { name: 'Ilya', id: '0' },
        { name: 'Evgeniy', id: '1' },
        { name: 'Ilyas', id: '2' },
        { name: 'Viktor', id: '3' },
        { name: 'Danik', id: '4' },
    ],
    messages: [
        { id: '0', message: 'Hello' },
        { id: '1', message: 'How are you?' },
        { id: '2', message: 'Why did you leave me?' },
    ]
};

export let addPost = (message) => {
    let post = {
        id: 5,
        message: message,
        likesCount: '0'
    };
    
    state.posts.push(post);
    rerender(state);
};

export default state;