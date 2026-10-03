function ProjectCard({title, description, technology}){
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{technology}</h3>
        </div>
    );
}
export default ProjectCard;