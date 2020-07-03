import React from 'react';
import io from 'socket.io-client';
import { ReactComponent as Bell}  from './bell.svg';


const Appoinment=({username,aoh,currentUser,logged_in,id})=>{

    
     
    const ENDPOINT ='https://betawattapi.herokuapp.com/'
    let socket = io(ENDPOINT);
     const updateHandAppoinment=(action)=>{
            console.log(id)
            
            
            socket.emit('update-appoinments-hand',action,username.toLowerCase());
            
     }
     const sendApp  =()=>{
            console.log('clicked on bell', username)
            socket.emit('submit appoinment',username.toLowerCase());
     }
    let  logoClass =   logged_in ? 'logo green': 'logo red'
    return (
        <div class="person">
            <p><span>{currentUser==='peter' ? <Bell  onClick={()=>sendApp() }className={logoClass}/>: null }</span> <span class="name">{username}  :</span> <span class="t">{aoh}</span></p>
            {
                username.toLowerCase()  === currentUser ?  (
                 <div class="count">
                    <span class="add" onClick={()=>updateHandAppoinment('plus')}>+</span>
                    <span class="substract" onClick={()=>updateHandAppoinment('minus')}>-</span>
                 </div>
                ): null
            }
      </div>
    )
}

export default Appoinment;
