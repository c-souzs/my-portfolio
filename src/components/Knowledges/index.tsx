import { dataTechnologies } from "../../utils/dataTechnologies";
import TitleSection from "../elements/TitleSection";
import CardTecnhology from "./CardTecnhology";

const Knowledges = () => {
    const arrayDataTechnologies = Object.values(dataTechnologies).map(dataTechnologie => dataTechnologie);
    
    return (
        <section id="knowledge" className="py-14 bg-black-100 text-white lg:py-20">
            <div className="max-w-[1140px] mx-auto relative z-50 px-4 lg:px-2">
                <TitleSection>Conhecimentos</TitleSection>
                <ul className="grid grid-cols-2 justify-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                   {
                        arrayDataTechnologies.map(({icon, name}, index) => {
                            return (
                                <CardTecnhology 
                                    key={index}
                                    name={name}
                                    icon={icon}
                                />
                            )
                        })
                   } 
                </ul>
            </div>
        </section>
    )
}

export default Knowledges;