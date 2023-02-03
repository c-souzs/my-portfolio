import Logo from "./elements/Logo";
import Social from "./elements/Social";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="bg-black-200 relative z-50">
            <div className="max-w-[1140px] py-10 px-4 text-white mx-auto lg:px-2">
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