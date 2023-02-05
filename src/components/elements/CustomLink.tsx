import className from 'classnames';
import { IconType } from 'react-icons/lib';
import { Link } from 'react-router-dom';

type LinkProps = {
    text: string;
    to: string;
    type: "primary" | "secondary";
    icon?: IconType;
}

const CustomLink = ({ text, to, type, icon }: LinkProps) => {
    const Icon = icon;

    return (
        <Link to={to} 
            className={className("rounded-3xl px-8 py-2 text-base text-white-100 font-poppins border border-blue-100 flex items-center gap-3 transition-colors", { "bg-blue-100 hover:bg-blue-200 hover:border-blue-200": type === "primary"}, {"bg-transparent hover:bg-blue-200 hover:border-blue-200": type === "secondary"})}
            target="_blank"
        >
            { text }
            { Icon && <Icon size={16} color="#FFF"/> }
        </Link>
    )
}

export default CustomLink;