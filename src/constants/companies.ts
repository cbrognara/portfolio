import { Company } from "@/interfaces/Company";

const companies: Company[] = [
  {
    id: 'intodesign',
    projects: []
  },
  {
    id: 'genesisbank',
    projects: []
  },
  {
    id: 'personal',
    projects: [
      {
        id: 'filmapp',
        tags: [
          'React', 'Javascript', 'API'
        ],
        appSourceCode: "https://github.com/cbrognara/filmapp-deploy",
        design: ""
      },
      {
        id: 'lemondesignsystem',
        tags: [
          'ReactJS', 'Styled Components'
        ],
        apiSourceCode: "",
        siteSourceCode: "https://github.com/cbrognara/lemon-energia-case",
        demo: "https://lemon-energia-case.vercel.app/",
        design: "https://www.figma.com/file/voCavm7qKW13vTfdDxinIX/Lemon---Teste-Frontend---Button?type=design&node-id=0-1&mode=design&t=y9gzTwCzujmCXRc6-0"
      },
      {
        id: 'comparedupe',
        tags: [
          'NextJS', 'ChakraUI'
        ],
        apiSourceCode: "",
        siteSourceCode: "",
        design: "https://www.figma.com/file/B4tTHRXbYsFcb3OIusDaTZ/compare-dupe?type=design&mode=design&t=y9gzTwCzujmCXRc6-0"
      },
      {
        id: 'capputeeno',
        tags: [
          'NextJS', 'TypeScript', 'Styled Comp.', 'GraphQL'
        ],
        apiSourceCode: "https://github.com/Rocketseat/frontend-challenge",
        siteSourceCode: "https://github.com/cbrognara/capputeeno",
        design: "https://www.figma.com/file/rET9F2CeUEJdiVN7JRu993/E-commerce---capputeeno?type=design&node-id=680-6449&mode=design&t=xKhfMUy3RNwZB1BZ-0"
      }
    ]
  },
]

export default companies