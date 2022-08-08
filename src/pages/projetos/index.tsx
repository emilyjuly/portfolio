import Head from 'next/head';
import { Header } from '../../../components/Header';
import ProjetoItem from '../../../components/ProjetoPage/index';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <Head>
          <title>Portfolio | Projetos</title>
          <meta
            name="description"
            content="Nesta seção eu mostro alguns de meus principais projetos já realizados durante minha trajetória."
          />
          <meta property="og:image" content="/ogimage.png" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta
            property="og:description"
            content="Nesta seção eu mostro alguns de meus principais projetos já realizados durante minha trajetória."
          />
        </Head>
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
