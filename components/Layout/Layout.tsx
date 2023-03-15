import About from "@/features/About";
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
        </Container>
      </SC.Main>
      <Footer />
    </>
  );
};

export default Layout;
