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
        design: ""
      }
    ]
  },
]

export default companies