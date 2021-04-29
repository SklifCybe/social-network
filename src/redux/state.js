let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 14},
                {id: 2, message: 'It\'s my first page', likesCount: 25},
                {id: 3, message: 'I think you gay', likesCount: 0},
                {id: 4, message: 'If you can, you can, but if you can\'t, you can\'t', likesCount: 1},
                {id: 5, message: 'I am a ghous hanter', likesCount: 5},
                {id: 6, message: 'I play in dota, dota destroy my mind', likesCount: 101},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 0, name: 'Ilya' },
                { id: 1, name: 'Evgeniy' },
                { id: 2, name: 'Nikita' },
                { id: 3, name: 'Danik' },
                { id: 4, name: 'Viktor' },
                { id: 5, name: 'Anya' },
                { id: 6, name: 'Anyta' },
                { id: 7, name: 'Elizaveta' },
                { id: 8, name: 'Anastasia' },
                { id: 9, name: 'Muhamed' },
                { id: 10, name: 'Anton' },
                { id: 11, name: 'Mustafa' },
            ],
            messages: [
                { id: 0, message: 'Hello' },
                { id: 1, message: 'How are you?' },
                { id: 2, message: 'What\'s happend to you?' },
                { id: 3, message: 'You should take it' },
                { id: 4, message: 'I go to sleep' },
                { id: 5, message: 'Your mom gay' },
                { id: 6, message: 'Mazafaka' },
            ]
        }
    },
    get state() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._state.profilePage.posts.push(
                {
                    id: 7,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                }
            );
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

window.store = store;

export default store;