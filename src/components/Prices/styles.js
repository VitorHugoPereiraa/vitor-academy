import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color:#39363A;
  display: flex;
  justify-content: center;
  position: relative;

  #divIcon{
      position: absolute;
      top: -2rem;
  }
`;

export const Center = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ranchers&display=swap');

  width: 1280px;
  height: 100%;
  padding: 5%;

  h2{
      text-align: center;
      color: #fff;
      font-size: 3rem;
      font-family: 'Ranchers', cursive;
      margin: 2rem 0 4rem 0;

  }
`
export const PriceContainer = styled.div`
    width: 100%;
    border: 3px solid #6959CD;
    border-radius: 1rem;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;

    h3{
      font-size: 2rem;
      font-family: 'Roboto', sans-serif;
      color: #B269CB;
    }
`
export const ContainerInfo = styled.div`
    width: 100%;
    display: flex;

    div{
        flex: 1;
        
    }
    #div-content{
        flex: 3;
        margin-top: 2rem;

        p{
            color: #fafafa;
            font-family: 'Roboto', sans-serif;
            font-weight:500;
            line-height: 23px;
        }
    }
`
export const ContainerBuy = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end ;

    p{
      font-size: 1.5rem;
      color: #7CFC00;
      text-align: end;
      
      span{
          text-decoration: line-through ;
          font-size: 2rem;
          margin-left: 0.2rem ;
      }
    }

    #final_text_price{
        font-size: 1.1rem;
        color: #f2f2f2;

        #final_price{
            text-decoration: none;
            font-size: 1.5rem;
        }
    }
`
export const Button = styled.button`
    width: 80%;
    height: 40px;
    font-size: 1rem;
    border: 2px solid #7CFC00;
    background-color: inherit ;
    border-radius: 0.5rem;
    margin-top: 2rem;
    color:  #7CFC00;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    cursor: pointer;

    :hover{
        background-color: #7CFC00 ;
        color:  inherit;

    }
`