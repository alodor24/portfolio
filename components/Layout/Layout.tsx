import About from "@/features/About";
import Contact from "@/features/Contact";
import Projects from "@/features/Projects";
import Skills from "@/features/Skills";
import Container from "../Container";
import Footer from "../Footer";
import Head from "../Head";
import * as SC from "./Layout.styles";

const Layout = () => {
  return (
    <>
      <Head />
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
