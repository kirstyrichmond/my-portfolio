import Achievements from "../components/Acomplishments/Achievements";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Technologies />
      <Achievements />
    </Layout>
  );
};

export default Home;
