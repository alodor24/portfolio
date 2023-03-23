export enum SectionEnum {
  HERO = "hero",
  ABOUT = "about",
  SKILLS = "skills",
  PROJECTS = "projects",
}

export enum Lang {
  ES = "ES",
  EN = "EN",
}

export const Navbar_ES = [
  {
    name: "Inicio",
    to: SectionEnum.HERO,
  },
  {
    name: "Acerca de",
    to: SectionEnum.ABOUT,
  },
  {
    name: "Habilidades",
    to: SectionEnum.SKILLS,
  },
  {
    name: "Proyectos",
    to: SectionEnum.PROJECTS,
  },
];

export const Navbar_EN = [
  {
    name: "Home",
    to: SectionEnum.HERO,
  },
  {
    name: "About",
    to: SectionEnum.ABOUT,
  },
  {
    name: "Skills",
    to: SectionEnum.SKILLS,
  },
  {
    name: "Projects",
    to: SectionEnum.PROJECTS,
  },
];

export const skills = [
  {
    name: "JavaScript",
    range: 75,
  },
  {
    name: "Python",
    range: 55,
  },
  {
    name: "HTML",
    range: 95,
  },
  {
    name: "CSS",
    range: 89,
  },
  {
    name: "Styled Components",
    range: 79,
  },
  {
    name: "MySQL",
    range: 55,
  },
  {
    name: "Firebase",
    range: 45,
  },
  {
    name: "GIT",
    range: 72,
  },
  {
    name: "Bootstrap",
    range: 96,
  },
  {
    name: "Material UI",
    range: 65,
  },
  {
    name: "React",
    range: 68,
  },
  {
    name: "Next",
    range: 52,
  },
  {
    name: "TypeScript",
    range: 45,
  },
  {
    name: "React Query",
    range: 45,
  },
  {
    name: "WordPress",
    range: 75,
  },
];

export const projects = [
  {
    name: "Marvel Challenge",
    type: "Web App",
    image: "/assets/images/portfolio/app-marvel.jpeg",
    url: "https://marvel-app-challenge.vercel.app/",
  },
  {
    name: "Calculator React Project",
    type: "Web App",
    image: "/assets/images/portfolio/calculator.jpeg",
    url: "https://calculator-ten-tawny.vercel.app/",
  },
  {
    name: "Liteflix Challenge",
    type: "Web App",
    image: "/assets/images/portfolio/app-liteflix.jpeg",
    url: "https://liteflix-challenge.vercel.app/",
  },
  {
    name: "DM Hosting",
    type: "One Page",
    image: "/assets/images/portfolio/dmhosting.jpeg",
    url: "https://dmhosting.co",
  },
  {
    name: "SomosFit",
    type: "Blog",
    image: "/assets/images/portfolio/somos-fit.jpeg",
    url: "https://blog.somosfit.com/blog",
  },
  {
    name: "Oriente Hosting",
    type: "Web Site",
    image: "/assets/images/portfolio/oriente-hosting.jpeg",
    url: "https://www.orientehosting.com/",
  },
];

export enum HeroLang {
  TITLE_ES = "José A. Méndez",
  SUBTITLE_ES = "Desarrollador Web Front - End",
  BUTTON_ES = "Conóceme",

  TITLE_EN = "Jose A. Mendez",
  SUBTITLE_EN = "Web Developer Front - End",
  BUTTON_EN = "Know me",
}

export enum AboutLang {
  TITLE_ES = "Acerca de",
  PARAGRAPH_1_ES = "Hola, me llamo José Alejandro Méndez Sánchez y soy un Ingeniero Informático Venezolano apasionado por la tecnología. Alodor es mi seudónimo, el mismo es un acrónimo originado a partir de un juego de palabras.",
  PARAGRAPH_2_ES = "Soy un desarrollador con más de 4 años de experiencia en tecnologías web. Especialista en brindar solución a problemas mediante metodologías ágiles.",
  PARAGRAPH_3_ES = "Siempre tengo interés por aprender, probar y aplicar nuevas herramientas o soluciones.",
  PARAGRAPH_4_ES = "En la actualidad busco llegar al siguiente nivel, convertirme en un desarrollador que pueda dominar tanto el Frontend como el Backend y poder aportar todos mis conocimientos en un entorno colaborativo.",

  TITLE_EN = "About",
  PARAGRAPH_1_EN = "Hi, my name is Jose Alejandro Mendez Sanchez and I'm a Venezuelan Computing Engineer passionate about technology. Alodor is my nickname, the same is an acronym originated from a wordplay.",
  PARAGRAPH_2_EN = "I'm a developer with more than 4 years of experience in web technologies. Specialist in providing solutions to problems through agile methodologies.",
  PARAGRAPH_3_EN = "I'm always interested in learning, testing and applying new tools or solutions.",
  PARAGRAPH_4_EN = "Currently, I try to get to next level, become an expert developer in Frontend and Backend and be able to contribute all my knowledge in a collaborative environment.",
}

export enum SkillLang {
  TITLE_ES = "Habilidades",
  SUBTITLE_ES = "Tecnologías con las cuales me desenvuelvo.",

  TITLE_EN = "Skills",
  SUBTITLE_EN = "Technologies with which I develop.",
}

export enum ProjectLang {
  TITLE_ES = "Proyectos",
  SUBTITLE_ES = "Algunos de los proyectos realizados.",
  BUTTON_ES = "Ver Proyecto",

  TITLE_EN = "Projects",
  SUBTITLE_EN = "Some projects that I have developed.",
  BUTTON_EN = "See Project",
}

export enum ContactLang {
  TITLE_ES = "Tú tranquilo",
  SUBTITLE_ES = "que del trabajo web yo me encargo.",

  TITLE_EN = "Keep calm",
  SUBTITLE_EN = "I'll take care of the web work.",
}

export enum FooterLang {
  COPY_ES = "Todos los derechos reservados.",
  AUTHOR_ES = "Desarrollado por Alodor",

  COPY_EN = "All rights reserved.",
  AUTHOR_EN = "Developed by Alodor",
}

export const TIME_DELAY = 3000;
