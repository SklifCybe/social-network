const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            state.messages.push(
                {
                    id: 7,
                    message: state.newMessageText
                });
            break;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.body;
            break;
    }
    return state;
};

export const sendMessageCreator = () => (
    {
        type: SEND_MESSAGE
    }
)
export const updateNewMessageBodyCreator = (text) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
)

export default dialogsReducer;