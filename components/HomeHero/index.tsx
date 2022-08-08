import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../src/img/Perfil.jpeg';

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
            <span className="comment">// Buscando por vagas como</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Objetivo: <span className="blue">Desenvolvedora Front-end,</span>
            </div>
            <div>
              Nível: <span className="blue">Júnior</span>
            </div>
            {'\u007B'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Experiência</span> {'\u007B'}
            <div>
              Cargo: <span className="blue">Suporte técnico II,</span>
            </div>
            <div>
              Empresa: <span className="blue">Indra Company,</span>
              <div>
                <span>
                  Tempo: <span className="blue">1 ano e 9 meses (Atual)</span>
                </span>
              </div>
            </div>
            {'\u007B'}
            <span className="secondComment">
              /* Estou em transição de carreira */
            </span>
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
