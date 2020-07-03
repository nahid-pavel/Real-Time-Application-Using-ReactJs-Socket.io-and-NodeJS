import React,{useState,useEffect} from 'react';
import {HomeContainer,HeaderContainer,MainContainer} from './home.style';
import ChatRoom from './chat';
import Appoinments from './appointenments';
import Navigation from './navigation';
import io from 'socket.io-client';
import {connect} from 'react-redux';

const Home =({username})=>{
    let audio = new Audio('/appoinment.mp3');
    const ENDPOINT ='https://betawattapi.herokuapp.com'
    let socket = io(ENDPOINT);
    const [messageForSubmit,setMessageForSubmit] = useState(false);
    const [privateMessage,setPrivateMessage] = useState(false);
   
    
    useEffect(()=>{
        const title = document.querySelector('title');
        let prevTitle = title.textContent;
        
        socket.on('submit-message',(name,messageSubmit,total_messages)=>{
            
              if(username === name){
                  audio.play();
                  let msg;
                //   if(total_messages === 1){
                //       msg = `You have ${total_messages} message`
                //   }else {
                //       msg = `You have ${total_messages} messages`
                //   }
                  msg = 'Submit Your Appoinment'
                  title.textContent = msg;
                  title.style.color='red';
                  setMessageForSubmit(true)
                  
              }
           
         })

         socket.on('new-message',(name,message,MsgService,msgName,total_messages)=>{
            
            if(username === msgName){
                audio.play();
                let msg;
                if(total_messages === 1){
                    msg = `You have ${total_messages} message`
                }else {
                    msg = `You have ${total_messages} messages`
                }
                title.textContent = msg;
                setPrivateMessage(true)
                
            }
         
         })


        socket.on('message-close-success',(name)=>{
            
            if(username === name){
               
                title.textContent = prevTitle ;
                
            }
         
          })

    },[audio,socket,username])
    const closeSendMessage=()=>{
        setMessageForSubmit(false);
        setPrivateMessage(false);
        socket.emit('message-close',username)
    }
    
    return (
    <>
       <Navigation />
       <MainContainer>
        <Appoinments />
            {/* <div class="container">  */}
                <HomeContainer>
                    <HeaderContainer className="animate__animated animate__fadeInLeft">
                        <h1>Betawatt  Live </h1>
                        <div className={ privateMessage ? 'animate__animated animate__fadeInLeft submit show ': 'submit'}>
                          <h2> You have new private message <span className="close" onClick={()=>closeSendMessage()}>&#10006;</span></h2>
                        </div>
                    </HeaderContainer>
                    <div className={ messageForSubmit ? 'animate__animated animate__fadeInLeft submit show ': 'submit'}>
                        <h2>{username.toUpperCase()}, Submit  Your Appoinment <span className="close" onClick={()=>closeSendMessage()}>&#10006;</span></h2>
                    </div>
                    <ChatRoom />
                </HomeContainer>

             {/* </div> */}
           
       </MainContainer>
       <footer className="animate__animated animate__fadeInRight" style={{color:'grey', position:'absolute',bottom:0,right:'20px'}}>
           <p > @{new Date().getFullYear()}, Peter  Software Limited</p>
       </footer>
        
      
    </>     
    )
}
const mapStateToProps=({user:{currentUser:{username}}})=>{
     return{
        username
     }
}



export default connect(mapStateToProps)(Home);
