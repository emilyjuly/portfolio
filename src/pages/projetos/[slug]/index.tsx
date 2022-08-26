import Head from 'next/head';
import BannerProjeto from '../../../../components/BannerProjeto';
import { Header } from '../../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyle';
import todolistbanner from '../../../img/todolistbanner.png';
import justcatsbanner from '../../../img/justcatsbanner.png';
import flexturismosbanner from '../../../img/flexturismosbanner.png';
import upsidedown from '../../../img/upsidedownbanner.png';

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
      <BannerProjeto title="To-do list" imgUrl={todolistbanner} />

      <main>
        <p>
          Uma simples lista de tarefas, feita com ReactJS. Com as seguintes
          funcionalidades: Adicionar uma tarefa, remover uma tarefa e verificar
          os detalhes da tarefa - função ainda em implementação. Essa lista de
          tarefas puxa tarefas de uma API, para não ficar vazia, mas basta
          excluir as tarefas que não desejar. Acesse o repositório do projeto
          <a href="https://github.com/emilyjuly/TODOlist" target="_blank">
            {' '}
            aqui.
          </a>
        </p>
        <button type="button">
          <a href="https://emilyjuly.github.io/TODOlist/" target="_blank">
            Acesse o projeto online
          </a>
        </button>
      </main>

      <BannerProjeto title="Just cats" imgUrl={justcatsbanner} />

      <main>
        <p>
          Uma página feita com HTML, CSS e Javascript, para treinar a integração
          de API com o Javascript. Essa página consome uma API de fotos fofas de
          gatinhos. As fotos mudam ao clicar no botão "Change cat". Acesse o
          repositório do projeto clicando
          <a href="https://github.com/emilyjuly/Just_cats" target="_blank">
            {' '}
            aqui.
          </a>
        </p>
        <button type="button">
          <a href="https://emilyjuly.github.io/Just_cats/" target="_blank">
            Acesse o projeto online
          </a>
        </button>
      </main>

      <BannerProjeto title="Flex turismos" imgUrl={flexturismosbanner} />

      <main>
        <p>
          Uma página feita com o intuito de treinar os conceitos de flex box com
          CSS. Projeto totalmente responsivo, usando flex box. Esse projeto não
          tem nenhuma interação, foi feito apenas com o objetivo de praticar os
          conceitos de flex box. Acesse o repositório do projeto clicando
          <a href="https://github.com/emilyjuly/Flex_turismos" target="_blank">
            {' '}
            aqui.
          </a>
        </p>
        <button type="button">
          <a href="https://emilyjuly.github.io/Flex_turismos/" target="_blank">
            Acesse o projeto online
          </a>
        </button>
      </main>

      <BannerProjeto title="Upside Down" imgUrl={upsidedown} />

      <main>
        <p>
          Uma landing page feita com o tema da série da Netflix Stranger Things.
          Apenas para exercitar HTML, CSS e JavaScript. A página também tem um
          formulário que está conectado a um banco de dados feito com o Firebase
          do Google. Ao clicar no botão "Inverter Mundos" você pode se aventurar
          no mundo invertido. Essa página tem música, basta clicar em qualquer
          lugar que irá começar a tocar. Acesse o repositório do projeto
          clicando
          <a href="https://github.com/emilyjuly/upsidedown" target="_blank">
            {' '}
            aqui.
          </a>
        </p>
        <button type="button">
          <a href="https://upsidedown-liard.vercel.app" target="_blank">
            Acesse o projeto online
          </a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
