import Link from 'next/link';
import SectionTitle from '../SectionTtitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import suits from '../../src/img/suits.png';
import recommendations from '../../src/img/recommendations.png';
import todolist from '../../src/img/todolist.png';
import justcats from '../../src/img/justcats.png';
import flexturismos from '../../src/img/flexturismos.png';
import upsidedown from '../../src/img/upsidedown.png';
import portfolio from '../../src/img/portfolio.png';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />
      <section>
        <ProjetoItem img={suits} title="Suits" slug="Suits" />
        <ProjetoItem
          img={recommendations}
          title="Recommendations page"
          slug="Recommendations"
        />
        <ProjetoItem
          img={portfolio}
          title="Portfólio Pessoal"
          slug="Portfólio"
        />
        <ProjetoItem img={upsidedown} title="Upside Down" slug="upsidedown" />
        <ProjetoItem img={todolist} title="To-do list" slug="todolist" />
        <ProjetoItem img={justcats} title="Just cats" slug="justcats" />
        <ProjetoItem
          img={flexturismos}
          title="Flex Turismos"
          slug="flex turismos"
        />
      </section>

      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
