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

export enum HeadTitleLang {
  TITLE_ES = "Portafolio Profesional",
  TITLE_EN = "Professional Portfolio",
}

export enum SelectLang {
  TITLE_ES = "Lenguaje",
  OPTION_1_ES = "Inglés",
  OPTION_2_ES = "Español",

  TITLE_EN = "Language",
  OPTION_1_EN = "English",
  OPTION_2_EN = "Spanish",
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

export const projects = [
  {
    name: "Marvel Challenge",
    type: "Web App",
    image: "/assets/images/portfolio/app-marvel.jpeg",
    url: "https://marvel-app-challenge.vercel.app/",
  },
  {
    name: "NCR Challenge",
    type: "Web App",
    image: "/assets/images/portfolio/ncr-challenge.jpeg",
    url: "https://ncr-challenge-peach.vercel.app/",
  },
  {
    name: "Conexa Challenge",
    type: "Web App",
    image: "/assets/images/portfolio/conexa-challenge.jpeg",
    url: "https://conexa-challenge-phi.vercel.app/",
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
];

export enum HeroLang {
  TITLE_ES = "José A. Méndez",
  SUBTITLE_ES = "Desarrollador Web / Mobile",
  BUTTON_ES = "Conóceme",

  TITLE_EN = "Jose A. Mendez",
  SUBTITLE_EN = "Web / Mobile Developer",
  BUTTON_EN = "Know me",
}

export enum AboutLang {
  TITLE_ES = "Acerca de",
  PARAGRAPH_1_ES = "Hola, me llamo José Alejandro Méndez Sánchez y soy un Ingeniero Informático Venezolano apasionado por la tecnología. Alodor es mi seudónimo, el mismo es un acrónimo originado a partir de un juego de palabras.",
  PARAGRAPH_2_ES = "Soy un desarrollador con experiencia en tecnologías web y mobile especializado en brindar soluciones ágiles.",
  PARAGRAPH_3_ES = "Poseo una gran motivación para seguir perfeccionando habilidades y crecer profesionalmente, por tal motivo siempre tengo interés por aprender, probar y aplicar nuevas herramientas o soluciones.",
  BUTTON_ES = "Ver currículum",

  TITLE_EN = "About",
  PARAGRAPH_1_EN = "Hi, my name is Jose Alejandro Mendez Sanchez and I'm a Venezuelan Computing Engineer passionate about technology. Alodor is my nickname, the same is an acronym originated from a wordplay.",
  PARAGRAPH_2_EN = "I'm developer with experience in web and mobile technologies. Specialist in providing solutions to problems through agile methodologies.",
  PARAGRAPH_3_EN = "I have a great motivation to continue perfecting skills and growing professionally, for this reason I'm always interested in learning, testing and applying new tools or solutions.",
  BUTTON_EN = "See resume",
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
  TITLE_ES = "Me puedes encontrar en",

  TITLE_EN = "You can find me at",
}

export enum FooterLang {
  AUTHOR_ES = "Desarrollado por Alodor",

  AUTHOR_EN = "Developed by Alodor",
}

export const TIME_DELAY = 3000;
