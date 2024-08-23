import "../styles/Card.css";

const Card = ({ imgUrl, description, title, color, fontColor, tag, tech }) => {
    return (
        <div className={`card ${tag}`} style={{ backgroundColor: color }}>
           <img
                src={imgUrl}
                alt="card info"
           /> 
           <div className="content">
                <h3 style={{ color: fontColor }}>{title}</h3>
                <h3 style={{ color: fontColor, border: `0.02px solid ${fontColor}`, padding: "0.2rem 1rem", borderRadius: "0.3rem" }}>{tech}</h3>
                <p style={{ color: fontColor }}>{description}</p>
           </div>
        </div>
    );
};

export default Card;