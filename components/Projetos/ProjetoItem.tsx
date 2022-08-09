import { ProjetoContainer } from './styles';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';

interface ProjetosProps {
  title: string;
  slug: string;
  img: string;
}

export default function ProjetoItem({ title, slug, img }: ProjetosProps) {
  return (
    <ProjetoContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
