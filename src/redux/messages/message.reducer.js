import {messageTypes} from './message.types';

const initialState={

    messages: []

}

const messageReducer = (state=initialState,action)=>{
    switch(action.type){
        case messageTypes.ADD_MESSAGE:{
            return{
                ...state,
                messages:[...state.messages,action.payload]
            }
        }
        default:
           return  state;
    }
}

export default messageReducer;