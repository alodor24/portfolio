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

export const technologies = [
  {
    name: "bootstrap",
    icon: "/assets/images/logos/bootstrap.svg",
  },
  {
    name: "css",
    icon: "/assets/images/logos/css.svg",
  },
  {
    name: "expressjs",
    icon: "/assets/images/logos/expressjs.svg",
  },
  {
    name: "git",
    icon: "/assets/images/logos/git.svg",
  },
  {
    name: "html",
    icon: "/assets/images/logos/html.svg",
  },
  {
    name: "javascript",
    icon: "/assets/images/logos/javascript.svg",
  },
  {
    name: "jest",
    icon: "/assets/images/logos/jest.svg",
  },
  {
    name: "json",
    icon: "/assets/images/logos/json.svg",
  },
  {
    name: "material-ui",
    icon: "/assets/images/logos/material-ui.svg",
  },
  {
    name: "mysql",
    icon: "/assets/images/logos/mysql.svg",
  },
  {
    name: "nextjs",
    icon: "/assets/images/logos/nextjs.svg",
  },
  {
    name: "node",
    icon: "/assets/images/logos/node.svg",
  },
  {
    name: "postgresql",
    icon: "/assets/images/logos/postgresql.svg",
  },
  {
    name: "python",
    icon: "/assets/images/logos/python.svg",
  },
  {
    name: "react",
    icon: "/assets/images/logos/react.svg",
  },
  {
    name: "redux",
    icon: "/assets/images/logos/redux.svg",
  },
  {
    name: "styled-components",
    icon: "/assets/images/logos/styled-components.svg",
  },
  {
    name: "testing-library",
    icon: "/assets/images/logos/testing-library.svg",
  },
  {
    name: "typescript",
    icon: "/assets/images/logos/typescript.svg",
  },
];

export const projects = [
  {
    name: "Marvel Challenge",
    type: "Web App",
    image: "/assets/images/portfolio/app-marvel.jpeg",
    tags: ["React", "Typescript", "Bootstrap", "Styled Components"],
    path_to_project: "https://marvel-app-challenge.vercel.app/",
    path_to_repository: "",
  },
  {
    name: "NCR Challenge",
    type: "Web App",
    image: "/assets/images/portfolio/ncr-challenge.jpeg",
    tags: ["React", "Typescript", "Redux", "Styled Components", "Jest"],
    path_to_project: "https://ncr-challenge-peach.vercel.app/",
    path_to_repository: "https://github.com/alodor24/ncr-challenge",
  },
  {
    name: "Calculator React Project",
    type: "Web App",
    image: "/assets/images/portfolio/calculator.jpeg",
    tags: ["React", "Typescript", "Material UI", "Styled Components"],
    path_to_project: "https://calculator-ten-tawny.vercel.app/",
    path_to_repository: "https://github.com/alodor24/calculator",
  },
  {
    name: "Liteflix Challenge",
    type: "Web App",
    image: "/assets/images/portfolio/app-liteflix.jpeg",
    tags: ["React", "Next", "Bootstrap"],
    path_to_project: "https://liteflix-challenge.vercel.app/",
    path_to_repository: "https://github.com/alodor24/liteflix-challenge",
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
  BUTTON_PROJECT_ES = "Demo",
  BUTTON_REPO_ES = "Ver Repositorio",
  TAGS_ES = "Etiquetas",

  TITLE_EN = "Projects",
  SUBTITLE_EN = "Some projects that I have developed.",
  BUTTON_PROJECT_EN = "Demo",
  BUTTON_REPO_EN = "See Repository",
  TAGS_EN = "Tags",
}

export enum ContactLang {
  TITLE_ES = "Me puedes encontrar en",

  TITLE_EN = "You can find me at",
}

export enum FooterLang {
  AUTHOR_ES = "Desarrollado con <i class='fas fa-heart'></i> por Alodor",

  AUTHOR_EN = "Developed with <i class='fas fa-heart'></i> by Alodor",
}

export const TIME_DELAY = 3000;
