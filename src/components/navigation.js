import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from './navigation.style';

const Navigation =  ({username})=>{
    
    return (
        <NavigationContainer>
           <p> Welcome,  {username.toUpperCase()}</p> 
        </NavigationContainer>
    )
}

const mapStateToProps =({user:{currentUser:{username}}})=>{
    return{
        username
    }

}

export default connect(mapStateToProps)(Navigation);
