import About from "@/features/About";
import Contact from "@/features/Contact";
import Hero from "@/features/Hero";
import Projects from "@/features/Projects";
import Skills from "@/features/Skills";
import Container from "../Container";
import Footer from "../Footer";
import Head from "../Head";
import Navbar from "../Navbar";
import * as SC from "./Layout.styles";

const Layout = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Hero />
      <SC.Main>
        <Container>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Container>
      </SC.Main>
      <Footer />
    </>
  );
};

export default Layout;
