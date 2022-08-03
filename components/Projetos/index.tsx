import SectionTitle from '../SectionTtitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/Link';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        <ProjetoItem
          img="https://todoist.com/_next/static/images/favorites-mobile@2x_dcc98b6b6c927554d250a739f6dfc02b.png"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://todoist.com/_next/static/images/favorites-mobile@2x_dcc98b6b6c927554d250a739f6dfc02b.png"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://todoist.com/_next/static/images/favorites-mobile@2x_dcc98b6b6c927554d250a739f6dfc02b.png"
          title="Projeto 01"
          type="Website"
          slug="teste"
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
