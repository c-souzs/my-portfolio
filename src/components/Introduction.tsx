import React from 'react';

import image from '../assets/men.svg';
import Button from './elements/Button';
import { SiLinkedin } from 'react-icons/si';
import { HiDownload } from 'react-icons/hi';

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

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    });

    return (
        <section className="h-[calc(100vh-100px)] bg-black-200 text-white">
            <div className="h-full max-w-[1140px] mx-auto flex items-center justify-between relative z-50">
                <div>
                    <div className='mb-8'>
                        <h3 className="font-poppins text-lg text-[#d8d8d8] mb-1">
                            Olá, eu sou <p className="inline-block text-xl font-medium text-white">Caio Souza </p> <p className="inline-block text-xl font-medium animate-wave origin-[70% 70%]">👋🏻</p>
                        </h3>
                        <h1 className="text-5xl font-poppins font-semibold text-blue-100 mb-3"> Desenvolvedor <br /> front end </h1>
                        <p className='max-w-[600px] font-roboto text-[#d8d8d8] text-lg'>Estutande de sistemas de informação. Apxionado pelo ecosistema javascript. Em busca da minha primeira oportunidade.</p>
                    </div>
                    <div className="flex gap-x-8" ref={groupButtonRef}>
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
                <img src={image} alt="User ilustration" className="w-[400px] relative z-50 justify-end"/>
            </div>
        </section>
    )
}

export default Introduction;