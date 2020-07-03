import styled from 'styled-components';


export const  HomeContainer = styled.div`
     width:100%;
     height:55vh;
     background-color: #ccc;
     opacity:0.6;
     margin-top: 20px;
     border-radius:15px  15px 0px 0px;;
      box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
     overflow-y:auto;
    
    
`


export const FormContainer = styled.form`
       height: 10vh;
       width:100%;
       input[type="text"]{
            
            width:90%;
            padding:10px;
            border-radius: 10px 0 0 10px;
            border: 1px solid black;
            border-right: none;
            
            
            
        }
        button{
            padding:10px;
            background-color:orange;
            width:10%;
        }


`
