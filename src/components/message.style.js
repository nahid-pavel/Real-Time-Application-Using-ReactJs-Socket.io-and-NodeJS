import styled from 'styled-components';
const background='linear-gradient(to bottom,  #b0d4e3 0%,#88bacf 100%)'; 



export const MessageContainer  = styled.div`
     
     /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#7abcff+0,60abf8+44,4096ee+100;Blue+3D+%2314 */

     background:${(props)=>props.position === 'right' ? background: 'grey' }; 
     min-width:24%;
     max-width: 44%;
     position:relative;
     border-radius: 12px;

     float:${(props)=>props.position === 'right' ? 'right': 'left' };
     clear:both;
     margin: 17px 12px;
     padding: 10px;
     overflow-y:auto;
     color:${(props)=>props.position === 'right' ? 'black' : 'white' };
     border: 2px solid black;
     p{
          margin-top: 12px;
     }

     .author{
          position:absolute;
          color:${(props)=>props.position === 'right' ? 'green': 'grey' }; 
          top:2px;
          right:2px;
          font-size:1rem;


     }
      
     

`