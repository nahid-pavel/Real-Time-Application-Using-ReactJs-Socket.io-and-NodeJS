import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import messageReducer from './messages/message.reducer';

export default combineReducers({
    user: userReducer,
    message: messageReducer

})