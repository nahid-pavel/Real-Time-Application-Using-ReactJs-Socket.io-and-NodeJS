import React,{Component} from 'react';
import {MessageContainer} from './message.style';
import {connect} from 'react-redux';


class  Message extends Component {
    componentDidUpdate() {
        this.newData.scrollIntoView({ behavior: "smooth" })
    }

     render(){
        const {messages} =this.props;

        let output =messages.map(message=>{
            
       
            return(
          
           
               <MessageContainer ref={(ref) => this.newData = ref} position={message.position}>
                 <span class="author">{message.author? `~ ${message.author.toUpperCase()}`:null}</span> <p class="body">{message.body}</p>
               </MessageContainer>
                    
               
                 
            )

         })
        return(
        
           
             <>
              {output}
            </>
          

        )
   
      
        
}      
       
}


const mapStateToProps=({message})=>{
    return {
        messages: message.messages
    }
}



export default connect(mapStateToProps)(Message);
