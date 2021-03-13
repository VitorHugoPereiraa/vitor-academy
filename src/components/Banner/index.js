import React from 'react';

import {
    Container,
    Center,
    Form,
    FormPOST,
    IconsContainer,
    ContainerInputs,
    Input,
    SendButton
} from './styles';
import { MdEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

function Banner() {
    return (
        <Container>
            <Center>
                <Form >
                    <h2>Preencha com seus dados para receber as novidades e planos de carreiras inovadores: </h2>
                    <FormPOST>
                        <ContainerInputs>
                            <IconsContainer>
                                <BsFillPersonFill size="3rem" color='6f2e85' />
                            </IconsContainer>
                            <Input type="text" required placeholder="Digite seu Nome" />
                        </ContainerInputs>
                        <ContainerInputs>
                            <IconsContainer>
                                <MdEmail size="3rem" color='6f2e85' />
                            </IconsContainer>
                            <Input type="email" required placeholder="Digite seu Email" />
                        </ContainerInputs>

                        <h2>Confirme seu Email</h2>

                        <ContainerInputs>
                            <IconsContainer>
                                <MdEmail size="3rem" color='6f2e85' />
                            </IconsContainer>
                            <Input type="email" required placeholder="Digite seu Email" />
                        </ContainerInputs>

                        <SendButton>ENVIAR !</SendButton>

                    </FormPOST>
                </Form>
            </Center>
        </Container>
    );
}

export default Banner;