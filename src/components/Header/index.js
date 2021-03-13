import React from 'react';

import { Container, Center, Logo } from './styles'; 

import logo_img from '../../assets/img/logo_size.png'

function Header() {
    return (
        <Container>
            <Center>
                <Logo src={logo_img}/>
            </Center>
        </Container>
    );
}

export default Header;