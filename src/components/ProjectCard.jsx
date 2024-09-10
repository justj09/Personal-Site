function ProjectCard(props) {
    return (
        <div className="project-card">
        <img src={props.img}/>
            <div className="card-text">
                <h4>{props.name}</h4>
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