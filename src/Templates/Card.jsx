import { Images } from "../constants/Images";
import "../styles/Card.css";

const Card = ({ imgUrl, description, title, color, fontColor, tag }) => {
    return (
        <div className={`card ${tag}`} style={{ backgroundColor: color }}>
           <img
                src={imgUrl}
                alt="card info"
           /> 
           <div className="content">
                <h3 style={{ color: fontColor }}>{title}</h3>
                <p style={{ color: fontColor }}>{description}</p>
           </div>
        </div>
    );
};

export default Card;