import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
    return {
        updateNewPostText: state.profilePage.updateNewPostText,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;