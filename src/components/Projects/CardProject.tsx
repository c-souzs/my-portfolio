import CardsTecnologies from "./CardsTechnologies";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import { Project } from "../../utils/dataProjects";
import classNames from "classnames";
import { SiGithub } from "react-icons/si";
import React from "react";
import ScrollReveal from 'scrollreveal';

type CardProjectProps = Project & {
    inverted: boolean;
}

const CardProject = ({ name, description, banner, technologies, site, repository, inverted }: CardProjectProps) => {
    
    return (
        <li className={classNames("flex  flex-col gap-y-6 lg:grid lg:gap-8", {"grid-cols-card-project-inverted": inverted}, {"grid-cols-card-project": !inverted})}>
            <img src={banner} alt={name} className={classNames("w-full rounded delaySmallReveal", {"row-start-1 col-start-2": inverted})}/>
            <div className={classNames({"row-start-1 col-start-1": inverted})}>
                <h3 className="font-poppins text-2xl text-white-100 mb-3 flex items-center gap-2 before:w-4 before:h-1 before:bg-blue-100 before:inline-block before:rounded delayMediumReveal">{ name }</h3>
                <p className="font-roboto text-white-100 delaySmallReveal">
                    { 
                        description.split("<span> ").map((strg, index) => {
                            const hasBold = strg.includes(" </span>");

                            if(hasBold){
                                const textApplyBold = strg.split(" </span>")[0];
                                const textNormal = strg.split(" </span>")[1];

                                return (
                                    <React.Fragment key={`bold-${index}`}>
                                        <span className="font-semibold text-white inline-block">{ textApplyBold }</span>
                                        { textNormal }
                                    </React.Fragment>
                                )
                            } else return <React.Fragment key={`normal-${index}`}>{ strg }</React.Fragment>;
                        })
                    }
                </p>
                <CardsTecnologies 
                    technologies={technologies}
                />
                <div className="flex items-center gap-6 font-poppins delaySmallReveal">
                    <Link to={site} target="_blank" className="group flex justify-between items-center gap-3 rounded-3xl px-8 py-2 text-base font-poppins text-white-100 border border-blue-100">
                        Visitar site
                        <HiArrowSmRight size={16} color="#FFF" className="transition-transform group-hover:translate-x-1"/>
                    </Link>
                    <Link to={repository} target="_blank" className="text-white-50 text-sm flex items-center gap-3 transition-colors hover:text-white-100"> 
                        Repositório 
                        <SiGithub size={14} />
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default CardProject;