import React,{useState} from 'react';
import {HomeContainer,FormContainer} from './chat.style';
import io from 'socket.io-client';
import {connect} from 'react-redux';
import Message from './message';
import {updateMessage} from '../redux/messages/message.action';



const Chat =({currentUser,updateMessage})=>{
    
    let audio = new Audio('/ting.mp3');
    
    const [message,setMessage] = useState('')
    const {username} = currentUser;
    const ENDPOINT ='https://betawattapi.herokuapp.com/';
    let socket = io(ENDPOINT);
    

  

       
       socket.emit('new-user-joined',username);
       socket.once('user-joined',(username,socketId)=>{
        
        let id = new Date().getHours()+ Math.random();
        
        updateMessage({
            id,
            body: `${username.toUpperCase()}, entered the room`,
            position:'right',
            type:'join'
        });

        });
        socket.once('left',(username)=>{
        
            let id = new Date().getHours()+ Math.random();
            
            updateMessage({
                id,
                body: `${username.toUpperCase()}, left the room`,
                position:'right',
                type:'left'
            });
    
        });
        socket.once('new-message',(name,message,MsgService,msgName)=>{

            if((MsgService==='private' && msgName === username)||(MsgService==='private'&& name === username)){
                console.log('mil gaya')
                let id = new Date().getHours()+ Math.random();
                if(username !==name){
                    audio.play();
                }
                updateMessage({
                    id,
                    body: message,
                    position: username === name ? 'left' : 'right',
                    type:'message',
                    author: name,
                    MsgService
                });
                

            }
            if(MsgService==='public'){
                console.log('nahi mila')
                let id = new Date().getHours()+ Math.random();
                 if(username !== name){
                   audio.play();
                 }
               updateMessage({
                    id,
                    body: message,
                    position: username === name ? 'left' : 'right',
                    type:'message',
                    author: name,
                    MsgService
                 });

            }
        
            
    
        });
        
 

 

    
    const onChangeHandler=(e)=>{
        setMessage(e.target.value)
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        socket.emit('new-message-submit',username,message)
        setMessage('');
    }
    
    
    return (
     <>
        <HomeContainer className="animate__animated animate__fadeInRight" >
             <h2 style={{'textAlign':'center','position':'sticky'}}>Ask or Discuss</h2>
             
                <Message  />
        </HomeContainer>
        <FormContainer className="animate__animated animate__fadeInRight" onSubmit={onSubmitHandler}>
                <input  id="message" autocomplete="off" type="text"  value={message} onChange={onChangeHandler}/>
                <button type="submit" >Send</button>
         </FormContainer>
        </>
        
      
    )
}

const mapStateToProps=({user:{currentUser}})=>{
     return{
         currentUser
     }

}

export default connect(mapStateToProps,{updateMessage})(Chat);
