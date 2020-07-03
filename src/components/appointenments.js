import React,{Component} from 'react';
import io from 'socket.io-client';
import {HomeContainer} from './appoinments.style';
import {connect} from 'react-redux';
import Appoinment from './appoinment'; 




    
const ENDPOINT ='https://betawattapi.herokuapp.com/';
let socket;

class Apppoinments extends Component {

    state={
      aoh: {},
      total: 0
       
    }
  componentDidMount(){
    socket = io(ENDPOINT);
    socket.on('user-joined',(username,socketId,aoh_collections,total_appoinments)=>{
      // aoh_collections[username] = {
      //   ...aoh_collections[username],
      //   id:socketId
      // }
      this.setState({
        aoh: aoh_collections,
        total:total_appoinments
      })
    })
    socket.on('left',(username,aoh_collections,total_appoinments)=>{
      // aoh_collections[username] = {
      //   ...aoh_collections[username],
      //   id:socketId
      // }
      this.setState({
        ...this.state,
        aoh: aoh_collections
        
      })
    })

    socket.on('updated-appoinments-hand',(aoh_collections,total_appoinments)=>{
      // aoh_collections[username] = {
      //   ...aoh_collections[username],
      //   id:socketId
      // }
      this.setState({
        aoh: aoh_collections,
        total: total_appoinments
      })
    })

    }
    
    
    
  render(){
    return (
      <HomeContainer className="animate__animated animate__fadeInDown">
          <h4 class="title">Appoinments On Hand: <span class="total">{this.state.total}</span> </h4>
         {
          Object.keys(this.state.aoh).map(key=>this.state.aoh[key]).map(appoinment=>{
            console.log('hey',appoinment)
            return(
              <Appoinment key={appoinment.id} {...appoinment} currentUser={this.props.username}/>   
            )
             
          })
         }
    </HomeContainer>
    )

  }
}

const mapStateToProps =({user:{currentUser:{username}}})=>{
  return{
      username
  }

}

export default connect(mapStateToProps)(Apppoinments);
