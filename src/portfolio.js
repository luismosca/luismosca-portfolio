const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://luismosca.github.io/portfolio',
  title: 'LEM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Luis Moscarelli',
  image: '../src/components/Images/Foto_cara_mia.jpg',
  role: 'Full Stack Developer',
  description:
    'Soy Licenciado en Sistemas y FullStack Developer, me dedico a la administración de Sistemas, Soporte Técnico y al desarrolo Web..',
  description2:
    'Con conocimientos en Desarrollo Full Stack Developer. Con Experiencia en Desarrollo WEB: Ej. diseñando soluciones con bases de datos Postgress, SQL y generando proyectos que me permitieron desarrollar habilidades utilizando mis Skills .',
  resume: 'https://cvluismosca.tiiny.site/',
  social: {
    linkedin: 'https://linkedin.com/in/luis-moscarelli-b5664143',
    github: 'https://github.com/luismosca',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1: PI DOGS',
    description:
      'Proyecto Individual de Henry acerca de las diferentes razas de Perros con sus caracterristicas principales de Peso, Temperamento y Vida',
    stack: [
      'Javascript, Node, React, Redux, Sequelize, Express, PostgresSQL',
      'TypeScript',
      'React',
    ],
    sourceCode: 'https://github.com/luismosca/PI-Dogs',
    livePreview: 'https://github.com/luismosca/PI-Dogs',
  },
  {
    name: 'Project 2: PF ByR',
    description:
      'Pagina Web para reposrtar personas desaparecidas y poder registrar sus carecteristicas y posbles avistajes',
    stack: [
      'Javascript, Node, React, Redux, Sequelize, Express, PostgresSQL',
      'TypeScript',
      'React',
    ],
    sourceCode: 'https://github.com/luismosca/portfolio',
    livePreview: 'https://github.com/luismosca/portfolio',
  },
  {
    name: 'Project 3: OpenBootCamp',
    description: 'Proyecto ejemplodel curso de Open BootCamp de javaScript',
    stack: [
      'Javascript, Node, React, Redux, Sequelize, Express, PostgresSQL',
      'TypeScript',
      'React',
    ],
    sourceCode: 'https://github.com/luismosca/OB-ProyectoFinal',
    livePreview: 'https://github.com/luismosca/OB-ProyectoFinal',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'Express',
  'Sequelize',
  'PostgressSQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'luismosca@gmail.com',
}

export { header, about, projects, skills, contact }
