import { dataTechnologies, DataTechnologies } from "../../utils/dataTechnologies";

type CardsTecnologiesProps = {
    technologies: DataTechnologies[]
}

const CardsTecnologies = ({ technologies }: CardsTecnologiesProps) => {
    const selectTechnologies = technologies.map(tech => {
        const technologie = dataTechnologies[tech];

        return technologie;
    });
    
    return (
        <ul className='flex gap-4 mt-4 mb-6'>
            {
                selectTechnologies.map((data, index) => {
                    const { icon, name } = data;
                    const Icon = icon;

                    return (
                        <li className='flex flex-col items-center gap-1 opacity-50 transition-opacity hover:opacity-80' key={index}>
                            <Icon size={18} color="#0E7CFF"/>
                            <p className='font-roboto font-semibold text-[10px] uppercase text-blue-100'>{ name }</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CardsTecnologies;