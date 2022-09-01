import SectionTitle from '../SectionTtitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <h1>
        <SectionTitle title="Mais sobre mim" />
      </h1>
      <section>
        <ExperienciaItem
          title="Experiências"
          text="Atuei durante pouco mais de 1 ano com suporte técnico de nível 1, nesse período tive oportunidade de atuar como back de supervisão também. Trabalhei durante aproximadamente 7 meses com suporte técnico de nível 2, suporte avançado com Microsoft Office, Windows, servidores de impressão e arquivos, terminais virtuais, instalação de drivers e softwares. No momento estou atuando como desenvolvedora júnior, com automação, sustentação e desenvolvimento de aplicações."
        />
        <ExperienciaItem
          title="Motivação"
          description="O que me motiva?"
          text="Quero usar minha experiência com o usuário final que obtive trabalhando com suporte técnico, para desenvolver visando a experiência do usuário, levando em conta que possivelmente essa pessoa usará minha aplicação para trabalhar, ou dependerá da mesma para desenvolver determinada função, por isso preciso me certificar de ser algo intuitivo e acessível."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
