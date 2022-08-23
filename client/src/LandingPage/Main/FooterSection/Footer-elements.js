import styled  from 'styled-components';


export const FooterContainer = styled.div`
   
    padding: 30px;
    margin: auto;
    background: #202020;

    span{
        color: white;
       font-size: 12px;

       a{
            text-decoration: none;
            color: #6DB943;
            cursor: pointer;
       }
    }

    @media screen and (max-width: 910px){
        padding: 10px;
       
    }

`

export const RowContainer = styled.div`

    max-width: 1500px;
    display: grid;
    margin: auto;
    align-items: flex-start;
    justify-content: center;
    grid-column-gap: 40px;
    grid-template-rows: auto; 
    grid-template-columns: 200px 200px 200px 200px 200px;
    justify-items: center;



    .first-row{

        color: white;

        p{
            text-align: justify;
            color: white;
            font-size: 12px;
            line-height: 1.7;
        }

        .socials{
            display: flex;
            align-items: center;
            justify-content: left;

            .social-icons{
                margin-right: 10px; 
            }
        }

        
    }

    .second-row span{
        font-size: 20px;
        padding: 0;
        text-align: left;
        color: white;
        font-weight: bold;
        margin-bottom: 25px;
    }

    .second-row {

        ul{
            margin-top: 10px;
            list-style-type: none;
            text-align: left;
            color: white;
            font-size: 12px;
        }
        li {
            margin-bottom: 15px;
            a{
                text-decoration: none;
                color: white;
            }
        }
    }

    .third-row span{
        font-size: 20px;
        padding: 0;
        text-align: left;
        color: white;
        font-weight: bold;
        margin-bottom: 25px;
    }

    .third-row {
        ul{
            margin-top: 10px;
            list-style-type: none;
            text-align: left;
            color: white;
            font-size: 12px;
        }
        li {
            margin-bottom: 15px;
            a{
                text-decoration: none;
                color: white;
            }
        }
    }

    .fourth-row{
        text-align: left;
        color: white;

        span{
            font-size: 20px;
            padding: 0;
            font-weight: bold;
            
        }

        p{
            margin-top: 10px;
            font-size: 12px;
            line-height: 1.7;
        }

        .input-container{

            display: flex;
            align-items: center;
            background: white;
            border-radius: 5px;
            padding:8px 10px;

            .text-input{
                border: none;
                width: 100%;
                

                &:focus{
                    outline: none;
                }
            }
        }

        .socials{
            display: flex;
            align-items: center;
            justify-content: left;

            .social-icons{
                margin-right: 10px; 
            }
        }

        
    }


    .fifth-row{
        text-align: left;
        color: white;

        span{
            font-size: 20px;
            padding: 0;
            font-weight: bold;
        }

        p{
            font-weight: bold;
            margin-top: 10px;
        }

        .location{
            font-size: 12px;
            line-height: 1.7;
        }

        .desc{
            text-align: justify;
            font-weight: normal;
            font-size: 12px;
            line-height: 1.7;
        }
    }
    

    @media (min-width: 651px) and (max-width: 1000px){
        grid-template-rows: auto auto auto auto auto; 
        grid-template-columns: 350px 350px ;
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        justify-items: left;
    }
    @media screen and (max-width: 650px){
        grid-template-rows: auto auto; 
        grid-template-columns: 350px ;
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        justify-items: left;
    }

`