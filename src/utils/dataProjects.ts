import { DataTechnologies } from "./dataTechnologies";
import dashboard from "../assets/dashboard.gif";
import customRanek from "../assets/custom-ranek.gif";
import hadye from "../assets/hadye.gif";
import gatosFantasticos from "../assets/gatos-fantasticos.gif";

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
        name: "Dash next",
        description: "No meu maior projeto desenvolvido, criei uma dashboard utilizando o <span> Next.js </span> para criar interfaces com atualização assíncrona graças ao <span> Context API </span>. No lado do back-end, fiz a integração do sistema com o <span> Prisma </span> para criar o banco de dados e com o <span>PlanetScale</span> para hospedagem.",
        banner: dashboard,
        site: "https://next-dash-souzzs.vercel.app/login",
        repository: "https://github.com/souzzs/next-dash",
        technologies: ["typescript", "next", "prisma", "tailwindcss"]
    },
    {
        name: "Custom ranek",
        description: "Desenvolvi uma e-commerce de anúncios e vendas de produtos eletrônicos. Nela, trabalhei com o <span> react-router-dom </span> para manipular as rotas e utilizei o <span> Redux </span> para controlar os estados de requisições e dados do sistema.",
        banner: customRanek,
        site: "https://custom-ranek.vercel.app/",
        repository: "https://github.com/souzzs/custom-ranek",
        technologies: ["typescript", "react", "redux", "styledcomponents"]
    },
    {
        name: "Hadye",
        description: "Criei uma landing page para uma empresa fictícia de gestão e aumento de vendas. O objetivo do projeto foi ampliar e estudar as bibliotecas <span> tailwindcss </span> e <span> React </span>. Nela, foram aplicados recursos nativos do <span> JavaScript </span> para criar animações suaves ao rolar a página.",
        banner: hadye,
        site: "https://hadye.vercel.app/",
        repository: "https://github.com/souzzs/hadye",
        technologies: ["javascript", "typescript", "react", "tailwindcss"]
    },
    {
        name: "Gatos fantásticos",
        description: "Gatos Fantásticos é um site para uma ONG fictícia de adoção de gatos. O objetivo do projeto foi aprofundar meus conhecimentos em <span> consumo de APIs </span> com JavaScript puro e na utilização do <span> GitHub </span> para hospedagem de código e para aprender um <span> gitflow </span>.",
        banner: gatosFantasticos,
        site: "https://souzzs.github.io/gatos-fantasticos/",
        repository: "https://github.com/souzzs/gatos-fantasticos",
        technologies: ["html", "css", "javascript"]
    },
]

export default dataProjects;