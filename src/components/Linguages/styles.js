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
   width: 1280px;
   height: 100%;
   padding: 5%;
   display : flex;
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