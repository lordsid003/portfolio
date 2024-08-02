import { Link } from "react-router-dom";
import "../styles/Project.css";

const ProjectCard = ({ imgUrl, title, desc, type, id }) => {
    const customId = title.split(".")[0].split(" ")[0].toLowerCase();

    return (
        <div 
            className={`box ${type}`}
            id={customId}
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <div className="content">
                <h2 id="title">{title}</h2>
                <p>{desc}</p>
                <Link to={`projects/${id}`}>
                    <button>
                        Details {">"}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;