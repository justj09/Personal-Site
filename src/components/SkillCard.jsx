function SkillCard({ img, name }) {
    return (
        <div className="skill-card">
            <img src={img} alt={name + " Icon"} />
        </div>
    )
}

export default SkillCard;