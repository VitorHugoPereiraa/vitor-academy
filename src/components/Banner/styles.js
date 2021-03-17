import styled from 'styled-components';

import header_bg from '../../assets/img/header-bg.jpg'

export const Container = styled.div`
  width: 100%;
  height: 557px;
  background-image: url(${header_bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 19px auto;
  
`

export const Form = styled.form`

    width: 400px;
    height: calc(100% + 30px);
    position: relative;
    top: -15px;
    background-color: #39363A;
    border: 4px solid #B269CB;
    border-radius: 5px;
    padding: 30px 20px;


    h2{
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ranchers&display=swap');

        font-size: 22px;
        font-family: 'Ranchers', cursive;
        font-weight: 300;
        text-align: center;
        color: #fff;
    }
`
export const FormPOST = styled.form`
    width: 100%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items:center;

    h2{
        margin: 10px;
    }
`

export const ContainerInputs = styled.div`
    width: 100%;
    display: flex;
    margin: 20px 0;

`

export const IconsContainer = styled.div`
    width: 80px;
    height: 50px;
    background-color: #fff;
    border: 2px solid #CFCFCF;
    border-radius: 10px 0 0 10px;
    text-align: center;
`
export const Input = styled.input`
    width: calc(100% - 80px);
    height: 50px;
    background-color: #fff;
    border: 2px solid #CFCFCF;
    border-radius: 0 10px 10px 0;
    font-size: 18px;
    font-weight: 600;
    color:  #6E6E6E;
    padding-left: 5px;

    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`
export const SendButton = styled.button`
    width: 90%;
    height: 50px;
    margin-top: 20px;
    background-color: #B269CB;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-size: 20px;
    font-family: 'Ranchers', cursive;
    cursor: pointer;

    :hover{
        background-color: #6f2e85;
        color: #fff;
    }
`

export const TitleBannerContainer = styled.div`
   margin: 5% 0 0 0;
   width: 49%;

   h2{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
        text-align: center;
        color: #B269CB;
        font-size: 3rem;
        font-family: 'Roboto', sans-serif;
        margin-top: 10%;
   }
   
   .CenterText {
       display: flex;
       justify-content: center;
       align-items: center;
       margin-top: 10%;

       .Writing{
       color: #fff;
       text-align: center;
       font-size: 2.8rem;
       font-family: 'Ranchers', cursive;
       color: #FFF;
     }  
   }

  
`
