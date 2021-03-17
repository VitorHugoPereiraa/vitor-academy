import React, { useRef } from 'react';

import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaSass } from 'react-icons/fa';
import { SiJavascript, SiReact, SiAngularjs, SiFlutter, SiPython, SiDjango } from 'react-icons/si';

import { Container, Center, CenterIcons } from './styles';
 
function Linguages() {

const iconContainer = useRef('')

  return (
    <Container>
      <Center>
        <h2>Linguagens e frameworks que você irá aprender:</h2>

        <CenterIcons id="iconContainerr" ref={iconContainer}>
          <div>
             <AiOutlineHtml5 size="5rem" color="blue" /> 
             <h2>HTML 5</h2>
             <p>
                Domine toda a semantica e tags existente no novo HTML 5, e despare nos rankings de pesquisas dos navegadores.
             </p>

             </div>
          <div>
             <FaSass size="5rem" color="#CD6799" /> 
             <h2>SASS</h2>
             <p>
              Utilie pre-processadores CSS para otimizar sua produtividade e melhorar a estrutura do seu projeto.
             </p>

             </div>
          <div>
             <SiJavascript size="5rem" color="#EFD81D" /> 
             <h2>JAVASCRIPT</h2>
             <p>
              Traga vida a suas paginas HTML com o Javascript e deixe elas mais legais trazendo interatividade entre ela e o usuario.
             </p>

             </div>
          <div>
             <SiReact size="5rem" color="cyan" /> 
             <h2>REACT</h2>
             <p>
              Utilize uma maneira mais profissional de desenvolver paginas web utilizando componentizaçao de elementos HTML com o Javascript.
             </p>

             </div>
          <div>
             <SiAngularjs size="5rem" color="red" /> 
             <h2>ANGULAR</h2>
             <p>
            Como o React você vai utilizar componentizaçao de elementos HTML em sua pagina podendo criar sites "one pages".
             </p>

             </div>
          <div>
             <SiFlutter size="5rem" color="blue" /> 
             <h2>FLUTTER</h2>
             <p>
              Desenvolva aplicativos hibridos mais com o diferencial de poder ter um aplicativo mais rapido e fluido para ambas plataformas.
             </p>

             </div>
          <div>
             <SiReact size="5rem" color="cyan" /> 
             <h2>REACT NATIVE</h2>
             <p>
              Desenvolva aplicativos muito facilmente utilizando um framework Javascript desenvolvido a partir do React JS.
             </p>

             </div>
          <div>
             <SiPython size="5rem" color="red" /> 
             <h2>PYTHON</h2>
             <p>
              Aprenda inteligencia artificial e Machine Learning de uma maneira super facil com o Python.
             </p>
             </div>
          <div>
             <SiDjango size="5rem" color="green" /> 
             <h2>DJANGO</h2>
             <p>
              Desenvolva APIS REST para suas aplicaçoes super rapido com esse super framework do Python.
             </p>

             </div>
        </CenterIcons>

      </Center>
      {/* <Wrapper> */}

      {/* </Wrapper> */}
    </Container>
  );
}

function scrollList(){
  setTimeout(()=>{
    const LinguagesContainer =  document.getElementById('iconContainerr')
    LinguagesContainer.addEventListener('wheel', event => {
      if (event.deltaY > 0) {
        event.target.scrollBy(250, 0)
      } else {
        event.target.scrollBy(-250, 0)
      }
    })
  }, 0)
}

scrollList()
export default Linguages;