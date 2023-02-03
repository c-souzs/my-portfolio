import className from 'classnames';
import { IconType } from 'react-icons/lib';

type ButtonProps = {
    text: string;
    type: "primary" | "secondary";
    icon?: IconType;
    onClick?: () => void;
}

const Button = ({ text, type, icon, onClick }: ButtonProps) => {
    const Icon = icon;

    return (
        <button onClick={onClick} 
            className={className("rounded-3xl px-8 py-2 text-base text-white-100 font-poppins border border-blue-100 flex items-center gap-3 transition-colors", { "bg-blue-100 hover:bg-blue-200 hover:border-blue-200": type === "primary"}, {"bg-transparent hover:bg-blue-200 hover:border-blue-200": type === "secondary"})}
        >
            { text }
            { Icon && <Icon size={16} color="#FFF"/> }
        </button>
    )
}

export default Button;