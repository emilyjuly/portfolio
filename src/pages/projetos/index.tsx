import Head from 'next/head';
import { Header } from '../../../components/Header';
import ProjetoItem from '../../../components/ProjetoPage/index';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import todolist from '../../img/todolist.png';
import justcats from '../../img/justcats.png';
import flexturismos from '../../img/flexturismos.png';

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
        <ProjetoItem title="To-do list" slug="todolist" imgUrl={todolist} />
        <ProjetoItem title="Just cats" slug="justcats" imgUrl={justcats} />
        <ProjetoItem
          title="Flex turismos"
          slug="flexturismos"
          imgUrl={flexturismos}
        />
      </main>
    </ProjetosContainer>
  );
}
