import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          property="og:image"
          content="https://alodor.vercel.app/assets/images/bg-hero.jpeg"
        />
        <meta
          name="description"
          content="Diseño y desarrollo de aplicaciones web y móviles con estandares actuales de UI/UX, Seguridad y Compatibilidad con distintos navegadores y dispositivos."
        />
        <meta
          name="keywords"
          content="diseño web, desarrollo de páginas web, elaboración de sitios web, diseño web, alodor, desarrollo de app, comercio electrónico, tienda virtual, crear carrito de compra, diseño responsive, blog, aplicaciones web, aplicaciones móviles"
        />
        <link rel="icon" href="/assets/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
