import {
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';

import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineWhatsApp
            onClick={() =>
              handleRedirect(
                'https://api.whatsapp.com/send?1=pt_BR&phone=5522998388466'
              )
            }
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/emilyjuly')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/emily-july-38b4671b8/'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
