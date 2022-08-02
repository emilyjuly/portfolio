import { Container, TextContainer } from './styles';
import picture from '../../../src/img/perfil.jpeg';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="My photo" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Eu sou a Emily July</h2>
        </TextContainer>
      </div>
    </Container>
  );
}
