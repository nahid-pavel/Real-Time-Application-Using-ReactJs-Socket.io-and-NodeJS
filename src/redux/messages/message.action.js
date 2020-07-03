import {messageTypes} from './message.types';


export const updateMessage =(message)=>{
    return{
       type: messageTypes.ADD_MESSAGE,
       payload: message
    }
}