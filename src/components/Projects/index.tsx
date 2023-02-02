import dataProjects from '../../utils/dataProjects';
import TitleSection from '../elements/TitleSection';
import CardProject from './CardProject';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-black-200 text-white">
            <div className="max-w-[1140px] mx-auto relative z-50">
                <TitleSection>Projetos</TitleSection>
                <ul className='flex flex-col gap-y-36'>
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