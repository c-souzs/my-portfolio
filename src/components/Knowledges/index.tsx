import { dataTechnologies } from "../../utils/dataTechnologies";
import TitleSection from "../elements/TitleSection";
import CardTecnhology from "./CardTecnhology";

const Knowledges = () => {
    const arrayDataTechnologies = Object.values(dataTechnologies).map(dataTechnologie => dataTechnologie);
    
    return (
        <section id="knowledge" className="py-24 bg-black-100 text-white">
            <div className="max-w-[1140px] mx-auto relative z-50">
                <TitleSection>Conhecimentos</TitleSection>
                <ul className="grid grid-cols-6 gap-x-8 gap-y-10">
                   {
                        arrayDataTechnologies.map(({icon, name}, index) => {
                            return (
                                <CardTecnhology 
                                    index={index}
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