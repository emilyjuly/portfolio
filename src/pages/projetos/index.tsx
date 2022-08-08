import { Header } from '../../../components/Header';
import ProjetoItem from '../../../components/ProjetoPage/index';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://todoist.com/static/home/features/clear-your-mind-1008.jpg"
        />
      </main>
    </ProjetosContainer>
  );
}
