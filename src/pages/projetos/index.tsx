import Head from 'next/head';
import { Header } from '../../../components/Header';
import ProjetoItem from '../../../components/ProjetoPage/index';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import todolist from '../../img/todolist.png';
import justcats from '../../img/justcats.png';
import flexturismos from '../../img/flexturismos.png';
import upsidedown from '../../img/upsidedown.png';
import suits from '../../img/suits.png';
import recommendations from '../../img/recommendations.png';
import portfolio from '../../img/portfolio.png';

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
        <ProjetoItem imgUrl={suits} title="Suits" slug="Suits" />
        <ProjetoItem
          imgUrl={recommendations}
          title="Recommendations page"
          slug="Recommendations"
        />
        <ProjetoItem
          imgUrl={portfolio}
          title="Portfólio Pessoal"
          slug="Portfólio"
        />
        <ProjetoItem
          imgUrl={upsidedown}
          title="Upside Down"
          slug="upsidedown"
        />
        <ProjetoItem imgUrl={todolist} title="To-do list" slug="todolist" />
        <ProjetoItem imgUrl={justcats} title="Just cats" slug="justcats" />
        <ProjetoItem
          imgUrl={flexturismos}
          title="Flex Turismos"
          slug="flex turismos"
        />
      </main>
    </ProjetosContainer>
  );
}
