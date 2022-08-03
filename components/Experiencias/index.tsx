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
          title="Experiência"
          description="Um pouco sobre minha experiência profissional atual"
          text="Atuo como suporte avançado de nível 2. Já atuei durante 1 ano e 7 meses na mesma empresa como analista de nível 1, onde também ocupei a posição de back de supervisão e ponto focal. Em meu trabalho atual lido com tecnologias como Active Directory, Microsoft Intune, Microsoft Azure e VMWare Horizon, atuo também com Office, Windows, servidores de impressão e de arquivos, entre outros."
        />
        <ExperienciaItem
          title="Objetivo"
          description="O que eu quero?"
          text="Busco minha primeira oportunidade como desenvolvedora Fron-end Júnior, para colocar minhas habilidades em prática e desenvolver aplicações inteligentes, acessíveis e intuitivas."
        />
        <ExperienciaItem
          title="Motivação"
          description="O que me motiva?"
          text="Quero usar minha experiência com o usuário final que obtenho trabalhando com suporte atualmente, para desenvolver visando a experiência do usuário, levando em conta que possivelmente essa pessoa usará minha aplicação para trabalhar, ou dependerá da mesma para desenvolver determinada função, por isso preciso me certificar de ser algo intuitivo e acessível."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
