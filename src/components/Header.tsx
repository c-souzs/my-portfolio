import classNames from "classnames";
import Logo from "./elements/Logo";

const optionsMenu = [
    {
        label: "Quem sou",
        hrefValue: "about"
    },
    {
        label: "Projetos",
        hrefValue: "projects"
    },
    {
        label: "Conhecimentos",
        hrefValue: "knowledge"
    }
]

type HeaderProps = {
    showButtonHeader: boolean;
}

const Header = ({ showButtonHeader }: HeaderProps) => {
    return (
        <header className="fixed z-[999] w-full bg-black-200 font-poppins text-white border-b border-black-100">
            <div className="max-w-[1140px] mx-auto">
                <nav className="h-[100px] flex justify-between items-center">
                    <Logo />
                    <ul className="flex justify-center gap-x-12">
                        {
                            optionsMenu.map(({label, hrefValue}, index) => (
                                <li key={index}>
                                    <a href={`#${hrefValue}`} className="relative inline-block text-lg after:block after:h-[2px] after:w-[0px] after:bg-blue-100 after:mt-1 after:absolute after:duration-[0.3s] after:rounded  hover:after:w-full"> { label } </a>
                                </li>
                            ))
                        }
                        {
                            showButtonHeader && (
                                <li>
                                    <button className="relative inline-block text-lg animate-right after:block after:h-[2px] after:w-full after:bg-blue-100 after:mt-1 after:absolute after:rounded">Baixar cv</button>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;