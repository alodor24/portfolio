const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© Todos los derechos reservados. {year} - Desarrollado por Alodor</p>
    </footer>
  );
};

export default Footer;
