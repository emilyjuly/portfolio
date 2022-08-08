import BannerProjeto from '../../../../components/BannerProjeto';
import { Header } from '../../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyle';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        title="Projeto 01"
        type="Website"
        imgUrl="https://todoist.com/static/home/features/clear-your-mind-1008.jpg"
      />

      <main>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nisi aspernatur aut veniam sed non, molestiae veritatis eaque magnam
          sit voluptas ratione eos eveniet ducimus mollitia reiciendis
          temporibus fugiat, enim tempore consequatur quas! Dignissimos natus
          voluptatem nulla, dolore distinctio sequi quae aperiam minus molestiae
          dolores obcaecati, voluptate quisquam at consequuntur perspiciatis
          sapiente reprehenderit? Harum eaque explicabo obcaecati soluta quas
          minima autem alias culpa magni, eligendi libero aliquid voluptates
          delectus labore enim incidunt aperiam quisquam numquam, placeat veniam
          possimus doloremque optio?
        </p>
        <button type="button">
          <a href="#">Acesse o projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
