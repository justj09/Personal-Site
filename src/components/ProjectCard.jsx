function ProjectCard(props) {
    return (
        <div className="project-card">
            <img src={props.img}/>
            <div className="project-text">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

ProjectCard.defaultProps = {
    img: "/placeholder.jpg",
    name: "Placeholder Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et porttitor risus. Etiam a condimentum metus, sit amet tempus enim. Nullam ac turpis tempus, mattis mauris at, varius nulla."
};

export default ProjectCard;