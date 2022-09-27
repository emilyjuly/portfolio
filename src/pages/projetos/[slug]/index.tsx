import Head from 'next/head';
import BannerProjeto from '../../../../components/BannerProjeto';
import { Header } from '../../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyle';
import recommendations from '../../../img/recommendations-banner.png';
import portfolio from '../../../img/portfolio-banner.png';
import todolistbanner from '../../../img/todolistbanner.png';
import justcatsbanner from '../../../img/justcatsbanner.png';
import flexturismosbanner from '../../../img/flexturismosbanner.png';
import upsidedown from '../../../img/upsidedownbanner.png';
import suits from '../../../img/suits-banner.png';
import Footer from '../../../../components/Footer';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <Head>
        <title>Portfolio | Projetos</title>
        <meta
          name="description"
          content="Sou uma desenvolvedora frontend junior, e uso esse espaço para contar sobre mim e apresentar meus projetos."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou uma desenvolvedora frontend junior, e uso esse espaço para contar sobre mim e apresentar meus projetos"
        />
      </Head>
      <BannerProjeto title="Suits" imgUrl={suits} />
      <main>
        <p>
          Uma página que conta um pouco sobre a série Suits, que atualmente é
          transmitida pela Netflix. Página desenvolvida com Vuejs e Typescript,
          para fim de prática e aprimoramento do exercício de desenvolvimento
          usando tal linguagem. Acesse o repostirório do projeto
          <a href="https://github.com/emilyjuly/Suits.git"> aqui.</a>
        </p>
        <button type="button">
          <a
            href="https://suits-gray.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Acesse o projeto online
          </a>
        </button>
      </main>
      <BannerProjeto title="Recommendations Page" imgUrl={recommendations} />
      <main>
        <p>
          Uma página de recomendações de plataformas online para aprender
          programação de forma gratuita. Essa página foi desenvolvida usando
          ReactJS, NextJS e Typescript. Acesse o repostirório do projeto
          <a href="https://github.com/emilyjuly/recommendations-page"> aqui.</a>
        </p>
        <button type="button">
          <a
            href="https://recommendations-page.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Acesse o projeto online
          </a>
        </button>
      </main>
      <BannerProjeto title="Portfólio Pessoal" imgUrl={portfolio} />
      <main>
        <p>
          Página de portfólio, onde eu exibo meus projetos pessoais e conto um
          pouco sobre mim. Essa página foi desenvolvida com ReactJS, NextJS e
          Typescript. Acesse o repostirório do projeto
          <a href="https://github.com/emilyjuly/portfolio.git"> aqui.</a>
        </p>
        <button type="button">
          <a
            href="https://portfolio-emilyjuly.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Acesse o projeto online
          </a>
        </button>
      </main>
      <BannerProjeto title="Upside Down" imgUrl={upsidedown} />
      <main>
        <p>
          Página sobre a série da Netflix Stranger Things, possui música e ao
          clicar no botão "Inverter Mundo" você pode se aventurar no mundo
          invertido. Essa página foi feita com HTML, CSS e JavaScript. Acesse o
          repostirório do projeto
          <a href="https://github.com/emilyjuly/upsidedown"> aqui.</a>
        </p>
        <button type="button">
          <a
            href="https://upsidedown-liard.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Acesse o projeto online
          </a>
        </button>
      </main>
      <BannerProjeto title="To-Do list" imgUrl={todolistbanner} />
      <main>
        <p>
          Um to do list onde você pode adicionar suas tarefas, uma página
          simples desenvolvida com ReactJS. Acesse o repostirório do projeto
          <a href="https://github.com/emilyjuly/TODOlist"> aqui.</a>
        </p>
        <button type="button">
          <a
            href="https://emilyjuly.github.io/TODOlist/"
            target="_blank"
            rel="noreferrer"
          >
            Acesse o projeto online
          </a>
        </button>
      </main>
      <BannerProjeto title="Just Cats" imgUrl={justcatsbanner} />
      <main>
        <p>
          Apenas uma página com o fim de treinar a integração de API com
          Javascript. Ao clicar no botão "Change Cat", irá aparecer outra foto
          de gatinho, direto de uma API. Acesse o repostirório do projeto
          <a href="https://github.com/emilyjuly/Just_cats"> aqui.</a>
        </p>
        <button type="button">
          <a
            href="https://emilyjuly.github.io/Just_cats/"
            target="_blank"
            rel="noreferrer"
          >
            Acesse o projeto online
          </a>
        </button>
      </main>
      <BannerProjeto title="Flex Turismos" imgUrl={flexturismosbanner} />
      <main>
        <p>
          Apenas uma página com o fim de treinar flexbox com CSS. Essa págima é
          feita apenas com HTML e CSS. Acesse o repostirório do projeto
          <a href="https://github.com/emilyjuly/Flex_turismos"> aqui.</a>
        </p>
        <button type="button">
          <a
            href="https://emilyjuly.github.io/Flex_turismos/"
            target="_blank"
            rel="noreferrer"
          >
            Acesse o projeto online
          </a>
        </button>
      </main>
      <Footer />
    </ProjetoContainer>
  );
}
