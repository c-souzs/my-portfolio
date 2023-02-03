import { IconType } from "react-icons/lib";

type CardTecnhologyProps = {
    name: string;
    icon: IconType;
}

const CardTecnhology = ({ name, icon }: CardTecnhologyProps) => {
    const Icon = icon;
    return (
        <li className="group text-white uppercase font-semibold text-sm text-white-100 border border-blue-100 rounded py-6 shadow-card-knowledges transition-transform duration-200 hover:scale-[1.05]" >
            <span className="flex flex-col items-center justify-center gap-2 opacity-70 transition-opacity group-hover:opacity-100">
                <Icon size={52}/>   
                <p className="max-w-[100px] font-poppins text-center">{ name }</p>     
            </span>
        </li>
    )
}

export default CardTecnhology;