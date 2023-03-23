import About from "@/features/About";
import Contact from "@/features/Contact";
import Hero from "@/features/Hero";
import Projects from "@/features/Projects";
import Skills from "@/features/Skills";
import { TIME_DELAY } from "@/helpers/constants";
import { useEffect, useState } from "react";
import Container from "../Container";
import Footer from "../Footer";
import Head from "../Head";
import Loader from "../Loader";
import Navbar from "../Navbar";
import * as SC from "./Layout.styles";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, TIME_DELAY);
  }, []);

  return (
    <>
      <Head />
      {isLoading ? (
        <Loader />
      ) : (
        <SC.Wrapper>
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
        </SC.Wrapper>
      )}
    </>
  );
};

export default Layout;
