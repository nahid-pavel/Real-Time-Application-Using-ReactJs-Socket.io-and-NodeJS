import styled from 'styled-components';

export const HomeContainer = styled.div`

    margin-top:50px;
    margin-left:20px;
    color: red;
    height:60vh;
    width:35%;
    border-radius: 10px;
    box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fefcea+0,f1da36+84 */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b3dced+0,29b8e5+50,bce0ee+100;Blue+Pipe */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ebf1f6+0,abd3ee+50,89c3eb+51,d5ebfb+100;Blue+Gloss+%234 */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#d6f9ff+0,9ee8fa+100;Blue+3D */
background: #d6f9ff; /* Old browsers */
background: -moz-linear-gradient(top,  #d6f9ff 0%, #9ee8fa 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #d6f9ff 0%,#9ee8fa 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #d6f9ff 0%,#9ee8fa 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d6f9ff', endColorstr='#9ee8fa',GradientType=0 ); /* IE6-9 */




    

    .title{
        margin-top:10px;
        text-align:center;
        margin-bottom: 30px;
        font-size:1.5rem
        font-weight:bold;
        font-size:20px;
        color:green;
        .total{
            color:blue;
        }

    }
    .logo{
        
        cursor:pointer;
         color:#333;
        
      &.green{
        
        fill:green;
        
        
      }
      &.red{
        
        fill:red;
        
      }
    }
    p{
        padding: 0 20px;
        margin-left: 20px;


    }
    span{
       
        margin: 0 5px;

    }
    .bell{
        color: #fff;
    }
    .person{
        border-bottom:1px solid #333;
        
        
    }
    .person:last-child{
        border-bottom:none;
        
        
    }
    .t{
        
        color:  blue;
        font-weight:bold;
        font-size: 2 rem;
       
        
        
    }
    
    .total{
        
        padding: 5px;
        color: #000;
        font-weight:bold;

    }
    .name{
        font-size:20px;
        font-weight:bold;
        line-height:1.6;
        
    }
    .person{
        display:flex;
        justify-content: space-between;
        .count{
            display:flex;
            align-items:center;
            

            .add{
                padding: 5px 15px;
                background-color:#ccc;
                box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
                margin-right:35px;
                cursor:pointer;
            
            }
            .substract{
                padding: 5px 15px;
                background-color:#ccc;
                box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
                margin-right:35px;
                cursor:pointer;
            
            }
            
        }
       
    }
    
`