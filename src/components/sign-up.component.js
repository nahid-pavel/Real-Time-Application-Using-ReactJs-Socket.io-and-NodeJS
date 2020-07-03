import React,{useState} from 'react';
import {FormContainer} from './sign-up.style';

import {setCurrentUser} from '../redux/user/user.actions';
import {connect} from 'react-redux';



const  SignUp=({setCurrentUser})=>{
    let audio = new Audio('/betawatt.mp3');
    const [username,setUsername] = useState('');
    const [password, setPassword] =useState('');
    

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        let data={
            username,
            password
        }
        fetch('https://betawattapi.herokuapp.com/signIn',{
               method: 'POST', // or 'PUT'
               headers: {
                 'Content-Type': 'application/json',
                },
               body: JSON.stringify(data)
            })
             .then(res=>res.json())
             .then(data=>{
                if(data.existingUser){
                  const {existingUser} = data;
                  setCurrentUser(existingUser)
                  audio.play();
                }
                 
             })
             .catch(err=>{
                 console.log(err)
             })
    }
     return (
    <div class="container">
        <div className="row">

          <div className="col-md-6 offset-2 form-container">
          <FormContainer>
              <h1>Sign In</h1>
              <form onSubmit={onSubmitHandler}>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}  />
                       
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </form>
            </FormContainer>
          </div>
            
        </div>
        </div>
      
    )
}



export default connect(null,{setCurrentUser})(SignUp);
