import SectionTitle from '../SectionTtitle';
import Form from './Form';
import { Container } from './styles';

export function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa entrar
            <br />
            em contato comigo?
          </>
        }
        description={
          <>
            Prencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />
      <Form />
    </Container>
  );
}

export default FormContato;
