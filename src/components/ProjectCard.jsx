function ProjectCard({ img="/placeholder.jpg", name="Placeholder Name", link, description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et porttitor risus. Etiam a condimentum metus, sit amet tempus enim. Nullam ac turpis tempus, mattis mauris at, varius nulla." }) {
    return (
        <a href={link} target="_blank">
            <div className="project-card">
                <img src={img}/>
                <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;