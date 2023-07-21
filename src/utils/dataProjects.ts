import { DataTechnologies } from "./dataTechnologies"
import bitwit from '../assets/bitwit-demo.png'
import dashNext from '../assets/dash-next-demo.png'
import ranek from '../assets/ranek-demo.png'
import hadye from '../assets/hadye-demo.png'
import gatosFantasticos from '../assets/gatos-fantasticos-demo.png'

export type Project = {
    name: string;
    description: string;
    banner: string;
    site: string;
    repository: string;
    technologies: DataTechnologies[]
}
type DataProjects = Project[];

const dataProjects: DataProjects = [
    {
        name: "Bitwit",
        description: "Bitwit é um sistema completo, de ponta a ponta. O sistema possui integração com a <strong> API de pagamentos Stripe </strong>. As regras de negócios foram baseadas tendo como requisito que o usuário faça um pagamento para ter acesso às demais funções do blog. <strong> Técnicas </strong> para otimizar requisições, composição de componentes e padrão de código foram utilizadas.",
        banner: bitwit,
        site: "https://bitwit-souzzs.vercel.app",
        repository: "https://github.com/c-souzs/bitwit",
        technologies: ["typescript", "next", "stripe", "graphQl", "jest", "reactTestingLibrary", "tailwindcss", "figma"]
    },
    {
        name: "Dash next",
        description: "Uma dashboard completa, com controle de estoque e gerenciamento de funcionários. O sistema abrange as <strong> regras de negócio e disponibiliza gráficos interativos </strong> . Além disso, permite a <strong> geração de relatórios em PDF </strong> com base nos dados do próprio sistema. Técnicas avançadas para trabalhar com gerenciamento de estado e refatoração foram aplicadas. O back-end foi totalmente construído utilizando <strong> PrismaJS e o PlanetScale </strong>, um banco de dados distribuído.",
        banner: dashNext,
        site: "https://next-dash-souzzs.vercel.app",
        repository: "https://github.com/c-souzs/next-dash",
        technologies: ["typescript", "next", "prisma", "tailwindcss"]
    },
    {
        name: "Custom ranek",
        description: "Uma e-commerce de produtos que realiza compra e venda de eletrônicos usados. O gerenciamento e compartilhamento de estados foram todos tratados usando o <strong> Redux </strong>. Para eventos assíncronos, <strong> o middleware Redux Thunk </strong> foi utilizado. A criação de temas dark e light foi implementada usando a passagem de propriedades e a extensão de estilos da biblioteca <strong> Styled Components </strong>. Ferramentas de <strong> padronização de código </strong>, como ESLint e Prettier, foram usadas neste e nos demais projetos acima.",
        banner: ranek,
        site: "https://custom-ranek.vercel.app/",
        repository: "https://github.com/c-souzs/custom-ranek",
        technologies: ["typescript", "react", "redux", "styledcomponents", "eslint", "prettier"]
    },
    {
        name: "Hadye",
        description: "Uma landing page com design moderno e animações suaves. O JavaScript foi utilizado para controlar as <strong> animações, acionar e limpar a árvore de eventos da DOM </strong>. A criação de temas dark e light foi feita usando recursos da biblioteca Tailwind. A linguagem <strong> TypeScript </strong> foi empregada tanto aqui quanto em todos os projetos anteriores, com o objetivo de manter os projetos altamente tipados.",
        banner: hadye,
        site: "https://hadye.vercel.app/",
        repository: "https://github.com/c-souzs/hadye",
        technologies: ["javascript", "typescript", "react", "tailwindcss"]
    },
    {
        name: "Gatos fantásticos",
        description: "Site para uma ONG de adoção de gatos. Classes, animações ao scroll e requisições puras. Tudo isso feito usando <strong> JavaScript puro </strong>, após meses de dedicação. Um <strong> workflow </strong> básico foi aplicado para trabalhar com branches, commits e pull requests.",
        banner: gatosFantasticos,
        site: "https://c-souzs.github.io/gatos-fantasticos/",
        repository: "https://github.com/c-souzs/gatos-fantasticos",
        technologies: ["html", "css", "javascript"]
    },
]

export default dataProjects;