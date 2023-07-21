import classNames from "classnames";
import React from "react";
import Logo from "./elements/Logo";
import { HiDownload } from "react-icons/hi";
import downloadCurriculum from "../utils/downloadCurriculum";

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
    const [menuActive, setMenuActive] = React.useState(false);

    return (
        <header className="fixed left-0 right-0 z-[999] w-full bg-black-200 font-poppins text-white border-b border-black-100">
            <div className="max-w-7xl mx-auto px-8">
                <nav className="h-[100px] flex justify-between items-center">
                    <Logo />
                    <ul className={classNames("text-white-100 md:flex md:justify-between md:items-center md:gap-x-12", {"flex flex-col gap-y-4 absolute top-[100px] right-4 bg-black-100 p-4 rounded shadow-bg-menu-mobile animate-right": menuActive}, {"hidden": !menuActive})}>
                        {
                            optionsMenu.map(({label, hrefValue}, index) => (
                                <li key={index}>
                                    <a href={`#${hrefValue}`} className="relative inline-block text-lg after:block after:h-[2px] after:w-[0px] after:bg-blue-100 after:mt-1 after:absolute after:duration-[.3s] after:rounded  hover:after:w-full"> { label } </a>
                                </li>
                            ))
                        }
                        {
                            showButtonHeader && (
                                <li>
                                    <button onClick={async () => await downloadCurriculum()} className="relative flex items-center justify-between gap-3 text-lg animate-right transition-colors hover:text-blue-200">
                                        Baixar cv
                                        <HiDownload size={16}/>
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                    <button  
                        className={classNames("w-10 h-10 bg-black-100 flex items-center justify-center cursor-pointer rounded md:hidden after:block after:bg-current after:shadow-menu-mobile after:transition-all after:ease-in after:duration-200", {"shadow-bg-menu-mobile after:text-blue-200 after:h-1 after:w-1 after:-rotate-90 after:rounded-full": menuActive}, {"after:w-5 after:h-0.5 after:rounded after:text-white-100": !menuActive})}
                        onClick={() => setMenuActive(!menuActive)}
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header;