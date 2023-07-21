import Logo from "./elements/Logo";
import Social from "./elements/Social";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="bg-black-200 relative z-50">
            <div className="max-w-7xl py-10 px-6 text-white mx-auto">
                <div className="flex flex-wrap justify-center gap-6 items-center sm:justify-between">
                    <Logo />
                    <Social type="big"/>
                </div>
                <p className="text-white-50 text-center mt-8">Copyright © {date.getFullYear()} - Alguns direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;