import self from "../../assets/my-self.png";
import Social from "../elements/Social";
import TitleSection from "../elements/TitleSection";
import Formation from "./Formation";

const About = () => {
    return (
        <section id="about" className="py-14 bg-black-100 text-white lg:py-20">
            <div className="max-w-7xl mx-auto px-6 relative z-50">
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
                        <p className="intervalCardReveal">Prazer, meu nome é Caio Henrique de Souza. Tenho 20 anos e atualmente moro em Lavras, MG. Sou desenvolvedor front-end, entusiasta do desenvolvimento web, técnico em informática pelo IFMG e cursando Sistemas de Informação.</p>
                        <p className="intervalCardReveal">Durante minha jornada de estudos, tive a oportunidade de realizar projetos desafiadores para aplicar minhas habilidades. Entre eles, destaco uma dashboard administrativa e um sistema online com a integração de uma API de pagamentos. Esses projetos me permitiram evoluir minhas habilidades em tecnologias como JavaScript, Typescript, React, Next.js, Styled Components, Redux e GraphQL. Como resultado, aprimorei meus conhecimentos em JavaScript e adotei boas práticas de programação avançadas.</p>
                        <p className="intervalCardReveal">Meus planos são me tornar um desenvolvedor full-stack e dominar as principais tecnologias da melhor linguagem, o JavaScript. Estou sempre pronto para enfrentar novos desafios e buscar novas oportunidades para aprimorar minhas habilidades 💪🏻</p>
                    </div>
                </div>
                <Formation />
            </div>
        </section>
    )
}

export default About;