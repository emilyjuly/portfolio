import {
  SiTypescript,
  SiReact,
  SiGit,
  SiJavascript,
  SiCss3,
  SiHtml5
} from 'react-icons/si';
import SectionTitle from '../SectionTtitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<SiHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<SiCss3 />} />
        <ConhecimentoItem title="Javascript" icon={<SiJavascript />} />
        <ConhecimentoItem title="React" icon={<SiReact />} />
        <ConhecimentoItem title="Git" icon={<SiGit />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
      </section>
    </Container>
  );
}
