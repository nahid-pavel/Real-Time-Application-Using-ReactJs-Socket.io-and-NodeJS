import React from 'react';
import './App.css';
import SignUp from './components/sign-up.component';
import Home from './components/home.component'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';




function App({currentUser}) {
  
  return (
    <>
       <Route to ='/' render={()=>currentUser? <Home />:<SignUp />}/>
    </>
    
  );
}

const mapStateToProps=({user:{currentUser}})=>{
    return{
      currentUser
    }
}

export default connect(mapStateToProps)(App);
