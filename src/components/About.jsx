import { Images } from "../constants/Images";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about section" id="about">
            <div className="about-img-wrapper">
                <img
                    src={Images.portfolioImage}
                    alt="About section"
                />
            </div>
            <div className="about-content">
                <h3 id="header">About Me</h3>
            </div>
        </div>
    );
};

export default About;