import { HomeContainer } from '../styles/HomeStyles';

import { Header } from '../../components/Header';
import { HomeHero } from '../../components/Header/HomeHero';
import Experiencias from '../../components/Experiencias';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
      </main>
    </HomeContainer>
  );
}
