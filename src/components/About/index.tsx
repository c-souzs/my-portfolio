import self from "../../assets/my-self.png";
import Social from "../elements/Social";
import TitleSection from "../elements/TitleSection";
import Formation from "./Formation";

const About = () => {
    return (
        <section id="about" className="py-14 bg-black-100 text-white lg:py-20">
            <div className="max-w-[1140px] mx-auto px-4 relative z-50 lg:px-2">
                <TitleSection>Quem sou</TitleSection>
                <div className="mb-14 text-white-100 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
                    <div className="flex flex-col justify-center items-center gap-4 lg:block delaySmallReveal">
                        <div className="w-[250px] mb-4">
                            <img src={self} alt="Caio Souza" className="rounded-full object-cover"/>
                        </div>
                        <div className="delaySmallReveal">
                            <Social type="small"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 font-roboto">
                        <p className="intervalCardReveal">Prazer, me chamo Caio Henrique de Souza, ou souzzs (nick de desenvolvedor), tenhos 20 anos e sou natural de Pains, MG. Atualmente, estou cursando o primeiro período de Sistemas de informação na UFLA. Após cursar o ensino médio técnico no IFMG - campus Formiga, tive conhecimento sobre o mundo da programação e decidi seguir minha carreira na área de desnvolvimento web. </p>
                        <p className="intervalCardReveal">Dediquei cerca de 8 meses para me atualizar das principais tecnologias javascript para o desenvolvimento de interfaces, criando projetos como: dashboard, e-commerce e landing pages, me apaixonando ainda mais por esse mundo incrível da programação. Nesse período trabalhei bastante minhas softs kill sendo ativo em comunidades do discord.</p>
                        <p className="intervalCardReveal">Tenho planos de me tornar um desenvolvedor full stack e dominar as principais tecnologias da melhor linguagem, javascript. Sou apaixonado por futebol, corrida e músicas. Três palavras que me definem? Consistente, esforçado e otimista.</p>
                    </div>
                </div>
                <Formation />
            </div>
        </section>
    )
}

export default About;