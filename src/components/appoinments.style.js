import styled from 'styled-components';

export const HomeContainer = styled.div`

    margin-top:50px;
    margin-left:20px;
    background-color: #fff;
    color: red;
    height:70vh;
    width:28%;
    border-radius: 10px;
    box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b4df5b+0,b4df5b+100;Green+Semi+Flat */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f2f5f6+0,e3eaed+37,c8d7dc+100;Grey+3D+%234 */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,e5e5e5+100;White+3D */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#eaefb5+0,e1e9a0+100;Wax+Flat */
background: #eaefb5; /* Old browsers */
background: -moz-linear-gradient(top,  #eaefb5 0%, #e1e9a0 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #eaefb5 0%,#e1e9a0 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #eaefb5 0%,#e1e9a0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eaefb5', endColorstr='#e1e9a0',GradientType=0 ); /* IE6-9 */




    

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
        
        padding: 5px 25px;
        
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