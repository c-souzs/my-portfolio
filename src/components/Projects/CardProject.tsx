import CardsTecnologies from "./CardsTechnologies";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import { Project } from "../../utils/dataProjects";
import classNames from "classnames";
import { SiGithub } from "react-icons/si";
import React from "react";

type CardProjectProps = Project & {
    inverted: boolean;
}

const CardProject = ({ name, description, banner, technologies, site, repository, inverted }: CardProjectProps) => {
    
    return (
        <li className={classNames("grid gap-8", {"grid-cols-card-project-inverted": inverted}, {"grid-cols-card-project": !inverted})}>
            <img src={banner} alt={name} className={classNames("w-full rounded", {"row-start-1 col-start-2": inverted})}/>
            <div className={classNames({"row-start-1 col-start-1": inverted})}>
                <h3 className='font-poppins text-2xl mb-3 flex items-center gap-2 before:w-4 before:h-1 before:bg-blue-200 before:inline-block before:rounded'>{ name }</h3>
                <p className='font-roboto text-[#d8d8d8]'>
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
                <div className='flex items-center gap-6 font-poppins'>
                    <Link to={site} target="_blank" className="group flex justify-between items-center gap-3 rounded-3xl px-8 py-2 text-base font-poppins border border-blue-100">
                        Visitar site
                        <HiArrowSmRight size={16} color="#FFF" className="transition-transform group-hover:translate-x-1"/>
                    </Link>
                    <Link to={repository} className="text-[#d8d8d8] text-sm flex items-center gap-3 transition-colors hover:text-white"> 
                        Repositório 
                        <SiGithub size={14} />
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default CardProject;