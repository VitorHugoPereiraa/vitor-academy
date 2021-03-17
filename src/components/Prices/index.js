import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';

import { Container, Center, PriceContainer, ContainerInfo, ContainerBuy, Button } from './styles';


function Prices() {
    return (
        <Container>
            <ReactParticles
                params={particlesConfig}
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                }} 
            />
            <div id="divIcon">
                <AiFillStar color="yellow" size="4.5rem" />
            </div>

            <Center>
                <h2> Pacotes Disponiveis: </h2>
                <PriceContainer>
                    <h3> Desenvolvimento Web: </h3>

                    <ContainerInfo>

                        <div id="div-content">
                            <p>Se você sonha em iniciar uma carreira de sucesso como programador web ou ganhar dinheiro com o desenvolvimento de sites ou sistemas para a internet, esse curso é uma boa escolha. Nessa formação, você irá aprender a desenvolver sistemas web completos com HTML, CSS, Bootstrap, JavaScript, Jquery, PHP, Orientação a Objetos e MySQL.
                        </p>
                        </div>


                        <ContainerBuy>
                            <p> De <span>R$299,00</span></p>
                            <p id="final_text_price">por apenas <span id="final_price">R$55,99</span> </p>
                            <Button> COMPRAR !</Button>
                        </ContainerBuy>

                    </ContainerInfo>
                </PriceContainer>
                <PriceContainer>
                    <h3> Desenvolvimento Mobile: </h3>

                    <ContainerInfo>

                        <div id="div-content">
                            <p>Aprenda a desenvolver aplicativos de todos os tipos para todas as plataformas.
                            Prepare o seu ambiente de trabalho e domine a criação de aplicativos Android e IOS.
                            Domine JavaScript, React, Node, Android Studio, Visual Studio Code e mais...

                            Descubra como publicar apps na Google Play e AppStore.

                            Aprenda com exercícios práticos e crie vários apps diferentes para seu portfólio.
                            Aprenda a criar apps híbridos (Android e IOS),
                            aprenda a criar PWA (Progressive Web Apps),
                            crie apps com Flutter.
                        </p>
                        </div>


                        <ContainerBuy>
                            <p> De <span>R$399,00</span></p>
                            <p id="final_text_price">por apenas <span id="final_price">R$65,99</span> </p>
                            <Button> COMPRAR !</Button>
                        </ContainerBuy>

                    </ContainerInfo>
                </PriceContainer>
                <PriceContainer>
                    <h3> Desenvolvimento Full Stack: </h3>
                    

                    <ContainerInfo>

                        <div id="div-content">
                            <p>Aprenda a desenvolver aplicações web você irá aprender a desenvolver sistemas web completos com HTML, CSS, Bootstrap, JavaScript, Jquery, PHP, Orientação a Objetos e MySQL
                            e desenvolva aplicativos de todos os tipos para todas as plataformas.
                            Prepare o seu ambiente de trabalho e domine a criação de aplicativos Android e IOS.
                            Domine JavaScript, React, Node, Android Studio, Visual Studio Code e mais...

                            Descubra como publicar apps na Google Play e AppStore.

                            Aprenda com exercícios práticos e crie vários apps diferentes para seu portfólio.
                            Aprenda a criar apps híbridos (Android e IOS),
                            aprenda a criar PWA (Progressive Web Apps),
                            crie apps com Flutter.
                        </p>
                        </div>


                        <ContainerBuy>
                            <p> De <span>R$599,00</span></p>
                            <p id="final_text_price">por apenas <span id="final_price">R$99,99</span> </p>
                            <Button> COMPRAR !</Button>
                        </ContainerBuy>

                    </ContainerInfo>
                </PriceContainer>
            </Center>
            
        </Container>
    );
}

export default Prices;