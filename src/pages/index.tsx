import { HomeContainer } from '../styles/HomeStyles';

import { Header } from '../../components/Header';
import { HomeHero } from '../../components/HomeHero';
import Experiencias from '../../components/Experiencias';
import Projetos from '../../components/Projetos';
import { Conhecimentos } from '../../components/Conhecimentos';
import { FormContato } from '../../components/FormContato';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title>Portfolio | Home</title>
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
      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos />
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}
