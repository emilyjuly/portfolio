import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../src/img/perfil.jpeg';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="My photo" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Emily July</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">// Quem sou eu?</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Função: <span className="blue">Desenvolvedora Front-end,</span>
            </div>
            <div>
              Nível: <span className="blue">Júnior</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Formação</span> {'\u007B'}
            <div>
              Técnico: <span className="blue">Informática,</span>
            </div>
            <div>
              Superior: <span className="blue">Sistemas de informação,</span>
            </div>
            {'\u007D'}
            <span className="secondComment">
              /* Realizo cursos livres de programação */
            </span>
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
