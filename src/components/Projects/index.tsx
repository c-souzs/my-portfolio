import dataProjects from "../../utils/dataProjects";
import TitleSection from "../elements/TitleSection";
import CardProject from "./CardProject";

const Projects = () => {
    return (
        <section id="projects" className="py-14 bg-black-200 lg:py-20">
            <div className="max-w-[1140px] mx-auto relative z-50 px-4 lg:px-2">
                <TitleSection>Projetos</TitleSection>
                <ul className="flex flex-col gap-y-24">
                    {
                        dataProjects.map((project, index) => {
                            const { name, description, banner, technologies, site, repository } = project;

                            return (
                                <CardProject 
                                    key={index}
                                    name={name}
                                    description={description}
                                    banner={banner}
                                    technologies={technologies}
                                    site={site}
                                    repository={repository}
                                    inverted={index % 2 != 0}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Projects;