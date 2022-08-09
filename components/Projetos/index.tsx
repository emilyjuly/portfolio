import SectionTitle from '../SectionTtitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';
import todolist from '../../src/img/todolist.png';
import justcats from '../../src/img/justcats.png';
import flexturismos from '../../src/img/flexturismos.png';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
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
