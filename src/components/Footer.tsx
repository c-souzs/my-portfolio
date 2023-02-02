import Logo from "./elements/Logo";
import Social from "./elements/Social";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="bg-black-200 relative z-50">
            <div className="max-w-[1140px] py-10 text-white mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <Social type="big"/>
                </div>
                <p className="text-[#d8d8d8] text-center mt-8">Copyright © {date.getFullYear()} - Alguns direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;