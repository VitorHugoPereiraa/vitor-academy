import React from 'react';

import { Container, Center, ImageContainer, TextContainer } from './styles';
import Logo from '../../assets/img/logo_size.jpg'

function Footer() {
  return(
      <Container>
          <Center>
           <ImageContainer>
            <img src={Logo}/>
           </ImageContainer>
          <TextContainer>
            <p>© 2021 Dev-Vitor</p>
            <p>Todos os direitos reservados a Dev-Vitor</p>
          </TextContainer>
          </Center>
      </Container>
  );
}

export default Footer;