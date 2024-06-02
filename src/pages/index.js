import Achievements from "../components/Acomplishments/Achievements";
import Education from '../components/Education/Education';
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
      <Education />
      <Technologies />
      <Achievements />
    </Layout>
  );
};

export default Home;
