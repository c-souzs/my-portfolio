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
        description: "No meu maior projeto desenvolvido criei uma dashboard utilizando o <span> nextJs </span> para criar interfaces com atualização assíncrona, graças a <span> contextAPI </span>. No lado do back, fiz a integração do sistema com o <span> prisma </span> para criar o banco de dados e o <span> planetScale </span> para hospedagem.",
        banner: dashboard,
        site: "https://next-dash-souzzs.vercel.app/login",
        repository: "https://github.com/souzzs/next-dash",
        technologies: ["typescript", "next", "prisma", "node", "tailwindcss"]
    },
    {
        name: "Custom ranek",
        description: "Uma e-commerce de anúncios e vendas de produtos eletronicos. Nela trabalhei com o <span> react-router-dom </span> para manipular as rotas e utilizei o <span> redux </span> para controlar estados de requisição e dados do sistema.",
        banner: customRanek,
        site: "https://custom-ranek.vercel.app/",
        repository: "https://github.com/souzzs/custom-ranek",
        technologies: ["typescript", "react", "redux", "styledcomponents"]
    },
    {
        name: "Hadye",
        description: "Uma landing page para uma empresa fictícia de gestão e aumento de vendas. O objetivo do projeto foi amplicar e estudar das bibliotecas <span> tailwindcss </span> e <span> react </span>. Nele foram aplicados recursos nativos do <span> javascript </span> para criar animações suave ao scroll.",
        banner: hadye,
        site: "https://hadye.vercel.app/",
        repository: "https://github.com/souzzs/hadye",
        technologies: ["javascript", "typescript", "react", "tailwindcss"]
    },
    {
        name: "Gatos fantásticos",
        description: "Gatos fantásticos é um site para uma ONG fictícia de adoção de gatos. O intuito do projeto foi aprofundar os conhecimentos em <span> consumo de API'S </span> com javascript puro e a  utilização do <span> github </span> para hospedagem de código e para o aprendizado de um <span> gitflow </span>.",
        banner: gatosFantasticos,
        site: "https://souzzs.github.io/gatos-fantasticos/",
        repository: "https://github.com/souzzs/gatos-fantasticos",
        technologies: ["html", "css", "javascript"]
    },
]

export default dataProjects;