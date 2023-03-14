import Container from "../Container";
import * as SC from "./Footer.styles";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <SC.Footer>
      <Container>
        <SC.Text>
          © Todos los derechos reservados. {year} - Desarrollado por Alodor
        </SC.Text>
      </Container>
    </SC.Footer>
  );
};

export default Footer;
