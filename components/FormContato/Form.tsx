import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../src/services/sendMail';
import theme from '../../src/styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!nome || !email || !mensagem) {
      toast('Preencha todos os campos antes de enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(nome, email, mensagem);
      setNome('');
      setEmail('');
      setMensagem('');

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast(
        'Ocorreu um erro ao tentar enviar a sua mensagem. Tente novamente!',
        {
          style: {
            background: theme.error,
            color: '#fff'
          }
        }
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome *"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="E-mail *"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem *"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}
