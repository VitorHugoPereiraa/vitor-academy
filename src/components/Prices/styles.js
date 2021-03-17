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

  width: 100%;
  height: 100%;
  padding: 5%;

  h2{
      text-align: center;
      color: #fff;
      font-size: 3rem;
      font-family: 'Ranchers', cursive;
      margin: 2rem 0 4rem 0;

  }
  @media(max-width: 360px) {
    padding: 0;
  }

  @media(max-width: 768px) {
  
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
      z-index: 999;
      font-family: 'Roboto', sans-serif;
      color: #B269CB;

      @media(max-width: 768px) {
        font-size: 2rem;
        text-align: center;
}
    }

`
export const ContainerInfo = styled.div`
    width: 100%;
    display: flex;

    @media(max-width: 768px) {
      flex-direction: column;
}
    div{
        flex: 1;
        
    }
    #div-content{
        flex: 3;
        margin-top: 2rem;
        z-index: 999;

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
    z-index: 999;

    @media(max-width: 768px) {
    align-items: center ;
    margin-top: 2rem;
       
}

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
    z-index: 999;

    :hover{
        background-color: #7CFC00 ;
        color:  #39363A;
        cursor: pointer;

    }
`