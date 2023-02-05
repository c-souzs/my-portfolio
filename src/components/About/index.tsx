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
                        <p className="intervalCardReveal">Prazer, meu nome é Caio Henrique de Souza, mas sou conhecido como "souzzs" (nickname de desenvolvedor). Tenho 20 anos e sou de Pains, MG. Atualmente, estou cursando o primeiro ano de Sistemas de Informação na UFLA. Depois de completar o ensino médio técnico no IFMG - Campus Formiga, descobri o mundo da programação e decidi seguir carreira na área de desenvolvimento web.</p>
                        <p className="intervalCardReveal">Dediquei cerca de 8 meses para me atualizar nas principais tecnologias de JavaScript para desenvolvimento de interfaces, criando projetos como dashboards, e-commerces e landing pages. Fiquei ainda mais apaixonado por este incrível mundo da programação. Neste período, trabalhei bastante nas minhas habilidades soft, sendo ativo em comunidades no Discord.</p>
                        <p className="intervalCardReveal">Meus planos são me tornar um desenvolvedor full-stack e dominar as principais tecnologias da melhor linguagem, o JavaScript. Sou apaixonado por futebol, corrida e música. Três palavras que me definem? Consistente, esforçado e otimista.</p>
                    </div>
                </div>
                <Formation />
            </div>
        </section>
    )
}

export default About;