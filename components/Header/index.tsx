import Image from 'next/image';

import NavLink from './NavLink';
import { Container } from './styles';
import casa from './../../src/img/casa.png';
import pasta from './../../src/img/pasta.png';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <Image src={casa} alt="Picture of a home" width={20} height={20} />
        <NavLink title="Projetos" path="/projetos" includes />
        <Image src={pasta} alt="Picture of a folder" width={20} height={20} />
      </ul>
    </Container>
  );
}
