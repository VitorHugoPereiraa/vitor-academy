import React from 'react';
import Typed from "react-typed";

import {
    Container,
    Center,
    Form,
    FormPOST,
    IconsContainer,
    ContainerInputs,
    Input,
    SendButton,
    TitleBannerContainer
} from './styles';
import { MdEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

function Banner() {
    return (
        <Container>
            <Center>
                <TitleBannerContainer>

                    <h2> Aprenda e comece a trabalhar com : </h2>
                    <div className="CenterText">
                        <Typed
                            loop
                            strings={["Desenvolvimento Front-End",
                                "Desenvolvimento Back-End",
                                "Desenvolvimento Mobile",
                                "Data Science",
                                "Inteligência Artificial",
                                "Desing de UI/UX"
                            ]}
                            typeSpeed={120}
                            backSpeed={75}
                            shuffle={false}
                            backDelay={1}
                            fadeOut={false}
                            fadeOutDelay={100}
                            loopCount={0}
                            showCursor
                            cursorChar="|"
                            className="Writing" 
                        />
                    </div>
                </TitleBannerContainer>
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