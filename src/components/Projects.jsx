import ProjectCard from "./ProjectCard";

function Projects(){
    return(
        <>
        <section>
            <h1>Projects</h1>
            <ProjectCard
            title ="Burial Society"
            description="A management system for burial societies"
            technology="Node.js"/>

            <ProjectCard
            title="NovaStack"
            description="A Saas landing page"
            technology="HTML, CSS, JavaScript"/>

            <ProjectCard
            title="React learning project"
            description="My first react app"
            technology="React"/>
        </section>
        </>
    );
}

export default Projects;