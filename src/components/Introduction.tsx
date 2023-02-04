import React from "react";

import image from "../assets/men.svg";
import Button from "./elements/Button";
import { SiLinkedin } from "react-icons/si";
import { HiDownload } from "react-icons/hi";

type IntroductionProps = {
    setShowButtonHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const Introduction = ({ setShowButtonHeader }: IntroductionProps) => {
    const groupButtonRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const onScroll = () => {
            const group = groupButtonRef.current;

            if(group){
                const distanceBottomToTop = group.getBoundingClientRect().bottom;

                if((distanceBottomToTop - 90) < 0) setShowButtonHeader(true);
                else setShowButtonHeader(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="h-[calc(100vh-100px)] bg-black-200 text-white">
            <div className="h-full max-w-[1140px] mx-auto px-4 relative z-50 flex flex-col justify-center md:px-2 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="mb-8">
                        <h3 className="font-poppins text-white-50 mb-1 text-lg delayMediumReveal">
                            Olá, eu sou <p className="inline-block font-medium text-xl text-white-100">Caio Souza </p> <p className="inline-block font-medium text-xl animate-wave origin-[70% 70%]">👋🏻</p>
                        </h3>
                        <h1 className="text-5xl font-poppins font-semibold text-blue-100 mb-3 delaySmallReveal"> Desenvolvedor <br /> front end </h1>
                        <p className="max-w-[600px] font-roboto text-lg text-white-50 delayMediumReveal">Estutande de sistemas de informação. Apxionado pelo ecosistema javascript. Em busca da minha primeira oportunidade.</p>
                    </div>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 delayMediumReveal" ref={groupButtonRef}>
                        <Button 
                            text="Baixar cv"
                            type="primary"
                            icon={HiDownload}
                        />
                        <Button 
                            text="Linkedin"
                            type="secondary"
                            icon={SiLinkedin}
                        />
                    </div>
                </div>
                <img src={image} alt="User ilustration" className="relative z-50 hidden md:block md:w-[350px] lg:w-[400px] delayMediumReveal"/>
            </div>
        </section>
    )
}

export default Introduction;