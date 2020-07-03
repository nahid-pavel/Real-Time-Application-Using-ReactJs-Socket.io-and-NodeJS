import styled from 'styled-components';

export const  HomeContainer = styled.div`
    
     margin: 50px 20px 0px 20px;
     width:65%;
     
     position:relative;
     
     .submit{
          background-color: green;
          opacity:0.4;
          width:650px;
          height:50px;
          text-align:center;
          color:#fff;
          border-radius:15px;
          box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
          -webkit-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
          -moz-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
          margin:10px auto;
          position:relative;
          display:none;
          

          .close{
               position:absolute;
               top:10px;
               right: 30px;
               color: black;
               cursor:pointer;
          }

          
     }
     .show{
        display:inline-block;
        

     }

     

`
export const  MainContainer = styled.div`
    display:flex;
   
    


     

`

export const HeaderContainer = styled.div`
    padding:10px;
    background-color: orange;
    opacity:0.8;
    text-align:center;
    border-radius: 10px;
    box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
`