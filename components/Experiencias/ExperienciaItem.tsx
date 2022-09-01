import { ItemContainer } from './styles';

interface ExperienciaProps {
  title: string;
  description?: string;
  text: string;
}

export default function ExperienciaItem({
  title,
  description,
  text
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{text}</p>
      </div>
    </ItemContainer>
  );
}
