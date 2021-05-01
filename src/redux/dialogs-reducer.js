const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
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