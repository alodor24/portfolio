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
  PARAGRAPH_3_ES = "Siempre tengo interés por aprender, probar y aplicar nuevas herramientas o soluciones",
  PARAGRAPH_4_ES = "En la actualidad busco llegar al siguiente nivel, convertirme en un desarrollador que pueda dominar tanto el Frontend como el Backend y poder aportar todos mis conocimientos en un entorno colaborativo.",

  TITLE_EN = "About",
  PARAGRAPH_1_EN = "",
  PARAGRAPH_2_EN = "",
  PARAGRAPH_3_EN = "",
  PARAGRAPH_4_EN = "",
}

export enum SkillLang {
  TITLE_ES = "Habilidades",
  SUBTITLE_ES = "Tecnologías con las cuales me desenvuelvo.",

  TITLE_EN = "Skills",
  SUBTITLE_EN = "Technologies with which I develop.",
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
