import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   background-color: #fafafa;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   overflow: hidden;
`;


export const Center = styled.div`
   width: 100%;
   height: 100%;
   padding: 5%;
   display : flex;
   justify-content: center;
   flex-wrap: wrap;
   h2{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');

       text-align: center;
       font-size:2.8rem;
       font-family: 'Roboto', sans-serif;
       color: #6F2E85;
       width: 100%;
       margin: 3rem 0;
   }

`;

export const Form = styled.form`

    width: 400px;
    height: calc(100% + 30px);
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


export const CenterIcons = styled.div`
   width: 100%;
   height: 100%;
   display : flex;
   overflow-x: auto;
   scroll-snap-type: x mandatory;
   scroll-behavior: smooth;
  
::-webkit-scrollbar{
   width:0;
}

   div{
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ranchers&display=swap');

      min-width: 180px;
      padding: 1rem 0.5rem;
      display: flex;
      margin:1rem 1rem ;
      flex-direction: column;
      align-items:center;
      scroll-snap-align: start;
      pointer-events: none;


      h2{
         margin-top: 1rem;
         margin-bottom: 1rem;
         font-size: 1rem;
         color: #000;
      }

      p{
        font-family: 'Ranchers', cursive;
        color: #808080 ;
        text-align: center;
      }
   }
`;

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   border: 1px solid red;
   flex-wrap:nowrap;
   overflow-x: auto;
   margin: 1rem;


`